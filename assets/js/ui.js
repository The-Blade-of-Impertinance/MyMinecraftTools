const I = IMGS;
let activePotionId = null;
let activeType = 'regular';
let activeVariant = 0;
let activeCat = 'All';

const cats = ['All', ...new Set(POTIONS.map(p => p.cat))];

function renderCatFilters() {
  const catFilters = document.getElementById('cat-filters');
  catFilters.innerHTML = '';
  cats.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (c === activeCat ? ' active' : '');
    btn.textContent = c === 'All' ? t('cat.all') : tCat(c);
    btn.onclick = () => filterCat(c, btn);
    catFilters.appendChild(btn);
  });
}

function filterCat(cat, btn) {
  activeCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.potion-btn').forEach(pb => {
    if (cat === 'All' || pb.dataset.cat === cat) pb.classList.remove('hidden');
    else pb.classList.add('hidden');
  });
}

function renderPotionGrid() {
  const grid = document.getElementById('potion-grid');
  grid.innerHTML = '';
  POTIONS.forEach(p => {
    const name = tPotionName(p.id);
    const btn = document.createElement('button');
    btn.className = 'potion-btn' + (p.id === activePotionId ? ' active' : '') + (activeCat !== 'All' && p.cat !== activeCat ? ' hidden' : '');
    btn.dataset.id = p.id;
    btn.dataset.cat = p.cat;
    btn.innerHTML = `<img src="${I[p.img]}" alt="${name}"><div class="pb-name">${name}</div><div class="pb-cat">${tCat(p.cat)}</div>`;
    btn.onclick = () => openDetail(p.id, btn);
    grid.appendChild(btn);
  });
}

function openDetail(id, btn) {
  if (activePotionId === id) { closeDetail(); return; }
  activePotionId = id;
  activeType = 'regular';
  activeVariant = 0;
  document.querySelectorAll('.potion-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDetail();
  const detail = document.getElementById('brew-detail');
  detail.classList.add('open');
  setTimeout(() => detail.scrollIntoView({behavior:'smooth', block:'nearest'}), 50);
}

function closeDetail() {
  activePotionId = null;
  document.getElementById('brew-detail').classList.remove('open');
  document.querySelectorAll('.potion-btn').forEach(b => b.classList.remove('active'));
}

function renderDetail() {
  const p = POTIONS.find(x => x.id === activePotionId);
  if (!p) return;
  const name = tPotionName(p.id);

  // Type tabs
  const typeBar = document.getElementById('brew-type-bar');
  const types = [
    {id:'regular', label:t('type.regular'), imgKey: p.img},
    {id:'splash', label:t('type.splash'), imgKey: p.splash},
    {id:'lingering', label:t('type.lingering'), imgKey: p.lingering},
  ];
  typeBar.innerHTML = types.map(tp => `
    <button class="brew-type-tab ${activeType === tp.id ? 'active' : ''}" onclick="setType('${tp.id}')">
      <img src="${I[tp.imgKey]}" alt="${tp.label}"> ${tp.label}
    </button>`).join('');

  // Variant buttons
  const variantsEl = document.getElementById('brew-variants');
  variantsEl.innerHTML = p.variants.map((v,i) => `
    <button class="brew-variant-btn ${activeVariant === i ? 'active' : ''}" onclick="setVariant(${i})">${tVariant(v.label)} (${v.duration})</button>`).join('');

  // Recipe
  renderRecipe(p, name);
}

function stepYieldLabel(s, p, name) {
  if (s.kind === 'splash') return t('brewing.potionSplash', {name});
  if (s.kind === 'lingering') return t('brewing.potionLingering', {name});
  if (s.kind === 'modifier') return `${name} (${tVariant(s.variantLabel)})`;
  if (s.yieldImg === 'water_bottle') return t('brewing.waterBottle');
  if (s.img === 'nether_wart') return t('brewing.awkwardPotion');
  return t('brewing.potion', {name});
}

function renderRecipe(p, name) {
  const v = p.variants[activeVariant];

  // Determine result image key
  let resultImgKey = activeType === 'regular' ? p.img : (activeType === 'splash' ? p.splash : p.lingering);

  // Build steps - base steps + type step + modifier step
  let steps = [...p.base];

  // Add splash/lingering conversion if needed
  if (activeType === 'splash') {
    steps.push({action:'Brew', img:'gunpowder', yieldImg: p.splash, kind:'splash'});
  } else if (activeType === 'lingering') {
    steps.push({action:'Brew', img:'gunpowder', yieldImg: p.splash, kind:'splash'});
    steps.push({action:'Brew', img:'dragons_breath', yieldImg: p.lingering, kind:'lingering'});
  }

  // Add modifier if variant has one
  if (v.modifier) {
    steps.push({action:'Brew', img:MODIFIER_IMGS[v.modifier], yieldImg:resultImgKey, kind:'modifier', variantLabel:v.label});
  }

  // Result display
  const recipeEl = document.getElementById('brew-recipe');
  recipeEl.innerHTML = `
    <div class="brew-recipe-left">
      <div class="brew-result-display">
        <img src="${I[resultImgKey]}" alt="${name}">
        <div class="brew-result-name">${t('brewing.potion', {name})}</div>
        <div class="brew-result-stats">${v.duration} · ${tEffect(v.effect)}</div>
        <div class="brew-result-stats muted">${t('type.' + activeType)}</div>
      </div>
    </div>
    <div class="brew-recipe-right">
      <div class="brew-steps-label">${t('brewing.steps')}</div>
      <div class="brew-steps">
        ${steps.map((s,i) => {
          const ingName = tIng(s.img);
          const yieldLabel = stepYieldLabel(s, p, name);
          return `
          <div class="brew-step">
            <div class="brew-step-num">${i+1}</div>
            <img src="${I[s.img]}" alt="${ingName}">
            <div class="brew-step-info">
              <div class="brew-step-action">${t('detail.actionWith', {action: t('action.' + s.action)})}</div>
              <div class="brew-step-ingredient">${ingName}</div>
              <div class="brew-step-yields">→ ${yieldLabel}</div>
            </div>
            <div class="brew-step-arrow">→</div>
            <img src="${I[s.yieldImg]}" alt="${yieldLabel}">
          </div>`;
        }).join('')}
      </div>
    </div>`;

  // Ingredients summary - unique items needed
  const ingMap = {};
  steps.forEach(s => { ingMap[s.img] = tIng(s.img); });
  const ingEl = document.getElementById('brew-ingredients');
  ingEl.innerHTML = `
    <div class="brew-ing-label">${t('brewing.need')}</div>
    <div class="brew-ing-list">
      ${Object.entries(ingMap).map(([k,n]) => `
        <div class="brew-ing-item"><img src="${I[k]}" alt="${n}"><span>${n}</span></div>`).join('')}
    </div>`;

  // Note
  const noteEl = document.getElementById('brew-note');
  const note = tNote(p.id);
  if (note) { noteEl.textContent = note; noteEl.style.display = 'block'; }
  else { noteEl.style.display = 'none'; }
}

function setType(type) {
  activeType = type;
  renderDetail();
}

function setVariant(i) {
  activeVariant = i;
  renderDetail();
}

renderCatFilters();
renderPotionGrid();
