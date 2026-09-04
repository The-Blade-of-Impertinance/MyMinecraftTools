const I = IMGS;
let activePotionId = null;
let activeType = 'regular';
let activeVariant = 0;

// Build category filters
const cats = ['All', ...new Set(POTIONS.map(p => p.cat))];
const catFilters = document.getElementById('cat-filters');
cats.forEach(c => {
  const btn = document.createElement('button');
  btn.className = 'cat-btn' + (c === 'All' ? ' active' : '');
  btn.textContent = c;
  btn.onclick = () => filterCat(c, btn);
  catFilters.appendChild(btn);
});

function filterCat(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.potion-btn').forEach(pb => {
    if (cat === 'All' || pb.dataset.cat === cat) pb.classList.remove('hidden');
    else pb.classList.add('hidden');
  });
}

// Build potion grid
const grid = document.getElementById('potion-grid');
POTIONS.forEach(p => {
  const btn = document.createElement('button');
  btn.className = 'potion-btn';
  btn.dataset.id = p.id;
  btn.dataset.cat = p.cat;
  btn.innerHTML = `<img src="${I[p.img]}" alt="${p.name}"><div class="pb-name">${p.name}</div><div class="pb-cat">${p.cat}</div>`;
  btn.onclick = () => openDetail(p.id, btn);
  grid.appendChild(btn);
});

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

  // Type tabs
  const typeBar = document.getElementById('brew-type-bar');
  const types = [
    {id:'regular', label:'Regular', imgKey: p.img},
    {id:'splash', label:'Splash', imgKey: p.splash},
    {id:'lingering', label:'Lingering', imgKey: p.lingering},
  ];
  typeBar.innerHTML = types.map(t => `
    <button class="brew-type-tab ${activeType === t.id ? 'active' : ''}" onclick="setType('${t.id}')">
      <img src="${I[t.imgKey]}" alt="${t.label}"> ${t.label}
    </button>`).join('');

  // Variant buttons
  const variantsEl = document.getElementById('brew-variants');
  variantsEl.innerHTML = p.variants.map((v,i) => `
    <button class="brew-variant-btn ${activeVariant === i ? 'active' : ''}" onclick="setVariant(${i})">${v.label} — ${v.duration}</button>`).join('');

  // Recipe
  renderRecipe(p);
}

function renderRecipe(p) {
  const v = p.variants[activeVariant];

  // Determine result image key
  let resultImgKey = activeType === 'regular' ? p.img : (activeType === 'splash' ? p.splash : p.lingering);

  // Build steps - base steps + type step + modifier step
  let steps = [...p.base];

  // Add splash/lingering conversion if needed
  if (activeType === 'splash') {
    steps.push({action:'Brew', img:'gunpowder', name:'Gunpowder', yields:'Splash ' + p.name, yieldImg: p.splash});
  } else if (activeType === 'lingering') {
    steps.push({action:'Brew', img:'gunpowder', name:'Gunpowder', yields:'Splash ' + p.name, yieldImg: p.splash});
    steps.push({action:'Brew', img:'dragons_breath', name:"Dragon's Breath", yields:'Lingering ' + p.name, yieldImg: p.lingering});
  }

  // Add modifier if variant has one
  if (v.modifier) {
    steps.push({action:'Brew', img:MODIFIER_IMGS[v.modifier], name:MODIFIER_NAMES[v.modifier], yields:p.name + ' (' + v.label + ')', yieldImg:resultImgKey});
  }

  // Result display
  const recipeEl = document.getElementById('brew-recipe');
  recipeEl.innerHTML = `
    <div class="brew-recipe-left">
      <div class="brew-result-display">
        <img src="${I[resultImgKey]}" alt="${p.name}">
        <div class="brew-result-name">Potion of ${p.name}</div>
        <div class="brew-result-stats">${v.duration} · ${v.effect}</div>
        <div class="brew-result-stats muted">${activeType.charAt(0).toUpperCase()+activeType.slice(1)}</div>
      </div>
    </div>
    <div class="brew-recipe-right">
      <div class="brew-steps-label">${t('brewing.steps')}</div>
      <div class="brew-steps">
        ${steps.map((s,i) => `
          <div class="brew-step">
            <div class="brew-step-num">${i+1}</div>
            <img src="${I[s.img]}" alt="${s.name}">
            <div class="brew-step-info">
              <div class="brew-step-action">${s.action} with</div>
              <div class="brew-step-ingredient">${s.name}</div>
              <div class="brew-step-yields">→ ${s.yields}</div>
            </div>
            <div class="brew-step-arrow">→</div>
            <img src="${I[s.yieldImg]}" alt="${s.yields}">
          </div>`).join('')}
      </div>
    </div>`;

  // Ingredients summary - unique items needed
  const ingMap = {};
  steps.forEach(s => { ingMap[s.img] = s.name; });
  const ingEl = document.getElementById('brew-ingredients');
  ingEl.innerHTML = `
    <div class="brew-ing-label">${t('brewing.need')}</div>
    <div class="brew-ing-list">
      ${Object.entries(ingMap).map(([k,n]) => `
        <div class="brew-ing-item"><img src="${I[k]}" alt="${n}"><span>${n}</span></div>`).join('')}
    </div>`;

  // Note
  const noteEl = document.getElementById('brew-note');
  if (p.note) { noteEl.textContent = p.note; noteEl.style.display = 'block'; }
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


