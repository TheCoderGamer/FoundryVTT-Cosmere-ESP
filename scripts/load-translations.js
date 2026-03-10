Hooks.on("i18nInit", async () => {
    if (game.i18n.lang !== "es") return;
    
    const response = await fetch("modules/cosmere-rpg-es/lang/es.json");
    const data = await response.json();
    foundry.utils.mergeObject(game.i18n.translations, data);
    
    console.log("Cosmere RPG | Traducciones en español cargadas.");
});
