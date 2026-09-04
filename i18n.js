// ─── LANGUAGE SYSTEM ───
// Adding a language later means adding one object to I18N below and one
// entry to LANGUAGES — nothing else in the app needs to change, because
// every translatable string in the page is marked with a data-i18n key
// instead of being hardcoded.
//
// Scope note: this covers the site's own interface copy (nav, hero, section
// intros, controls, footer). Third-party tool descriptions and the brewing
// data are left in English, since translating community tool listings and
// game-accurate recipe terminology well is a separate job from translating
// interface chrome, and it's easy to add later using the same data-i18n
// mechanism.

const LANGUAGES = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
  { id: 'fr', name: 'Français' },
  { id: 'de', name: 'Deutsch' },
];

const I18N = {
  en: {
    'theme.overworld': 'Overworld', 'theme.nether': 'Nether', 'theme.end': 'End', 'theme.ocean': 'Deep Ocean',
    'nav.home': 'Home', 'nav.clients': 'Clients', 'nav.brewing': 'Brewing',
    'controls.theme': 'Theme', 'controls.language': 'Language',
    'hero.eyebrow': 'A workbench for Minecraft players',
    'hero.title1': 'Every tool you need,', 'hero.title2': 'in one', 'hero.title3': 'toolbox.',
    'hero.sub': 'Seed maps, ore finders, PvP clients and a full brewing guide — the reference kit for getting more done between spawns.',
    'hero.cta1': 'Browse clients', 'hero.cta2': 'Open brewing guide',
    'stats.tools': 'Tools listed', 'stats.java': 'Java edition', 'stats.bedrock': 'Bedrock edition', 'stats.clients': 'Clients & tools',
    'section.tools.title': 'Minecraft tools', 'section.tools.sub': 'Seeds, ores, structures and reference — the tools worth having a tab open for.',
    'section.clients.title': 'Minecraft clients', 'section.clients.sub': 'Performance clients, PvP optimisers and community launchers for Java and Bedrock.',
    'section.brewing.title': 'Brewing guide', 'section.brewing.sub': 'Pick a potion to see the full recipe, then choose its type and duration.',
    'section.brewgame.title': 'Brew it yourself', 'section.brewgame.sub': 'Work the stand yourself — fill bottles, then add ingredients in order, just like in-game.',
    'brewing.fill': 'Fill water bottles', 'brewing.reset': 'Reset stand', 'brewing.ingredients': 'Ingredients — add in order',
    'brewing.need': 'You will need', 'brewing.steps': 'Step-by-step recipe',
    'footer.disclaimer': 'Not affiliated with Mojang or Microsoft.',
    'footer.tools': 'All linked tools are third-party services.',
    'footer.clients': 'Use third-party clients at your own risk — check your server\u2019s rules before installing one.',
  },
  es: {
    'theme.overworld': 'Overworld', 'theme.nether': 'Nether', 'theme.end': 'El Fin', 'theme.ocean': 'Océano profundo',
    'nav.home': 'Inicio', 'nav.clients': 'Clientes', 'nav.brewing': 'Pociones',
    'controls.theme': 'Tema', 'controls.language': 'Idioma',
    'hero.eyebrow': 'Un banco de trabajo para jugadores de Minecraft',
    'hero.title1': 'Todas las herramientas,', 'hero.title2': 'en una', 'hero.title3': 'sola caja.',
    'hero.sub': 'Mapas de semillas, buscadores de minerales, clientes PvP y una guía de pociones completa — todo lo que necesitas entre partidas.',
    'hero.cta1': 'Ver clientes', 'hero.cta2': 'Abrir guía de pociones',
    'stats.tools': 'Herramientas', 'stats.java': 'Edición Java', 'stats.bedrock': 'Edición Bedrock', 'stats.clients': 'Clientes y herramientas',
    'section.tools.title': 'Herramientas de Minecraft', 'section.tools.sub': 'Semillas, minerales, estructuras y referencia — vale la pena tenerlas siempre a mano.',
    'section.clients.title': 'Clientes de Minecraft', 'section.clients.sub': 'Clientes de rendimiento, optimizadores de PvP y launchers de la comunidad para Java y Bedrock.',
    'section.brewing.title': 'Guía de pociones', 'section.brewing.sub': 'Elige una poción para ver la receta completa, luego su tipo y duración.',
    'section.brewgame.title': 'Prepara tu propia poción', 'section.brewgame.sub': 'Usa el soporte tú mismo — llena las botellas y añade ingredientes en orden, como en el juego.',
    'brewing.fill': 'Llenar botellas de agua', 'brewing.reset': 'Reiniciar soporte', 'brewing.ingredients': 'Ingredientes — añade en orden',
    'brewing.need': 'Necesitarás', 'brewing.steps': 'Receta paso a paso',
    'footer.disclaimer': 'No afiliado con Mojang ni Microsoft.',
    'footer.tools': 'Todas las herramientas enlazadas son servicios de terceros.',
    'footer.clients': 'Usa clientes de terceros bajo tu propio riesgo — revisa las reglas de tu servidor antes de instalar uno.',
  },
  fr: {
    'theme.overworld': 'Overworld', 'theme.nether': 'Nether', 'theme.end': 'End', 'theme.ocean': 'Océan profond',
    'nav.home': 'Accueil', 'nav.clients': 'Clients', 'nav.brewing': 'Potions',
    'controls.theme': 'Thème', 'controls.language': 'Langue',
    'hero.eyebrow': 'Un établi pour les joueurs de Minecraft',
    'hero.title1': 'Tous les outils,', 'hero.title2': 'dans une', 'hero.title3': 'seule boîte.',
    'hero.sub': 'Cartes de seed, détecteurs de minerais, clients PvP et un guide de brassage complet — de quoi en faire plus entre deux sessions.',
    'hero.cta1': 'Voir les clients', 'hero.cta2': 'Ouvrir le guide de brassage',
    'stats.tools': 'Outils listés', 'stats.java': 'Édition Java', 'stats.bedrock': 'Édition Bedrock', 'stats.clients': 'Clients et outils',
    'section.tools.title': 'Outils Minecraft', 'section.tools.sub': 'Seeds, minerais, structures et références — les outils à garder sous la main.',
    'section.clients.title': 'Clients Minecraft', 'section.clients.sub': 'Clients de performance, optimiseurs PvP et launchers communautaires pour Java et Bedrock.',
    'section.brewing.title': 'Guide de brassage', 'section.brewing.sub': 'Choisissez une potion pour voir la recette complète, puis son type et sa durée.',
    'section.brewgame.title': 'Brassez vous-même', 'section.brewgame.sub': 'Utilisez le support vous-même — remplissez les bouteilles puis ajoutez les ingrédients dans l\u2019ordre, comme en jeu.',
    'brewing.fill': 'Remplir les bouteilles', 'brewing.reset': 'Réinitialiser', 'brewing.ingredients': 'Ingrédients — à ajouter dans l\u2019ordre',
    'brewing.need': 'Il vous faudra', 'brewing.steps': 'Recette étape par étape',
    'footer.disclaimer': 'Non affilié à Mojang ni à Microsoft.',
    'footer.tools': 'Tous les outils liés sont des services tiers.',
    'footer.clients': 'Utilisez les clients tiers à vos risques — vérifiez le règlement de votre serveur avant d\u2019en installer un.',
  },
  de: {
    'theme.overworld': 'Overworld', 'theme.nether': 'Nether', 'theme.end': 'End', 'theme.ocean': 'Tiefsee',
    'nav.home': 'Start', 'nav.clients': 'Clients', 'nav.brewing': 'Tränke',
    'controls.theme': 'Thema', 'controls.language': 'Sprache',
    'hero.eyebrow': 'Eine Werkbank für Minecraft-Spieler',
    'hero.title1': 'Jedes Werkzeug,', 'hero.title2': 'in einer', 'hero.title3': 'Kiste.',
    'hero.sub': 'Seed-Karten, Erzfinder, PvP-Clients und ein vollständiger Braukurs — alles, was zwischen zwei Runden weiterhilft.',
    'hero.cta1': 'Clients ansehen', 'hero.cta2': 'Braukurs öffnen',
    'stats.tools': 'Gelistete Tools', 'stats.java': 'Java-Edition', 'stats.bedrock': 'Bedrock-Edition', 'stats.clients': 'Clients & Tools',
    'section.tools.title': 'Minecraft-Tools', 'section.tools.sub': 'Seeds, Erze, Bauwerke und Nachschlagewerke — es lohnt sich, sie griffbereit zu haben.',
    'section.clients.title': 'Minecraft-Clients', 'section.clients.sub': 'Performance-Clients, PvP-Optimierer und Community-Launcher für Java und Bedrock.',
    'section.brewing.title': 'Braukurs', 'section.brewing.sub': 'Wähle einen Trank für das vollständige Rezept, dann Typ und Wirkdauer.',
    'section.brewgame.title': 'Selbst brauen', 'section.brewgame.sub': 'Bediene den Braustand selbst — Flaschen füllen, dann Zutaten der Reihe nach hinzufügen, wie im Spiel.',
    'brewing.fill': 'Wasserflaschen füllen', 'brewing.reset': 'Stand zurücksetzen', 'brewing.ingredients': 'Zutaten — der Reihe nach',
    'brewing.need': 'Du brauchst', 'brewing.steps': 'Rezept Schritt für Schritt',
    'footer.disclaimer': 'Nicht verbunden mit Mojang oder Microsoft.',
    'footer.tools': 'Alle verlinkten Tools sind Angebote Dritter.',
    'footer.clients': 'Drittanbieter-Clients auf eigenes Risiko nutzen — vorher die Serverregeln prüfen.',
  },
};

function t(key) {
  const lang = document.documentElement.getAttribute('data-lang') || 'en';
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
  document.documentElement.setAttribute('lang', document.documentElement.getAttribute('data-lang') || 'en');
}

function setLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  try { localStorage.setItem('mchub-lang', lang); } catch (e) { /* ignore */ }
  applyI18n();
}

function initLanguageControls() {
  const list = document.getElementById('lang-list');
  const current = document.documentElement.getAttribute('data-lang') || 'en';
  list.innerHTML = LANGUAGES.map(l => `
    <button class="theme-option ${l.id === current ? 'active' : ''}" data-lang-id="${l.id}" role="menuitemradio" aria-checked="${l.id === current}">
      <span>${l.name}</span>
    </button>`).join('');

  list.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.langId);
      list.querySelectorAll('.theme-option').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-checked', b === btn ? 'true' : 'false');
      });
      closePopover('lang-popover');
    });
  });

  document.getElementById('lang-trigger').addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover('lang-popover');
  });

  applyI18n();
}

document.addEventListener('DOMContentLoaded', initLanguageControls);
