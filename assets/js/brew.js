// ═══════════════ BREW-YOUR-OWN-POTION GAME ═══════════════
// Build ingredient sequences straight from the POTIONS recipe data above,
// so the game always matches the recipes shown in the guide.
function potionSeq(p) { return p.base.slice(1).map(s => s.img); }

const BREW_ING_KEYS = [...new Set(POTIONS.flatMap(p => potionSeq(p)))].sort((a, b) => tIng(a).localeCompare(tIng(b)));
BREW_ING_KEYS.push('gunpowder', 'dragons_breath', 'redstone', 'glowstone');

let brewStarted = false;
let brewSeq = [];
let brewType = 'regular';   // regular | splash | lingering
let brewModifier = null;    // null | redstone | glowstone
let brewLog = [];           // list of {key, vars}
let brewMsgState = { key: 'brewgame.idle', vars: null, isError: false };

function arraysEqualPrefix(seq, prefix) {
  return seq.length >= prefix.length && prefix.every((v, i) => seq[i] === v);
}

function brewCompletedPotion() {
  return POTIONS.find(p => {
    const seq = potionSeq(p);
    return seq.length === brewSeq.length && seq.every((v, i) => v === brewSeq[i]);
  }) || null;
}

function brewFillBottles() {
  brewStarted = true;
  brewSeq = [];
  brewType = 'regular';
  brewModifier = null;
  brewLog = [{ key: 'brewgame.placed', vars: null }];
  renderBrewGame();
}

function brewReset() {
  brewStarted = false;
  brewSeq = [];
  brewType = 'regular';
  brewModifier = null;
  brewLog = [];
  renderBrewGame();
}

function brewAddIngredient(key) {
  if (!brewStarted) { setBrewMsg('brewgame.fillFirst', null, true); return; }

  const completed = brewCompletedPotion();

  if (completed) {
    const name = tPotionName(completed.id);
    if (key === 'gunpowder' && brewType === 'regular') {
      brewType = 'splash'; brewLog.push({ key: 'brewgame.addedGunpowder', vars: { name } });
      renderBrewGame(); return;
    }
    if (key === 'dragons_breath' && brewType === 'splash') {
      brewType = 'lingering'; brewLog.push({ key: 'brewgame.addedDragonsBreath', vars: { name } });
      renderBrewGame(); return;
    }
    if ((key === 'redstone' || key === 'glowstone') && !brewModifier) {
      const hasVariant = completed.variants.some(v => v.modifier === key);
      if (hasVariant) {
        brewModifier = key;
        const msgKey = key === 'redstone' ? 'brewgame.addedModifierExtended' : 'brewgame.addedModifierEnhanced';
        brewLog.push({ key: msgKey, vars: { ing: tIng(key) } });
        renderBrewGame(); return;
      }
    }
  }

  const newSeq = [...brewSeq, key];
  const candidates = POTIONS.filter(p => arraysEqualPrefix(potionSeq(p), newSeq));

  if (candidates.length > 0) {
    brewSeq = newSeq;
    brewType = 'regular';
    brewModifier = null;
    brewLog.push({ key: 'brewgame.addedIngredient', vars: { ing: tIng(key) } });
    renderBrewGame();
  } else {
    setBrewMsg('brewgame.fizzle', { ing: tIng(key) }, true);
  }
}

function setBrewMsg(key, vars, isError) {
  brewMsgState = { key, vars, isError: !!isError };
  const el = document.getElementById('brew-msg');
  el.textContent = t(key, vars);
  el.className = 'brew-msg' + (isError ? ' error' : '');
}

function renderBrewGame() {
  const standEl = document.getElementById('brew-stand');
  const fillBtn = document.getElementById('brew-fill-btn');
  const paletteEl = document.getElementById('brew-ing-palette');
  const logEl = document.getElementById('brew-log');

  fillBtn.disabled = brewStarted;

  if (!brewStarted) {
    standEl.innerHTML = [1, 2, 3].map(n => `
      <div class="brew-stand-slot"><div class="slot-box empty"></div><div class="slot-label">${t('brewgame.bottle', { n })}</div></div>`).join('');
    paletteEl.innerHTML = '';
    logEl.innerHTML = '';
    setBrewMsg('brewgame.idle', null, false);
    document.getElementById('brew-msg').className = 'brew-msg idle';
    return;
  }

  const completed = brewCompletedPotion();
  let resultImg = 'water_bottle';
  let resultLabel = t('brewing.waterBottle');

  if (completed) {
    const name = tPotionName(completed.id);
    resultImg = brewType === 'regular' ? completed.img : (brewType === 'splash' ? completed.splash : completed.lingering);
    const v = completed.variants.find(v => v.modifier === brewModifier) || completed.variants[0];
    resultLabel = brewType === 'regular' ? t('brewing.potion', { name })
      : brewType === 'splash' ? t('brewing.potionSplash', { name })
      : t('brewing.potionLingering', { name });
    setBrewMsg('brewgame.ready', { name, duration: v.duration, effect: tEffect(v.effect) }, false);
  } else if (brewSeq.length > 0) {
    resultLabel = t('brewgame.brewingResult');
    setBrewMsg('brewgame.brewing', { n: brewSeq.length }, false);
  } else {
    resultLabel = t('brewing.waterBottle');
    setBrewMsg('brewgame.needFirst', null, false);
  }

  const slotHtml = () => `
    <div class="brew-stand-slot">
      <div class="slot-box filled"><img src="${I[resultImg]}" alt="${resultLabel}"></div>
      <div class="slot-label">${resultLabel}</div>
    </div>`;
  standEl.innerHTML = slotHtml() + `<div class="brew-stand-arrow">→</div>` + slotHtml() + `<div class="brew-stand-arrow">→</div>` + slotHtml();

  // Ingredient palette: disable ingredients that can't currently do anything
  paletteEl.innerHTML = BREW_ING_KEYS.map(key => {
    let usable = false;
    if (completed) {
      if (key === 'gunpowder' && brewType === 'regular') usable = true;
      if (key === 'dragons_breath' && brewType === 'splash') usable = true;
      if ((key === 'redstone' || key === 'glowstone') && !brewModifier && completed.variants.some(v => v.modifier === key)) usable = true;
    }
    if (!usable) {
      const newSeq = [...brewSeq, key];
      usable = POTIONS.some(p => arraysEqualPrefix(potionSeq(p), newSeq));
    }
    const ingName = tIng(key);
    return `<button class="ing-btn" ${usable ? '' : 'disabled'} onclick="brewAddIngredient('${key}')">
      <img src="${I[key]}" alt="${ingName}"><span>${ingName}</span>
    </button>`;
  }).join('');

  logEl.innerHTML = brewLog.map(l => `<div>${t(l.key, l.vars)}</div>`).join('');
}

renderBrewGame();
