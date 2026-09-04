// ═══════════════ BREW-YOUR-OWN-POTION GAME ═══════════════
// Build ingredient sequences straight from the POTIONS recipe data above,
// so the game always matches the recipes shown in the guide.
function potionSeq(p) { return p.base.slice(1).map(s => s.img); }

const ING_NAMES = {};
POTIONS.forEach(p => p.base.slice(1).forEach(s => { ING_NAMES[s.img] = s.name; }));
ING_NAMES['gunpowder'] = 'Gunpowder';
ING_NAMES['dragons_breath'] = "Dragon's Breath";
ING_NAMES['redstone'] = 'Redstone Dust';
ING_NAMES['glowstone'] = 'Glowstone Dust';

const BREW_ING_KEYS = [...new Set(POTIONS.flatMap(p => potionSeq(p)))].sort((a, b) => ING_NAMES[a].localeCompare(ING_NAMES[b]));
BREW_ING_KEYS.push('gunpowder', 'dragons_breath', 'redstone', 'glowstone');

let brewStarted = false;
let brewSeq = [];
let brewType = 'regular';   // regular | splash | lingering
let brewModifier = null;    // null | redstone | glowstone
let brewLog = [];

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
  brewLog = ['Placed 3 Water Bottles on the stand.'];
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
  if (!brewStarted) { setBrewMsg('Fill the bottles with water first!', true); return; }

  const completed = brewCompletedPotion();

  if (completed) {
    if (key === 'gunpowder' && brewType === 'regular') {
      brewType = 'splash'; brewLog.push(`Added Gunpowder → Splash ${completed.name}.`);
      renderBrewGame(); return;
    }
    if (key === 'dragons_breath' && brewType === 'splash') {
      brewType = 'lingering'; brewLog.push(`Added Dragon's Breath → Lingering ${completed.name}.`);
      renderBrewGame(); return;
    }
    if ((key === 'redstone' || key === 'glowstone') && !brewModifier) {
      const hasVariant = completed.variants.some(v => v.modifier === key);
      if (hasVariant) {
        brewModifier = key;
        brewLog.push(`Added ${ING_NAMES[key]} → ${key === 'redstone' ? 'Extended' : 'Enhanced'} variant.`);
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
    brewLog.push(`Added ${ING_NAMES[key]}.`);
    renderBrewGame();
  } else {
    setBrewMsg(`💥 The brew fizzles out — ${ING_NAMES[key]} doesn't belong here right now.`, true);
  }
}

function setBrewMsg(text, isError) {
  const el = document.getElementById('brew-msg');
  el.textContent = text;
  el.className = 'brew-msg' + (isError ? ' error' : '');
}

function renderBrewGame() {
  const standEl = document.getElementById('brew-stand');
  const fillBtn = document.getElementById('brew-fill-btn');
  const paletteEl = document.getElementById('brew-ing-palette');
  const logEl = document.getElementById('brew-log');

  fillBtn.disabled = brewStarted;

  if (!brewStarted) {
    standEl.innerHTML = `
      <div class="brew-stand-slot"><div class="slot-box empty"></div><div class="slot-label">Bottle 1</div></div>
      <div class="brew-stand-slot"><div class="slot-box empty"></div><div class="slot-label">Bottle 2</div></div>
      <div class="brew-stand-slot"><div class="slot-box empty"></div><div class="slot-label">Bottle 3</div></div>`;
    paletteEl.innerHTML = '';
    logEl.innerHTML = '';
    setBrewMsg('Fill the bottles with water to begin brewing.', false);
    document.getElementById('brew-msg').className = 'brew-msg idle';
    return;
  }

  const completed = brewCompletedPotion();
  let resultImg = 'water_bottle';
  let resultLabel = 'Water Bottle';

  if (completed) {
    resultImg = brewType === 'regular' ? completed.img : (brewType === 'splash' ? completed.splash : completed.lingering);
    const v = completed.variants.find(v => v.modifier === brewModifier) || completed.variants[0];
    resultLabel = `${brewType === 'regular' ? '' : (brewType === 'splash' ? 'Splash ' : 'Lingering ')}Potion of ${completed.name}`;
    setBrewMsg(`✓ Potion of ${completed.name} — ${v.duration} · ${v.effect}. Keep adding ingredients, or Reset to start a new brew.`, false);
  } else if (brewSeq.length > 0) {
    resultLabel = 'Brewing… (Awkward Potion)';
    setBrewMsg(`Brewing in progress — ${brewSeq.length} ingredient${brewSeq.length > 1 ? 's' : ''} added. Pick the next one.`, false);
  } else {
    resultLabel = 'Water Bottle';
    setBrewMsg('Bottles filled. Add Nether Wart first (or Fermented Spider Eye for Weakness).', false);
  }

  const slotHtml = (i) => `
    <div class="brew-stand-slot">
      <div class="slot-box filled"><img src="${I[resultImg]}" alt="${resultLabel}"></div>
      <div class="slot-label">${resultLabel}</div>
    </div>`;
  standEl.innerHTML = slotHtml(1) + `<div class="brew-stand-arrow">→</div>` + slotHtml(2) + `<div class="brew-stand-arrow">→</div>` + slotHtml(3);

  // Ingredient palette — disable ingredients that can't currently do anything
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
    return `<button class="ing-btn" ${usable ? '' : 'disabled'} onclick="brewAddIngredient('${key}')">
      <img src="${I[key]}" alt="${ING_NAMES[key]}"><span>${ING_NAMES[key]}</span>
    </button>`;
  }).join('');

  logEl.innerHTML = brewLog.map(l => `<div>${l}</div>`).join('');
}

renderBrewGame();
