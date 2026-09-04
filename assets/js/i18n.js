// ─── LANGUAGE SYSTEM ───
// Every translatable string routes through t() (UI chrome + templated
// messages) or one of the small id-keyed lookup tables below (content
// identified by an id/key rather than a fixed string: potion names,
// categories, ingredients, effects, variant labels). Adding a language
// means adding one entry to LANGUAGES plus one block to each table here.

const LANGUAGES = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
  { id: 'fr', name: 'Français' },
  { id: 'de', name: 'Deutsch' },
];

const I18N = {
  "en": {
    "theme.overworld": "Overworld",
    "theme.nether": "Nether",
    "theme.end": "End",
    "theme.ocean": "Deep Ocean",
    "nav.home": "Home",
    "nav.clients": "Clients",
    "nav.brewing": "Brewing",
    "controls.theme": "Theme",
    "controls.language": "Language",
    "controls.mode": "Toggle light/dark mode",
    "controls.modeToLight": "Switch to light mode",
    "controls.modeToDark": "Switch to dark mode",
    "hero.eyebrow": "A workbench for Minecraft players",
    "hero.title1": "Every tool you need,",
    "hero.title2": "in one",
    "hero.title3": "toolbox.",
    "hero.sub": "Seed maps, ore finders, PvP clients and a full brewing guide: the reference kit for getting more done between spawns.",
    "hero.cta1": "Browse clients",
    "hero.cta2": "Open brewing guide",
    "stats.tools": "Tools listed",
    "stats.java": "Java edition",
    "stats.bedrock": "Bedrock edition",
    "stats.clients": "Clients & tools",
    "section.tools.title": "Minecraft tools",
    "section.tools.sub": "Seeds, ores, structures and reference: the tools worth having a tab open for.",
    "section.clients.title": "Minecraft clients",
    "section.clients.sub": "Performance clients, PvP optimisers and community launchers for Java and Bedrock.",
    "section.brewing.title": "Brewing guide",
    "section.brewing.sub": "Pick a potion to see the full recipe, then choose its type and duration.",
    "section.brewgame.title": "Brew it yourself",
    "section.brewgame.sub": "Work the stand yourself: fill bottles, then add ingredients in order, just like in-game.",
    "brewgame.desc": "Get the sequence wrong and the brew fizzles out.",
    "brewing.fill": "Fill water bottles",
    "brewing.reset": "Reset stand",
    "brewing.ingredients": "Ingredients: add in order",
    "brewing.need": "You will need",
    "brewing.steps": "Step-by-step recipe",
    "footer.disclaimer": "Not affiliated with Mojang or Microsoft.",
    "footer.tools": "All linked tools are third-party services.",
    "footer.clients": "Use third-party clients at your own risk: check your server’s rules before installing one.",
    "cat.all": "All",
    "type.regular": "Regular",
    "type.splash": "Splash",
    "type.lingering": "Lingering",
    "action.Fill": "Fill",
    "action.Brew": "Brew",
    "detail.actionWith": "{action} with",
    "brewing.potion": "Potion of {name}",
    "brewing.potionSplash": "Splash Potion of {name}",
    "brewing.potionLingering": "Lingering Potion of {name}",
    "brewing.waterBottle": "Water Bottle",
    "brewing.awkwardPotion": "Awkward Potion",
    "brewgame.idle": "Fill the bottles with water to begin brewing.",
    "brewgame.fillFirst": "Fill the bottles with water first!",
    "brewgame.placed": "Placed 3 Water Bottles on the stand.",
    "brewgame.addedGunpowder": "Added Gunpowder. Now Splash {name}.",
    "brewgame.addedDragonsBreath": "Added Dragon’s Breath. Now Lingering {name}.",
    "brewgame.addedModifierExtended": "Added {ing}. Now the Extended variant.",
    "brewgame.addedModifierEnhanced": "Added {ing}. Now the Enhanced variant.",
    "brewgame.addedIngredient": "Added {ing}.",
    "brewgame.fizzle": "💥 The brew fizzles out: {ing} doesn’t belong here right now.",
    "brewgame.ready": "✓ {name} ready ({duration} · {effect}). Keep adding ingredients, or reset to start a new brew.",
    "brewgame.brewing": "Brewing in progress: {n} ingredient(s) added. Pick the next one.",
    "brewgame.brewingResult": "Brewing… (Awkward Potion)",
    "brewgame.needFirst": "Bottles filled. Add Nether Wart first (or Fermented Spider Eye for Weakness).",
    "brewgame.bottle": "Bottle {n}",
    "tool.chunkbase.tag": "Seed map",
    "tool.chunkbase.desc": "The go-to interactive seed map. Visualise your entire world: biomes, villages, strongholds and more before you even load in.",
    "tool.chunkbase.f1": "Biome & structure finder",
    "tool.chunkbase.f2": "Slime chunk calculator",
    "tool.chunkbase.f3": "All Java & Bedrock versions",
    "tool.chunkbase.f4": "Filter by dimension",
    "tool.chunkbase.btn1": "Open Chunkbase",
    "tool.orefinder.tag": "Ore finder",
    "tool.orefinder.desc": "Pinpoint exactly where ores generate in your seed. Find diamonds, ancient debris and every ore vein with precision.",
    "tool.orefinder.f1": "Seed-specific ore locations",
    "tool.orefinder.f2": "All ore types including ancient debris",
    "tool.orefinder.f3": "Y-level heatmaps",
    "tool.orefinder.f4": "Plan your strip-mining routes",
    "tool.orefinder.btn1": "Open OreFinder",
    "tool.wiki.tag": "Reference",
    "tool.wiki.desc": "The official, community-maintained encyclopedia. From mob mechanics to command syntax, the definitive reference.",
    "tool.wiki.f1": "Every item, block & mob",
    "tool.wiki.f2": "Command documentation",
    "tool.wiki.f3": "Changelogs & snapshots",
    "tool.wiki.f4": "Technical mechanics",
    "tool.wiki.btn1": "Open Wiki",
    "tool.ninjabrain.tag": "Speedrun",
    "tool.ninjabrain.desc": "Real-time stronghold triangulator. Reads your F3 screen live and calculates the stronghold location as you throw eyes of ender.",
    "tool.ninjabrain.f1": "Live screen-capture triangulation",
    "tool.ninjabrain.f2": "Confidence % per throw",
    "tool.ninjabrain.f3": "Works from just 2 eye throws",
    "tool.ninjabrain.f4": "Desktop app + browser version",
    "tool.ninjabrain.btn1": "Download app",
    "tool.ninjabrain.btn2": "Web version",
    "tool.curseforge.tag": "Mods & addons",
    "tool.curseforge.desc": "The largest mod hosting platform for Minecraft. Find, download and manage mods, modpacks, resource packs and worlds for both Java and Bedrock.",
    "tool.curseforge.f1": "Thousands of Java & Bedrock mods",
    "tool.curseforge.f2": "Modpack browser & installer",
    "tool.curseforge.f3": "Resource & data packs",
    "tool.curseforge.f4": "Companion app for easy management",
    "tool.curseforge.btn1": "Open CurseForge",
    "tool.minetrim.tag": "Armour trims",
    "tool.minetrim.desc": "An armour trim builder and visualiser for Minecraft. Preview exactly how your trim patterns and colour combinations will look before grinding for them in-game.",
    "tool.minetrim.f1": "All trim patterns & materials",
    "tool.minetrim.f2": "Live armour preview",
    "tool.minetrim.f3": "Share your trim combinations",
    "tool.minetrim.f4": "Java & Bedrock accurate",
    "tool.minetrim.btn1": "Open Minetrim",
    "tool.structuretool.tag": "Structure reader",
    "tool.structuretool.desc": "Upload a <code>.mcstructure</code> or Schematica file and get a full breakdown of every block inside it, perfect for working out exactly what to collect before you build.",
    "tool.structuretool.f1": "Supports .mcstructure & Schematica",
    "tool.structuretool.f2": "Full block & quantity breakdown",
    "tool.structuretool.f3": "Handy shopping list for builds",
    "tool.structuretool.f4": "Java & Bedrock formats",
    "tool.structuretool.btn1": "Open Structure Tool",
    "client.feather.tag": "Java client",
    "client.feather.desc": "A sleek, all-in-one Java Edition client with built-in mod support, FPS boosting and a polished HUD customiser. No more juggling Forge and Fabric separately.",
    "client.feather.f1": "Built-in mod marketplace",
    "client.feather.f2": "FPS optimisation & render tweaks",
    "client.feather.f3": "Custom HUD & cosmetics",
    "client.feather.f4": "Supports Forge & Fabric mods",
    "client.feather.f5": "Java Edition only",
    "client.feather.btn1": "Download Feather",
    "client.feather.btn2": "Website",
    "client.lunar.tag": "Java client",
    "client.lunar.desc": "One of the most popular Java clients in the community. Lightweight, fast, and packed with mods and cosmetics out of the box. Widely used on servers like Hypixel.",
    "client.lunar.f1": "Significant FPS improvements",
    "client.lunar.f2": "Built-in mods (Optifine, Keystrokes, etc.)",
    "client.lunar.f3": "Cosmetics & capes",
    "client.lunar.f4": "Server-side mod restrictions respected",
    "client.lunar.f5": "Java Edition only",
    "client.lunar.btn1": "Download Lunar",
    "client.oderso.tag": "Bedrock client",
    "client.oderso.desc": "A Bedrock Edition PvP client built for competitive play. Optimised for crystal PvP, sword fighting and server performance on Bedrock platforms.",
    "client.oderso.f1": "Crystal PvP optimisations",
    "client.oderso.f2": "Reach & hitbox adjustments",
    "client.oderso.f3": "FPS & network performance",
    "client.oderso.f4": "Custom animations",
    "client.oderso.f5": "Bedrock Edition only",
    "client.oderso.btn1": "Join Discord",
    "client.flarial.tag": "Bedrock client",
    "client.flarial.desc": "A feature-rich Bedrock Edition client focused on performance and PvP. Known for its clean UI, module system and active development community.",
    "client.flarial.f1": "Modular feature system",
    "client.flarial.f2": "PvP & movement optimisations",
    "client.flarial.f3": "Custom HUD & click GUI",
    "client.flarial.f4": "Active development & updates",
    "client.flarial.f5": "Bedrock Edition only",
    "client.flarial.btn1": "Download Flarial",
    "client.blueberry.tag": "Bedrock client",
    "client.blueberry.desc": "A modular Bedrock Edition client built for speed: FPS boosting, replay recording, pack switching, cosmetics and proximity chat all in one launcher.",
    "client.blueberry.f1": "FPS boost & replay recording",
    "client.blueberry.f2": "Pack switcher & cosmetics",
    "client.blueberry.f3": "Proximity chat",
    "client.blueberry.f4": "Bedrock Edition only",
    "client.blueberry.btn1": "Website",
    "client.blueberry.beta": "Beta: Blueberry Client is still in beta testing. Expect bugs and frequent changes, use with care."
  },
  "es": {
    "theme.overworld": "Overworld",
    "theme.nether": "Nether",
    "theme.end": "El Fin",
    "theme.ocean": "Océano profundo",
    "nav.home": "Inicio",
    "nav.clients": "Clientes",
    "nav.brewing": "Pociones",
    "controls.theme": "Tema",
    "controls.language": "Idioma",
    "controls.mode": "Alternar modo claro/oscuro",
    "controls.modeToLight": "Cambiar a modo claro",
    "controls.modeToDark": "Cambiar a modo oscuro",
    "hero.eyebrow": "Un banco de trabajo para jugadores de Minecraft",
    "hero.title1": "Todas las herramientas,",
    "hero.title2": "en una",
    "hero.title3": "sola caja.",
    "hero.sub": "Mapas de semillas, buscadores de minerales, clientes PvP y una guía de pociones completa: todo lo que necesitas entre partidas.",
    "hero.cta1": "Ver clientes",
    "hero.cta2": "Abrir guía de pociones",
    "stats.tools": "Herramientas",
    "stats.java": "Edición Java",
    "stats.bedrock": "Edición Bedrock",
    "stats.clients": "Clientes y herramientas",
    "section.tools.title": "Herramientas de Minecraft",
    "section.tools.sub": "Semillas, minerales, estructuras y referencia: vale la pena tenerlas siempre a mano.",
    "section.clients.title": "Clientes de Minecraft",
    "section.clients.sub": "Clientes de rendimiento, optimizadores de PvP y launchers de la comunidad para Java y Bedrock.",
    "section.brewing.title": "Guía de pociones",
    "section.brewing.sub": "Elige una poción para ver la receta completa, luego su tipo y duración.",
    "section.brewgame.title": "Prepara tu propia poción",
    "section.brewgame.sub": "Usa el soporte tú mismo: llena las botellas y añade ingredientes en orden, como en el juego.",
    "brewgame.desc": "Si te equivocas de orden, la poción se echa a perder.",
    "brewing.fill": "Llenar botellas de agua",
    "brewing.reset": "Reiniciar soporte",
    "brewing.ingredients": "Ingredientes: añade en orden",
    "brewing.need": "Necesitarás",
    "brewing.steps": "Receta paso a paso",
    "footer.disclaimer": "No afiliado con Mojang ni Microsoft.",
    "footer.tools": "Todas las herramientas enlazadas son servicios de terceros.",
    "footer.clients": "Usa clientes de terceros bajo tu propio riesgo: revisa las reglas de tu servidor antes de instalar uno.",
    "cat.all": "Todas",
    "type.regular": "Normal",
    "type.splash": "Arrojadiza",
    "type.lingering": "Persistente",
    "action.Fill": "Llenar",
    "action.Brew": "Preparar",
    "detail.actionWith": "{action} con",
    "brewing.potion": "Poción de {name}",
    "brewing.potionSplash": "Poción Arrojadiza de {name}",
    "brewing.potionLingering": "Poción Persistente de {name}",
    "brewing.waterBottle": "Botella de Agua",
    "brewing.awkwardPotion": "Poción Rara",
    "brewgame.idle": "Llena las botellas con agua para empezar a preparar.",
    "brewgame.fillFirst": "¡Llena las botellas con agua primero!",
    "brewgame.placed": "Se colocaron 3 Botellas de Agua en el soporte.",
    "brewgame.addedGunpowder": "Pólvora añadida. Ahora es {name} Arrojadiza.",
    "brewgame.addedDragonsBreath": "Aliento de Dragón añadido. Ahora es {name} Persistente.",
    "brewgame.addedModifierExtended": "{ing} añadido. Ahora es la variante Extendida.",
    "brewgame.addedModifierEnhanced": "{ing} añadido. Ahora es la variante Mejorada.",
    "brewgame.addedIngredient": "{ing} añadido.",
    "brewgame.fizzle": "💥 La poción se echa a perder: {ing} no encaja aquí ahora mismo.",
    "brewgame.ready": "✓ {name} lista ({duration} · {effect}). Sigue añadiendo ingredientes o reinicia para preparar otra.",
    "brewgame.brewing": "Preparación en curso: {n} ingrediente(s) añadido(s). Elige el siguiente.",
    "brewgame.brewingResult": "Preparando… (Poción Rara)",
    "brewgame.needFirst": "Botellas llenas. Añade Verruga del Nether primero (u Ojo de Araña Fermentado para Debilidad).",
    "brewgame.bottle": "Botella {n}",
    "tool.chunkbase.tag": "Mapa de semillas",
    "tool.chunkbase.desc": "El mapa de semillas interactivo de referencia. Visualiza todo tu mundo: biomas, aldeas, fortalezas y mucho más antes de cargar la partida.",
    "tool.chunkbase.f1": "Buscador de biomas y estructuras",
    "tool.chunkbase.f2": "Calculadora de chunks de slime",
    "tool.chunkbase.f3": "Todas las versiones Java y Bedrock",
    "tool.chunkbase.f4": "Filtro por dimensión",
    "tool.chunkbase.btn1": "Abrir Chunkbase",
    "tool.orefinder.tag": "Buscador de minerales",
    "tool.orefinder.desc": "Localiza con precisión dónde generan los minerales en tu semilla. Encuentra diamantes, restos ancestrales y cada veta con exactitud.",
    "tool.orefinder.f1": "Ubicaciones de mineral según la semilla",
    "tool.orefinder.f2": "Todos los tipos de mineral, incluidos los restos ancestrales",
    "tool.orefinder.f3": "Mapas de calor por nivel Y",
    "tool.orefinder.f4": "Planifica tus rutas de minería",
    "tool.orefinder.btn1": "Abrir OreFinder",
    "tool.wiki.tag": "Referencia",
    "tool.wiki.desc": "La enciclopedia oficial, mantenida por la comunidad. Desde la mecánica de los mobs hasta la sintaxis de comandos: la referencia definitiva.",
    "tool.wiki.f1": "Todos los objetos, bloques y mobs",
    "tool.wiki.f2": "Documentación de comandos",
    "tool.wiki.f3": "Registros de cambios y snapshots",
    "tool.wiki.f4": "Mecánicas técnicas",
    "tool.wiki.btn1": "Abrir la Wiki",
    "tool.ninjabrain.tag": "Speedrun",
    "tool.ninjabrain.desc": "Triangulador de fortalezas en tiempo real. Lee tu pantalla F3 al instante y calcula la ubicación de la fortaleza mientras lanzas ojos de ender.",
    "tool.ninjabrain.f1": "Triangulación en vivo por captura de pantalla",
    "tool.ninjabrain.f2": "Porcentaje de confianza por lanzamiento",
    "tool.ninjabrain.f3": "Funciona con solo 2 lanzamientos",
    "tool.ninjabrain.f4": "App de escritorio y versión web",
    "tool.ninjabrain.btn1": "Descargar app",
    "tool.ninjabrain.btn2": "Versión web",
    "tool.curseforge.tag": "Mods y complementos",
    "tool.curseforge.desc": "La mayor plataforma de alojamiento de mods para Minecraft. Encuentra, descarga y gestiona mods, modpacks, packs de recursos y mundos para Java y Bedrock.",
    "tool.curseforge.f1": "Miles de mods para Java y Bedrock",
    "tool.curseforge.f2": "Explorador e instalador de modpacks",
    "tool.curseforge.f3": "Packs de recursos y de datos",
    "tool.curseforge.f4": "App complementaria para una gestión sencilla",
    "tool.curseforge.btn1": "Abrir CurseForge",
    "tool.minetrim.tag": "Ornamentos de armadura",
    "tool.minetrim.desc": "Un creador y visualizador de ornamentos de armadura para Minecraft. Previsualiza exactamente cómo quedarán tus patrones y combinaciones de color antes de conseguirlos en el juego.",
    "tool.minetrim.f1": "Todos los patrones y materiales",
    "tool.minetrim.f2": "Vista previa de armadura en vivo",
    "tool.minetrim.f3": "Comparte tus combinaciones",
    "tool.minetrim.f4": "Fiel a Java y Bedrock",
    "tool.minetrim.btn1": "Abrir Minetrim",
    "tool.structuretool.tag": "Lector de estructuras",
    "tool.structuretool.desc": "Sube un archivo <code>.mcstructure</code> o de Schematica y obtén un desglose completo de cada bloque que contiene, perfecto para saber exactamente qué recolectar antes de construir.",
    "tool.structuretool.f1": "Compatible con .mcstructure y Schematica",
    "tool.structuretool.f2": "Desglose completo de bloques y cantidades",
    "tool.structuretool.f3": "Práctica lista de materiales para tus construcciones",
    "tool.structuretool.f4": "Formatos Java y Bedrock",
    "tool.structuretool.btn1": "Abrir la herramienta",
    "client.feather.tag": "Cliente Java",
    "client.feather.desc": "Un cliente Java todo en uno y elegante, con soporte de mods integrado, mejora de FPS y un pulido personalizador de HUD. Se acabó lidiar con Forge y Fabric por separado.",
    "client.feather.f1": "Tienda de mods integrada",
    "client.feather.f2": "Optimización de FPS y ajustes de renderizado",
    "client.feather.f3": "HUD y cosméticos personalizados",
    "client.feather.f4": "Compatible con mods de Forge y Fabric",
    "client.feather.f5": "Solo para Java Edition",
    "client.feather.btn1": "Descargar Feather",
    "client.feather.btn2": "Sitio web",
    "client.lunar.tag": "Cliente Java",
    "client.lunar.desc": "Uno de los clientes Java más populares de la comunidad. Ligero, rápido y repleto de mods y cosméticos de serie. Muy usado en servidores como Hypixel.",
    "client.lunar.f1": "Mejoras notables de FPS",
    "client.lunar.f2": "Mods integrados (Optifine, Keystrokes, etc.)",
    "client.lunar.f3": "Cosméticos y capas",
    "client.lunar.f4": "Respeta las restricciones de mods del servidor",
    "client.lunar.f5": "Solo para Java Edition",
    "client.lunar.btn1": "Descargar Lunar",
    "client.oderso.tag": "Cliente Bedrock",
    "client.oderso.desc": "Un cliente PvP para Bedrock Edition creado para el juego competitivo. Optimizado para PvP con cristales, combate con espada y rendimiento en plataformas Bedrock.",
    "client.oderso.f1": "Optimizaciones para PvP con cristales",
    "client.oderso.f2": "Ajustes de alcance y hitbox",
    "client.oderso.f3": "Rendimiento de FPS y red",
    "client.oderso.f4": "Animaciones personalizadas",
    "client.oderso.f5": "Solo para Bedrock Edition",
    "client.oderso.btn1": "Unirse a Discord",
    "client.flarial.tag": "Cliente Bedrock",
    "client.flarial.desc": "Un cliente Bedrock Edition repleto de funciones, centrado en el rendimiento y el PvP. Conocido por su interfaz limpia, su sistema de módulos y su activa comunidad de desarrollo.",
    "client.flarial.f1": "Sistema de funciones modular",
    "client.flarial.f2": "Optimizaciones de PvP y movimiento",
    "client.flarial.f3": "HUD e interfaz de clics personalizados",
    "client.flarial.f4": "Desarrollo y actualizaciones activos",
    "client.flarial.f5": "Solo para Bedrock Edition",
    "client.flarial.btn1": "Descargar Flarial",
    "client.blueberry.tag": "Cliente Bedrock",
    "client.blueberry.desc": "Un cliente modular para Bedrock Edition creado para la velocidad: mejora de FPS, grabación de repeticiones, cambio de packs, cosméticos y chat de proximidad, todo en un solo launcher.",
    "client.blueberry.f1": "Mejora de FPS y grabación de repeticiones",
    "client.blueberry.f2": "Selector de packs y cosméticos",
    "client.blueberry.f3": "Chat de proximidad",
    "client.blueberry.f4": "Solo para Bedrock Edition",
    "client.blueberry.btn1": "Sitio web",
    "client.blueberry.beta": "Beta: Blueberry Client todavía está en fase beta. Espera errores y cambios frecuentes, úsalo con precaución."
  },
  "fr": {
    "theme.overworld": "Overworld",
    "theme.nether": "Nether",
    "theme.end": "End",
    "theme.ocean": "Océan profond",
    "nav.home": "Accueil",
    "nav.clients": "Clients",
    "nav.brewing": "Potions",
    "controls.theme": "Thème",
    "controls.language": "Langue",
    "controls.mode": "Basculer entre mode clair et sombre",
    "controls.modeToLight": "Passer au mode clair",
    "controls.modeToDark": "Passer au mode sombre",
    "hero.eyebrow": "Un établi pour les joueurs de Minecraft",
    "hero.title1": "Tous les outils,",
    "hero.title2": "dans une",
    "hero.title3": "seule boîte.",
    "hero.sub": "Cartes de seed, détecteurs de minerais, clients PvP et un guide de brassage complet : de quoi en faire plus entre deux sessions.",
    "hero.cta1": "Voir les clients",
    "hero.cta2": "Ouvrir le guide de brassage",
    "stats.tools": "Outils listés",
    "stats.java": "Édition Java",
    "stats.bedrock": "Édition Bedrock",
    "stats.clients": "Clients et outils",
    "section.tools.title": "Outils Minecraft",
    "section.tools.sub": "Seeds, minerais, structures et références : les outils à garder sous la main.",
    "section.clients.title": "Clients Minecraft",
    "section.clients.sub": "Clients de performance, optimiseurs PvP et launchers communautaires pour Java et Bedrock.",
    "section.brewing.title": "Guide de brassage",
    "section.brewing.sub": "Choisissez une potion pour voir la recette complète, puis son type et sa durée.",
    "section.brewgame.title": "Brassez vous-même",
    "section.brewgame.sub": "Utilisez le support vous-même : remplissez les bouteilles puis ajoutez les ingrédients dans l’ordre, comme en jeu.",
    "brewgame.desc": "Le mauvais ordre, et la potion rate.",
    "brewing.fill": "Remplir les bouteilles",
    "brewing.reset": "Réinitialiser",
    "brewing.ingredients": "Ingrédients : à ajouter dans l’ordre",
    "brewing.need": "Il vous faudra",
    "brewing.steps": "Recette étape par étape",
    "footer.disclaimer": "Non affilié à Mojang ni à Microsoft.",
    "footer.tools": "Tous les outils liés sont des services tiers.",
    "footer.clients": "Utilisez les clients tiers à vos risques : vérifiez le règlement de votre serveur avant d’en installer un.",
    "cat.all": "Tous",
    "type.regular": "Normale",
    "type.splash": "Projetée",
    "type.lingering": "Persistante",
    "action.Fill": "Remplir",
    "action.Brew": "Ajouter",
    "detail.actionWith": "{action} avec",
    "brewing.potion": "Potion de {name}",
    "brewing.potionSplash": "Potion Projetée de {name}",
    "brewing.potionLingering": "Potion Persistante de {name}",
    "brewing.waterBottle": "Bouteille d'Eau",
    "brewing.awkwardPotion": "Potion Étrange",
    "brewgame.idle": "Remplissez les bouteilles d’eau pour commencer.",
    "brewgame.fillFirst": "Remplissez d’abord les bouteilles d’eau !",
    "brewgame.placed": "3 Bouteilles d’Eau placées sur le support.",
    "brewgame.addedGunpowder": "Poudre à Canon ajoutée. Potion {name} Projetée à présent.",
    "brewgame.addedDragonsBreath": "Souffle de Dragon ajouté. Potion {name} Persistante à présent.",
    "brewgame.addedModifierExtended": "{ing} ajouté. Variante Prolongée à présent.",
    "brewgame.addedModifierEnhanced": "{ing} ajouté. Variante Améliorée à présent.",
    "brewgame.addedIngredient": "{ing} ajouté.",
    "brewgame.fizzle": "💥 La potion rate : {ing} n’a rien à faire ici pour l’instant.",
    "brewgame.ready": "✓ {name} prête ({duration} · {effect}). Continuez à ajouter des ingrédients, ou réinitialisez pour une nouvelle potion.",
    "brewgame.brewing": "Préparation en cours : {n} ingrédient(s) ajouté(s). Choisissez le suivant.",
    "brewgame.brewingResult": "Préparation… (Potion Étrange)",
    "brewgame.needFirst": "Bouteilles remplies. Ajoutez d’abord de la Verrue du Nether (ou un Œil d’Araignée Fermenté pour la Faiblesse).",
    "brewgame.bottle": "Bouteille {n}",
    "tool.chunkbase.tag": "Carte de seed",
    "tool.chunkbase.desc": "La carte de seed interactive incontournable. Visualisez tout votre monde : biomes, villages, forteresses et bien plus, avant même de charger la partie.",
    "tool.chunkbase.f1": "Recherche de biomes et structures",
    "tool.chunkbase.f2": "Calculateur de chunks à slime",
    "tool.chunkbase.f3": "Toutes les versions Java et Bedrock",
    "tool.chunkbase.f4": "Filtre par dimension",
    "tool.chunkbase.btn1": "Ouvrir Chunkbase",
    "tool.orefinder.tag": "Détecteur de minerais",
    "tool.orefinder.desc": "Repérez précisément où les minerais apparaissent dans votre seed. Trouvez diamants, débris antiques et chaque filon avec exactitude.",
    "tool.orefinder.f1": "Emplacements de minerais propres à la seed",
    "tool.orefinder.f2": "Tous les types de minerai, débris antiques compris",
    "tool.orefinder.f3": "Cartes de chaleur par niveau Y",
    "tool.orefinder.f4": "Planifiez vos itinéraires de minage",
    "tool.orefinder.btn1": "Ouvrir OreFinder",
    "tool.wiki.tag": "Référence",
    "tool.wiki.desc": "L’encyclopédie officielle, entretenue par la communauté. De la mécanique des mobs à la syntaxe des commandes, la référence ultime.",
    "tool.wiki.f1": "Tous les objets, blocs et mobs",
    "tool.wiki.f2": "Documentation des commandes",
    "tool.wiki.f3": "Journaux des modifications et snapshots",
    "tool.wiki.f4": "Mécaniques techniques",
    "tool.wiki.btn1": "Ouvrir le Wiki",
    "tool.ninjabrain.tag": "Speedrun",
    "tool.ninjabrain.desc": "Triangulateur de forteresse en temps réel. Lit votre écran F3 en direct et calcule l’emplacement de la forteresse pendant que vous lancez des yeux de l’Ender.",
    "tool.ninjabrain.f1": "Triangulation en direct par capture d’écran",
    "tool.ninjabrain.f2": "Pourcentage de confiance par lancer",
    "tool.ninjabrain.f3": "Fonctionne dès 2 lancers",
    "tool.ninjabrain.f4": "Application de bureau et version navigateur",
    "tool.ninjabrain.btn1": "Télécharger l’appli",
    "tool.ninjabrain.btn2": "Version web",
    "tool.curseforge.tag": "Mods et extensions",
    "tool.curseforge.desc": "La plus grande plateforme d’hébergement de mods pour Minecraft. Trouvez, téléchargez et gérez mods, modpacks, packs de ressources et mondes pour Java et Bedrock.",
    "tool.curseforge.f1": "Des milliers de mods Java et Bedrock",
    "tool.curseforge.f2": "Navigateur et installateur de modpacks",
    "tool.curseforge.f3": "Packs de ressources et de données",
    "tool.curseforge.f4": "Application compagnon pour une gestion facile",
    "tool.curseforge.btn1": "Ouvrir CurseForge",
    "tool.minetrim.tag": "Ornements d’armure",
    "tool.minetrim.desc": "Un créateur et visualiseur d’ornements d’armure pour Minecraft. Prévisualisez exactement le rendu de vos motifs et combinaisons de couleurs avant de les obtenir en jeu.",
    "tool.minetrim.f1": "Tous les motifs et matériaux",
    "tool.minetrim.f2": "Aperçu de l’armure en direct",
    "tool.minetrim.f3": "Partagez vos combinaisons",
    "tool.minetrim.f4": "Fidèle à Java et Bedrock",
    "tool.minetrim.btn1": "Ouvrir Minetrim",
    "tool.structuretool.tag": "Lecteur de structures",
    "tool.structuretool.desc": "Importez un fichier <code>.mcstructure</code> ou Schematica et obtenez le détail complet de chaque bloc qu’il contient, idéal pour savoir précisément quoi récolter avant de construire.",
    "tool.structuretool.f1": "Compatible .mcstructure et Schematica",
    "tool.structuretool.f2": "Détail complet des blocs et quantités",
    "tool.structuretool.f3": "Liste de matériaux pratique pour vos constructions",
    "tool.structuretool.f4": "Formats Java et Bedrock",
    "tool.structuretool.btn1": "Ouvrir l’outil",
    "client.feather.tag": "Client Java",
    "client.feather.desc": "Un client Java élégant et tout-en-un avec prise en charge des mods intégrée, un boost de FPS et un personnalisateur de HUD soigné. Fini de jongler entre Forge et Fabric séparément.",
    "client.feather.f1": "Boutique de mods intégrée",
    "client.feather.f2": "Optimisation FPS et réglages de rendu",
    "client.feather.f3": "HUD et cosmétiques personnalisés",
    "client.feather.f4": "Compatible avec les mods Forge et Fabric",
    "client.feather.f5": "Java Edition uniquement",
    "client.feather.btn1": "Télécharger Feather",
    "client.feather.btn2": "Site web",
    "client.lunar.tag": "Client Java",
    "client.lunar.desc": "L’un des clients Java les plus populaires de la communauté. Léger, rapide et rempli de mods et cosmétiques dès l’installation. Très utilisé sur des serveurs comme Hypixel.",
    "client.lunar.f1": "Amélioration notable des FPS",
    "client.lunar.f2": "Mods intégrés (Optifine, Keystrokes, etc.)",
    "client.lunar.f3": "Cosmétiques et capes",
    "client.lunar.f4": "Respecte les restrictions de mods du serveur",
    "client.lunar.f5": "Java Edition uniquement",
    "client.lunar.btn1": "Télécharger Lunar",
    "client.oderso.tag": "Client Bedrock",
    "client.oderso.desc": "Un client PvP pour Bedrock Edition conçu pour le jeu compétitif. Optimisé pour le PvP au cristal, le combat à l’épée et les performances sur les plateformes Bedrock.",
    "client.oderso.f1": "Optimisations du PvP au cristal",
    "client.oderso.f2": "Ajustements de portée et de hitbox",
    "client.oderso.f3": "Performances FPS et réseau",
    "client.oderso.f4": "Animations personnalisées",
    "client.oderso.f5": "Bedrock Edition uniquement",
    "client.oderso.btn1": "Rejoindre le Discord",
    "client.flarial.tag": "Client Bedrock",
    "client.flarial.desc": "Un client Bedrock Edition riche en fonctionnalités, axé sur la performance et le PvP. Reconnu pour son interface claire, son système de modules et sa communauté de développement active.",
    "client.flarial.f1": "Système de fonctionnalités modulaire",
    "client.flarial.f2": "Optimisations du PvP et des déplacements",
    "client.flarial.f3": "HUD et interface de clic personnalisés",
    "client.flarial.f4": "Développement et mises à jour actifs",
    "client.flarial.f5": "Bedrock Edition uniquement",
    "client.flarial.btn1": "Télécharger Flarial",
    "client.blueberry.tag": "Client Bedrock",
    "client.blueberry.desc": "Un client modulaire pour Bedrock Edition conçu pour la vitesse : boost de FPS, enregistrement de replays, changement de packs, cosmétiques et chat de proximité, le tout dans un seul launcher.",
    "client.blueberry.f1": "Boost FPS et enregistrement de replays",
    "client.blueberry.f2": "Sélecteur de packs et cosmétiques",
    "client.blueberry.f3": "Chat de proximité",
    "client.blueberry.f4": "Bedrock Edition uniquement",
    "client.blueberry.btn1": "Site web",
    "client.blueberry.beta": "Bêta : Blueberry Client est encore en phase bêta. Attendez-vous à des bugs et des changements fréquents, à utiliser avec précaution."
  },
  "de": {
    "theme.overworld": "Overworld",
    "theme.nether": "Nether",
    "theme.end": "End",
    "theme.ocean": "Tiefsee",
    "nav.home": "Start",
    "nav.clients": "Clients",
    "nav.brewing": "Tränke",
    "controls.theme": "Thema",
    "controls.language": "Sprache",
    "controls.mode": "Hellen/dunklen Modus umschalten",
    "controls.modeToLight": "Zum hellen Modus wechseln",
    "controls.modeToDark": "Zum dunklen Modus wechseln",
    "hero.eyebrow": "Eine Werkbank für Minecraft-Spieler",
    "hero.title1": "Jedes Werkzeug,",
    "hero.title2": "in einer",
    "hero.title3": "Kiste.",
    "hero.sub": "Seed-Karten, Erzfinder, PvP-Clients und ein vollständiger Braukurs: alles, was zwischen zwei Runden weiterhilft.",
    "hero.cta1": "Clients ansehen",
    "hero.cta2": "Braukurs öffnen",
    "stats.tools": "Gelistete Tools",
    "stats.java": "Java-Edition",
    "stats.bedrock": "Bedrock-Edition",
    "stats.clients": "Clients & Tools",
    "section.tools.title": "Minecraft-Tools",
    "section.tools.sub": "Seeds, Erze, Bauwerke und Nachschlagewerke: es lohnt sich, sie griffbereit zu haben.",
    "section.clients.title": "Minecraft-Clients",
    "section.clients.sub": "Performance-Clients, PvP-Optimierer und Community-Launcher für Java und Bedrock.",
    "section.brewing.title": "Braukurs",
    "section.brewing.sub": "Wähle einen Trank für das vollständige Rezept, dann Typ und Wirkdauer.",
    "section.brewgame.title": "Selbst brauen",
    "section.brewgame.sub": "Bediene den Braustand selbst: Flaschen füllen, dann Zutaten der Reihe nach hinzufügen, wie im Spiel.",
    "brewgame.desc": "Falsche Reihenfolge, und der Trank misslingt.",
    "brewing.fill": "Wasserflaschen füllen",
    "brewing.reset": "Stand zurücksetzen",
    "brewing.ingredients": "Zutaten: der Reihe nach",
    "brewing.need": "Du brauchst",
    "brewing.steps": "Rezept Schritt für Schritt",
    "footer.disclaimer": "Nicht verbunden mit Mojang oder Microsoft.",
    "footer.tools": "Alle verlinkten Tools sind Angebote Dritter.",
    "footer.clients": "Drittanbieter-Clients auf eigenes Risiko nutzen: vorher die Serverregeln prüfen.",
    "cat.all": "Alle",
    "type.regular": "Normal",
    "type.splash": "Wurf",
    "type.lingering": "Verweilend",
    "action.Fill": "Füllen",
    "action.Brew": "Brauen",
    "detail.actionWith": "{action} mit",
    "brewing.potion": "Trank der {name}",
    "brewing.potionSplash": "Wurftrank der {name}",
    "brewing.potionLingering": "Verweiltrank der {name}",
    "brewing.waterBottle": "Wasserflasche",
    "brewing.awkwardPotion": "Seltsamer Trank",
    "brewgame.idle": "Fülle die Flaschen mit Wasser, um mit dem Brauen zu beginnen.",
    "brewgame.fillFirst": "Fülle zuerst die Flaschen mit Wasser!",
    "brewgame.placed": "3 Wasserflaschen auf den Stand gestellt.",
    "brewgame.addedGunpowder": "Schießpulver hinzugefügt. Jetzt Wurftrank der {name}.",
    "brewgame.addedDragonsBreath": "Drachenatem hinzugefügt. Jetzt Verweiltrank der {name}.",
    "brewgame.addedModifierExtended": "{ing} hinzugefügt. Jetzt die verlängerte Variante.",
    "brewgame.addedModifierEnhanced": "{ing} hinzugefügt. Jetzt die verstärkte Variante.",
    "brewgame.addedIngredient": "{ing} hinzugefügt.",
    "brewgame.fizzle": "💥 Der Trank misslingt: {ing} gehört gerade nicht hierher.",
    "brewgame.ready": "✓ {name} fertig ({duration} · {effect}). Füge weiter Zutaten hinzu oder setze zurück für einen neuen Trank.",
    "brewgame.brewing": "Brauvorgang läuft: {n} Zutat(en) hinzugefügt. Wähle die nächste.",
    "brewgame.brewingResult": "Wird gebraut… (Seltsamer Trank)",
    "brewgame.needFirst": "Flaschen gefüllt. Füge zuerst Netherwarze hinzu (oder fermentiertes Spinnenauge für Schwäche).",
    "brewgame.bottle": "Flasche {n}",
    "tool.chunkbase.tag": "Seed-Karte",
    "tool.chunkbase.desc": "Die interaktive Seed-Karte schlechthin. Visualisiere deine gesamte Welt: Biome, Dörfer, Festungen und mehr, noch bevor du die Welt lädst.",
    "tool.chunkbase.f1": "Biom- und Struktursuche",
    "tool.chunkbase.f2": "Slime-Chunk-Rechner",
    "tool.chunkbase.f3": "Alle Java- und Bedrock-Versionen",
    "tool.chunkbase.f4": "Filter nach Dimension",
    "tool.chunkbase.btn1": "Chunkbase öffnen",
    "tool.orefinder.tag": "Erzfinder",
    "tool.orefinder.desc": "Finde genau heraus, wo Erze in deinem Seed generieren. Entdecke Diamanten, uralten Schutt und jede Erzader mit Präzision.",
    "tool.orefinder.f1": "Erzstandorte je nach Seed",
    "tool.orefinder.f2": "Alle Erzarten inklusive uraltem Schutt",
    "tool.orefinder.f3": "Y-Level-Heatmaps",
    "tool.orefinder.f4": "Plane deine Abbaurouten",
    "tool.orefinder.btn1": "OreFinder öffnen",
    "tool.wiki.tag": "Nachschlagewerk",
    "tool.wiki.desc": "Die offizielle, von der Community gepflegte Enzyklopädie. Von Mob-Mechaniken bis zur Befehlssyntax: die endgültige Referenz.",
    "tool.wiki.f1": "Jeder Gegenstand, Block und Mob",
    "tool.wiki.f2": "Befehlsdokumentation",
    "tool.wiki.f3": "Änderungsprotokolle & Snapshots",
    "tool.wiki.f4": "Technische Mechaniken",
    "tool.wiki.btn1": "Wiki öffnen",
    "tool.ninjabrain.tag": "Speedrun",
    "tool.ninjabrain.desc": "Echtzeit-Triangulation für Festungen. Liest live deinen F3-Bildschirm und berechnet den Festungsstandort, während du Enderaugen wirfst.",
    "tool.ninjabrain.f1": "Live-Triangulation per Bildschirmerfassung",
    "tool.ninjabrain.f2": "Konfidenz in % pro Wurf",
    "tool.ninjabrain.f3": "Funktioniert schon ab 2 Würfen",
    "tool.ninjabrain.f4": "Desktop-App und Browserversion",
    "tool.ninjabrain.btn1": "App herunterladen",
    "tool.ninjabrain.btn2": "Webversion",
    "tool.curseforge.tag": "Mods & Erweiterungen",
    "tool.curseforge.desc": "Die größte Mod-Hosting-Plattform für Minecraft. Finde, lade herunter und verwalte Mods, Modpacks, Ressourcenpakete und Welten für Java und Bedrock.",
    "tool.curseforge.f1": "Tausende Java- und Bedrock-Mods",
    "tool.curseforge.f2": "Modpack-Browser & Installer",
    "tool.curseforge.f3": "Ressourcen- und Datenpakete",
    "tool.curseforge.f4": "Begleit-App für einfache Verwaltung",
    "tool.curseforge.btn1": "CurseForge öffnen",
    "tool.minetrim.tag": "Rüstungsverzierungen",
    "tool.minetrim.desc": "Ein Rüstungsverzierungs-Builder und -Visualisierer für Minecraft. Sieh dir genau an, wie deine Muster und Farbkombinationen aussehen, bevor du sie im Spiel erfarmst.",
    "tool.minetrim.f1": "Alle Muster und Materialien",
    "tool.minetrim.f2": "Live-Vorschau der Rüstung",
    "tool.minetrim.f3": "Teile deine Kombinationen",
    "tool.minetrim.f4": "Java- und Bedrock-genau",
    "tool.minetrim.btn1": "Minetrim öffnen",
    "tool.structuretool.tag": "Strukturleser",
    "tool.structuretool.desc": "Lade eine <code>.mcstructure</code>- oder Schematica-Datei hoch und erhalte eine vollständige Aufschlüsselung jedes enthaltenen Blocks, ideal, um genau zu wissen, was du vor dem Bauen sammeln musst.",
    "tool.structuretool.f1": "Unterstützt .mcstructure & Schematica",
    "tool.structuretool.f2": "Vollständige Block- und Mengenaufschlüsselung",
    "tool.structuretool.f3": "Praktische Einkaufsliste für Bauprojekte",
    "tool.structuretool.f4": "Java- und Bedrock-Formate",
    "tool.structuretool.btn1": "Tool öffnen",
    "client.feather.tag": "Java-Client",
    "client.feather.desc": "Ein schicker Java-Edition-Client mit integrierter Mod-Unterstützung, FPS-Boost und einem ausgefeilten HUD-Anpasser. Kein Jonglieren mehr zwischen Forge und Fabric.",
    "client.feather.f1": "Integrierter Mod-Marktplatz",
    "client.feather.f2": "FPS-Optimierung & Render-Anpassungen",
    "client.feather.f3": "Individuelles HUD & Kosmetik",
    "client.feather.f4": "Unterstützt Forge- & Fabric-Mods",
    "client.feather.f5": "Nur Java Edition",
    "client.feather.btn1": "Feather herunterladen",
    "client.feather.btn2": "Webseite",
    "client.lunar.tag": "Java-Client",
    "client.lunar.desc": "Einer der beliebtesten Java-Clients der Community. Leichtgewichtig, schnell und von Haus aus voller Mods und Kosmetik. Weit verbreitet auf Servern wie Hypixel.",
    "client.lunar.f1": "Deutliche FPS-Verbesserungen",
    "client.lunar.f2": "Integrierte Mods (Optifine, Keystrokes usw.)",
    "client.lunar.f3": "Kosmetik & Umhänge",
    "client.lunar.f4": "Serverseitige Mod-Beschränkungen werden respektiert",
    "client.lunar.f5": "Nur Java Edition",
    "client.lunar.btn1": "Lunar herunterladen",
    "client.oderso.tag": "Bedrock-Client",
    "client.oderso.desc": "Ein Bedrock-Edition-PvP-Client für kompetitives Spielen. Optimiert für Kristall-PvP, Schwertkampf und Serverleistung auf Bedrock-Plattformen.",
    "client.oderso.f1": "Kristall-PvP-Optimierungen",
    "client.oderso.f2": "Reichweiten- & Hitbox-Anpassungen",
    "client.oderso.f3": "FPS- & Netzwerkleistung",
    "client.oderso.f4": "Individuelle Animationen",
    "client.oderso.f5": "Nur Bedrock Edition",
    "client.oderso.btn1": "Discord beitreten",
    "client.flarial.tag": "Bedrock-Client",
    "client.flarial.desc": "Ein funktionsreicher Bedrock-Edition-Client mit Fokus auf Leistung und PvP. Bekannt für seine klare Oberfläche, sein Modulsystem und seine aktive Entwickler-Community.",
    "client.flarial.f1": "Modulares Funktionssystem",
    "client.flarial.f2": "PvP- & Bewegungsoptimierungen",
    "client.flarial.f3": "Individuelles HUD & Klick-GUI",
    "client.flarial.f4": "Aktive Entwicklung & Updates",
    "client.flarial.f5": "Nur Bedrock Edition",
    "client.flarial.btn1": "Flarial herunterladen",
    "client.blueberry.tag": "Bedrock-Client",
    "client.blueberry.desc": "Ein modularer Bedrock-Edition-Client für Geschwindigkeit: FPS-Boost, Replay-Aufnahme, Pack-Wechsel, Kosmetik und Nahbereichs-Chat, alles in einem Launcher.",
    "client.blueberry.f1": "FPS-Boost & Replay-Aufnahme",
    "client.blueberry.f2": "Pack-Umschalter & Kosmetik",
    "client.blueberry.f3": "Nahbereichs-Chat",
    "client.blueberry.f4": "Nur Bedrock Edition",
    "client.blueberry.btn1": "Webseite",
    "client.blueberry.beta": "Beta: Blueberry Client befindet sich noch in der Betaphase. Rechne mit Fehlern und häufigen Änderungen, nutze es mit Vorsicht."
  }
};

