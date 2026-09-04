// ─── THEME + MODE CONTROLS ───
// Applying the saved theme/mode happens earlier, in a small inline script in
// <head>, so the page never flashes the wrong palette. This file only wires
// up the interactive pickers once the DOM is ready.

const THEMES = [
  { id: 'overworld', name: 'Overworld', swatch: '#4B8B3B' },
  { id: 'nether',    name: 'Nether',    swatch: '#D9552B' },
  { id: 'end',       name: 'End',       swatch: '#8B5FBF' },
  { id: 'ocean',     name: 'Deep Ocean', swatch: '#1592A0' },
];

function applyTheme(theme, mode) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-mode', mode);
  try {
    localStorage.setItem('mchub-theme', theme);
    localStorage.setItem('mchub-mode', mode);
  } catch (e) { /* storage unavailable, fine to ignore */ }
}

function initThemeControls() {
  const theme = document.documentElement.getAttribute('data-theme') || 'overworld';
  const mode = document.documentElement.getAttribute('data-mode') || 'dark';

  // Build theme swatch list
  const list = document.getElementById('theme-list');
  list.innerHTML = THEMES.map(t => `
    <button class="theme-option ${t.id === theme ? 'active' : ''}" data-theme-id="${t.id}" role="menuitemradio" aria-checked="${t.id === theme}">
      <span class="theme-dot" style="background:${t.swatch}"></span>
      <span data-i18n="theme.${t.id}">${t.name}</span>
    </button>`).join('');

  list.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.themeId;
      applyTheme(id, document.documentElement.getAttribute('data-mode'));
      list.querySelectorAll('.theme-option').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-checked', b === btn ? 'true' : 'false');
      });
      closePopover('theme-popover');
    });
  });

  updateModeToggle(mode);

  document.getElementById('mode-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-mode');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(document.documentElement.getAttribute('data-theme'), next);
    updateModeToggle(next);
  });

  document.getElementById('theme-trigger').addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover('theme-popover');
  });

  document.addEventListener('click', () => {
    closePopover('theme-popover');
  });
}

function updateModeToggle(mode) {
  const btn = document.getElementById('mode-toggle');
  btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  btn.dataset.mode = mode;
}

function togglePopover(id) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.popover').forEach(p => p.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

function closePopover(id) {
  document.getElementById(id).classList.remove('open');
}

document.addEventListener('DOMContentLoaded', initThemeControls);