const VARIANT_I18N = {
  "Base": {
    "en": "Base",
    "es": "Básica",
    "fr": "De base",
    "de": "Basis"
  },
  "Extended (+)": {
    "en": "Extended (+)",
    "es": "Extendida (+)",
    "fr": "Prolongée (+)",
    "de": "Verlängert (+)"
  },
  "Enhanced II": {
    "en": "Enhanced II",
    "es": "Mejorada II",
    "fr": "Améliorée II",
    "de": "Verstärkt II"
  },
  "Enhanced IV": {
    "en": "Enhanced IV",
    "es": "Mejorada IV",
    "fr": "Améliorée IV",
    "de": "Verstärkt IV"
  }
};
const CAT_I18N = {
  "Combat": {
    "en": "Combat",
    "es": "Combate",
    "fr": "Combat",
    "de": "Kampf"
  },
  "Damage": {
    "en": "Damage",
    "es": "Daño",
    "fr": "Dégâts",
    "de": "Schaden"
  },
  "Debuff": {
    "en": "Debuff",
    "es": "Debilitación",
    "fr": "Malus",
    "de": "Schwächung"
  },
  "Defense": {
    "en": "Defense",
    "es": "Defensa",
    "fr": "Défense",
    "de": "Verteidigung"
  },
  "Healing": {
    "en": "Healing",
    "es": "Curación",
    "fr": "Soins",
    "de": "Heilung"
  },
  "Utility": {
    "en": "Utility",
    "es": "Utilidad",
    "fr": "Utilitaire",
    "de": "Nützliches"
  },
  "1.21+": {
    "en": "1.21+",
    "es": "1.21+",
    "fr": "1.21+",
    "de": "1.21+"
  }
};
const POTION_NAME_I18N = {
  "swiftness": {
    "en": "Swiftness",
    "es": "Rapidez",
    "fr": "Rapidité",
    "de": "Schnelligkeit"
  },
  "slowness": {
    "en": "Slowness",
    "es": "Lentitud",
    "fr": "Lenteur",
    "de": "Langsamkeit"
  },
  "leaping": {
    "en": "Leaping",
    "es": "Salto",
    "fr": "Bond",
    "de": "Sprung"
  },
  "strength": {
    "en": "Strength",
    "es": "Fuerza",
    "fr": "Force",
    "de": "Stärke"
  },
  "healing": {
    "en": "Healing",
    "es": "Curación",
    "fr": "Guérison",
    "de": "Heilung"
  },
  "harming": {
    "en": "Harming",
    "es": "Daño",
    "fr": "Dégâts",
    "de": "Schaden"
  },
  "poison": {
    "en": "Poison",
    "es": "Veneno",
    "fr": "Poison",
    "de": "Gift"
  },
  "regeneration": {
    "en": "Regeneration",
    "es": "Regeneración",
    "fr": "Régénération",
    "de": "Regeneration"
  },
  "fire_resistance": {
    "en": "Fire Resistance",
    "es": "Resistencia al Fuego",
    "fr": "Résistance au Feu",
    "de": "Feuerresistenz"
  },
  "water_breathing": {
    "en": "Water Breathing",
    "es": "Respiración Acuática",
    "fr": "Respiration Aquatique",
    "de": "Wasseratmung"
  },
  "night_vision": {
    "en": "Night Vision",
    "es": "Visión Nocturna",
    "fr": "Vision Nocturne",
    "de": "Nachtsicht"
  },
  "invisibility": {
    "en": "Invisibility",
    "es": "Invisibilidad",
    "fr": "Invisibilité",
    "de": "Unsichtbarkeit"
  },
  "turtle_master": {
    "en": "the Turtle Master",
    "es": "Maestro Tortuga",
    "fr": "Maître Tortue",
    "de": "Schildkrötenmeister"
  },
  "slow_falling": {
    "en": "Slow Falling",
    "es": "Caída Lenta",
    "fr": "Chute Lente",
    "de": "Federfall"
  },
  "wind_charging": {
    "en": "Wind Charging",
    "es": "Carga de Viento",
    "fr": "Charge de Vent",
    "de": "Windaufladung"
  },
  "weaving": {
    "en": "Weaving",
    "es": "Tejido",
    "fr": "Tissage",
    "de": "Weberei"
  },
  "oozing": {
    "en": "Oozing",
    "es": "Rezumado",
    "fr": "Suintement",
    "de": "Triefen"
  },
  "infestation": {
    "en": "Infestation",
    "es": "Infestación",
    "fr": "Infestation",
    "de": "Befall"
  },
  "weakness": {
    "en": "Weakness",
    "es": "Debilidad",
    "fr": "Faiblesse",
    "de": "Schwäche"
  }
};
const NOTE_I18N = {
  "slowness": {
    "en": "Can also be brewed directly from Potion of Leaping using Fermented Spider Eye.",
    "es": "También se puede preparar directamente a partir de la Poción de Salto usando Ojo de Araña Fermentado.",
    "fr": "Peut aussi être préparée directement à partir de la Potion de Bond avec un Œil d'Araignée Fermenté.",
    "de": "Kann auch direkt aus dem Trank des Sprungs mit fermentiertem Spinnenauge gebraut werden."
  },
  "infestation": {
    "en": "Stone must be non-infested. Infested stone will not work.",
    "es": "La piedra debe ser no infestada. La piedra infestada no funcionará.",
    "fr": "La pierre doit être non infestée. La pierre infestée ne fonctionnera pas.",
    "de": "Der Stein darf nicht befallen sein. Befallener Stein funktioniert nicht."
  },
  "weakness": {
    "en": "Weakness does NOT require Nether Wart, it skips the Awkward Potion step entirely.",
    "es": "La Debilidad NO requiere Verruga del Nether: se salta por completo el paso de la Poción Rara.",
    "fr": "La Faiblesse NE nécessite PAS de Verrue du Nether : elle saute entièrement l'étape de la Potion Étrange.",
    "de": "Schwäche benötigt KEINE Netherwarze, der Schritt des seltsamen Tranks entfällt komplett."
  }
};
const ING_I18N = {
  "glass_bottle": {
    "en": "Glass Bottle",
    "es": "Botella de Cristal",
    "fr": "Bouteille en Verre",
    "de": "Glasflasche"
  },
  "water_bottle": {
    "en": "Water Bottle",
    "es": "Botella de Agua",
    "fr": "Bouteille d'Eau",
    "de": "Wasserflasche"
  },
  "nether_wart": {
    "en": "Nether Wart",
    "es": "Verruga del Nether",
    "fr": "Verrue du Nether",
    "de": "Netherwarze"
  },
  "sugar": {
    "en": "Sugar",
    "es": "Azúcar",
    "fr": "Sucre",
    "de": "Zucker"
  },
  "blaze_powder": {
    "en": "Blaze Powder",
    "es": "Polvo de Blaze",
    "fr": "Poudre de Blaze",
    "de": "Lohenstaub"
  },
  "rabbit_foot": {
    "en": "Rabbit's Foot",
    "es": "Pata de Conejo",
    "fr": "Patte de Lapin",
    "de": "Kaninchenpfote"
  },
  "glistering_melon": {
    "en": "Glistering Melon Slice",
    "es": "Rodaja de Sandía Reluciente",
    "fr": "Tranche de Melon Scintillante",
    "de": "Glänzende Melonenscheibe"
  },
  "spider_eye": {
    "en": "Spider Eye",
    "es": "Ojo de Araña",
    "fr": "Œil d'Araignée",
    "de": "Spinnenauge"
  },
  "fermented_eye": {
    "en": "Fermented Spider Eye",
    "es": "Ojo de Araña Fermentado",
    "fr": "Œil d'Araignée Fermenté",
    "de": "Fermentiertes Spinnenauge"
  },
  "ghast_tear": {
    "en": "Ghast Tear",
    "es": "Lágrima de Ghast",
    "fr": "Larme de Ghast",
    "de": "Ghast-Träne"
  },
  "magma_cream": {
    "en": "Magma Cream",
    "es": "Crema de Magma",
    "fr": "Crème de Magma",
    "de": "Magmacreme"
  },
  "pufferfish": {
    "en": "Pufferfish",
    "es": "Pez Globo",
    "fr": "Poisson-Globe",
    "de": "Kugelfisch"
  },
  "golden_carrot": {
    "en": "Golden Carrot",
    "es": "Zanahoria Dorada",
    "fr": "Carotte Dorée",
    "de": "Goldene Karotte"
  },
  "turtle_shell": {
    "en": "Turtle Shell",
    "es": "Caparazón de Tortuga",
    "fr": "Carapace de Tortue",
    "de": "Schildkrötenpanzer"
  },
  "phantom_membrane": {
    "en": "Phantom Membrane",
    "es": "Membrana de Phantom",
    "fr": "Membrane de Phantom",
    "de": "Phantommembran"
  },
  "breeze_rod": {
    "en": "Breeze Rod",
    "es": "Vara de Breeze",
    "fr": "Tige de Breeze",
    "de": "Breeze-Rute"
  },
  "cobweb": {
    "en": "Cobweb",
    "es": "Telaraña",
    "fr": "Toile d'Araignée",
    "de": "Spinnennetz"
  },
  "slime_block": {
    "en": "Slime Block",
    "es": "Bloque de Slime",
    "fr": "Bloc de Slime",
    "de": "Schleimblock"
  },
  "stone": {
    "en": "Stone (Non-infested)",
    "es": "Piedra (No infestada)",
    "fr": "Pierre (non infestée)",
    "de": "Stein (nicht befallen)"
  },
  "gunpowder": {
    "en": "Gunpowder",
    "es": "Pólvora",
    "fr": "Poudre à Canon",
    "de": "Schießpulver"
  },
  "dragons_breath": {
    "en": "Dragon's Breath",
    "es": "Aliento de Dragón",
    "fr": "Souffle de Dragon",
    "de": "Drachenatem"
  },
  "redstone": {
    "en": "Redstone Dust",
    "es": "Polvo de Redstone",
    "fr": "Poudre de Redstone",
    "de": "Redstone-Staub"
  },
  "glowstone": {
    "en": "Glowstone Dust",
    "es": "Polvo de Glowstone",
    "fr": "Poudre de Glowstone",
    "de": "Glowstone-Staub"
  }
};

// Effect strings are keyed by their English source text (also the fallback
// language), since they're free-form values rather than fixed UI keys.
const EFFECT_I18N = {
  "+20% Speed": {
    "es": "+20% de velocidad",
    "fr": "+20 % de vitesse",
    "de": "+20% Geschwindigkeit"
  },
  "+40% Speed": {
    "es": "+40% de velocidad",
    "fr": "+40 % de vitesse",
    "de": "+40% Geschwindigkeit"
  },
  "-15% Speed": {
    "es": "-15% de velocidad",
    "fr": "-15 % de vitesse",
    "de": "-15% Geschwindigkeit"
  },
  "-60% Speed": {
    "es": "-60% de velocidad",
    "fr": "-60 % de vitesse",
    "de": "-60% Geschwindigkeit"
  },
  "+½ Blocks jump": {
    "es": "+½ bloque de salto",
    "fr": "+½ bloc de saut",
    "de": "+½ Block Sprunghöhe"
  },
  "+1¼ Blocks jump": {
    "es": "+1¼ bloques de salto",
    "fr": "+1¼ bloc de saut",
    "de": "+1¼ Block Sprunghöhe"
  },
  "+3 Attack damage": {
    "es": "+3 de daño de ataque",
    "fr": "+3 de dégâts d'attaque",
    "de": "+3 Angriffsschaden"
  },
  "+6 Attack damage": {
    "es": "+6 de daño de ataque",
    "fr": "+6 de dégâts d'attaque",
    "de": "+6 Angriffsschaden"
  },
  "-4 Attack damage": {
    "es": "-4 de daño de ataque",
    "fr": "-4 de dégâts d'attaque",
    "de": "-4 Angriffsschaden"
  },
  "+4 HP": {
    "es": "+4 PS",
    "fr": "+4 PV",
    "de": "+4 LP"
  },
  "+8 HP": {
    "es": "+8 PS",
    "fr": "+8 PV",
    "de": "+8 LP"
  },
  "-6 HP": {
    "es": "-6 PS",
    "fr": "-6 PV",
    "de": "-6 LP"
  },
  "-12 HP": {
    "es": "-12 PS",
    "fr": "-12 PV",
    "de": "-12 LP"
  },
  "0.9 dmg/sec": {
    "es": "0,9 de daño/seg",
    "fr": "0,9 dégâts/s",
    "de": "0,9 Schaden/Sek."
  },
  "1.8 dmg/sec": {
    "es": "1,8 de daño/seg",
    "fr": "1,8 dégâts/s",
    "de": "1,8 Schaden/Sek."
  },
  "+0.4 HP/sec": {
    "es": "+0,4 PS/seg",
    "fr": "+0,4 PV/s",
    "de": "+0,4 LP/Sek."
  },
  "+0.8 HP/sec": {
    "es": "+0,8 PS/seg",
    "fr": "+0,8 PV/s",
    "de": "+0,8 LP/Sek."
  },
  "Fire immune": {
    "es": "Inmune al fuego",
    "fr": "Immunité au feu",
    "de": "Feuerimmun"
  },
  "No drowning": {
    "es": "Sin ahogamiento",
    "fr": "Pas de noyade",
    "de": "Kein Ertrinken"
  },
  "Full brightness": {
    "es": "Brillo total",
    "fr": "Luminosité maximale",
    "de": "Volle Helligkeit"
  },
  "Fully invisible": {
    "es": "Invisibilidad total",
    "fr": "Invisibilité totale",
    "de": "Vollständig unsichtbar"
  },
  "+60% defense, -60% speed": {
    "es": "+60% de defensa, -60% de velocidad",
    "fr": "+60 % de défense, -60 % de vitesse",
    "de": "+60% Verteidigung, -60% Geschwindigkeit"
  },
  "+80% defense, -60% speed": {
    "es": "+80% de defensa, -60% de velocidad",
    "fr": "+80 % de défense, -60 % de vitesse",
    "de": "+80% Verteidigung, -60% Geschwindigkeit"
  },
  "No fall damage": {
    "es": "Sin daño por caída",
    "fr": "Pas de dégâts de chute",
    "de": "Kein Fallschaden"
  },
  "Emit wind burst on hit": {
    "es": "Emite una ráfaga de viento al golpear",
    "fr": "Émet une rafale de vent au contact",
    "de": "Erzeugt bei Treffer einen Windstoß"
  },
  "Spawn cobwebs on damage": {
    "es": "Genera telarañas al recibir daño",
    "fr": "Génère des toiles d'araignée en cas de dégâts",
    "de": "Erzeugt bei Schaden Spinnennetze"
  },
  "Spawn slimes on death": {
    "es": "Genera slimes al morir",
    "fr": "Génère des slimes à la mort",
    "de": "Erzeugt beim Tod Schleime"
  },
  "Spawn silverfish on hit": {
    "es": "Genera lepismas al golpear",
    "fr": "Génère des poissons d’argent au contact",
    "de": "Erzeugt bei Treffer Silberfischchen"
  }
};

function currentLang() {
  return document.documentElement.getAttribute('data-lang') || 'en';
}

// t('some.key', {name: 'Foo'}) looks up the key for the active language
// (falling back to English, then the raw key) and fills in {placeholders}.
function t(key, vars) {
  const lang = currentLang();
  let str = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return str;
}

function tCat(cat) {
  const entry = CAT_I18N[cat];
  return (entry && (entry[currentLang()] || entry.en)) || cat;
}

function tPotionName(id) {
  const entry = POTION_NAME_I18N[id];
  return (entry && (entry[currentLang()] || entry.en)) || id;
}

function tNote(id) {
  const entry = NOTE_I18N[id];
  return entry ? (entry[currentLang()] || entry.en) : null;
}

function tIng(key) {
  const entry = ING_I18N[key];
  return (entry && (entry[currentLang()] || entry.en)) || key;
}

function tEffect(effect) {
  const entry = EFFECT_I18N[effect];
  return (entry && entry[currentLang()]) || effect;
}

function tVariant(label) {
  const entry = VARIANT_I18N[label];
  return (entry && (entry[currentLang()] || entry.en)) || label;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });
  document.documentElement.setAttribute('lang', currentLang());
}

// Content built dynamically from data.js (potion grid/filters, the brewing
// detail panel, the brew-it-yourself game) isn't touched by applyI18n()
// above, since it isn't in the DOM as data-i18n elements. Re-render it
// explicitly on language change so it actually re-translates.
function refreshDynamicContent() {
  if (typeof renderCatFilters === 'function') renderCatFilters();
  if (typeof renderPotionGrid === 'function') renderPotionGrid();
  if (typeof activePotionId !== 'undefined' && activePotionId && typeof renderDetail === 'function') renderDetail();
  if (typeof renderBrewGame === 'function') renderBrewGame();
  if (typeof updateModeToggle === 'function') updateModeToggle(document.documentElement.getAttribute('data-mode') || 'dark');
}

function setLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  try { localStorage.setItem('mctoolkit-lang', lang); } catch (e) { /* ignore */ }
  applyI18n();
  refreshDynamicContent();
}

function initLanguageControls() {
  const list = document.getElementById('lang-list');
  const current = currentLang();
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
