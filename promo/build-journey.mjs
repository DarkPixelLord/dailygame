// Builds promo-journey.{en,fr}.html from the .src template: inlines the real
// milestone icons and the laurel path so the card matches the in-game journey.
import fs from "node:fs";
const svgInner = (n) => fs.readFileSync(`public/icons/milestones/${n}.svg`, "utf8").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
const laurel = fs.readFileSync("src/app/opengraph-image.tsx", "utf8").match(/LAUREL_PATH =\s*"([^"]+)"/)[1];

// Clues are copied verbatim from src/lib/poc-events{,-fr}.ts (Columbus), to match the map screenshot.
const LANGS = {
  en: {
    clue: "On a small island in a turquoise archipelago, a sailor's westward voyage for a distant crown makes landfall on territory no map yet showed.",
    tagline: "Guess where.<br>Order the past.",
    eras: ["Prehistory", "Antiquity", "Middle Ages", "Modern era", "Today"],
    years: ["400k BC", "36k BC", "3500 BC", "2560 BC", "508 BC", "AD 80", "c. 800", "11th c.", "c. 1450", "1492", "1609", "1829", "1879", "1903", "1969", "2007"],
  },
  fr: {
    clue: "Sur une petite île d'un archipel turquoise, le voyage vers l'ouest d'un marin touche terre sur un territoire qu'aucune carte ne montrait encore.",
    tagline: "Devine l'endroit.<br>Remets l'histoire dans l'ordre.",
    eras: ["Préhistoire", "Antiquité", "Moyen Âge", "Époque moderne", "Aujourd'hui"],
    years: ["-400 000", "-36 000", "-3500", "-2560", "-508", "80", "vers 800", "XIe s.", "vers 1450", "1492", "1609", "1829", "1879", "1903", "1969", "2007"],
  },
};
const ICONS = ["campfire", "bison", "cartwheel", "egyptian-pyramids", "greek-temple", "coliseum", "drakkar", "castle",
  "book-cover", "caravel", "telescope", "steam-locomotive", "light-bulb", "biplane", "lunar-module", "smartphone"];
const ERA_AT = [0, 3, 6, 9, 13];
const CURRENT = 8, X0 = 110, STEP = 92;
const xs = ICONS.map((_, i) => X0 + i * STEP);
const src = fs.readFileSync("promo/promo-journey.src.html", "utf8");

for (const [lang, t] of Object.entries(LANGS)) {
  let nodes = ICONS.map((icon, i) => {
    const cls = i < CURRENT ? "past" : i === CURRENT ? "current" : "future";
    return `<div class="node ${cls}" style="left:${xs[i]}px"><svg viewBox="0 0 512 512">${svgInner(icon)}</svg><span class="yr">${t.years[i]}</span></div>`;
  }).join("\n    ");
  nodes += "\n    " + t.eras.map((e, k) => `<div class="era" style="left:${xs[ERA_AT[k]] - 30}px">${e}</div>`).join("\n    ");
  nodes += `\n    <svg class="pawn" style="left:${xs[CURRENT]}px" viewBox="0 0 512 512">${svgInner("walk")}</svg><div class="pawn-dots" style="left:${xs[CURRENT]}px"></div>`;
  const out = src
    .replace("<!-- NODES -->", nodes)
    .replace('style="width: 640px"', `style="width: ${xs[CURRENT] - 60}px"`)
    .replaceAll('d="LAUREL"', `d="${laurel}"`)
    .replace("{{LANG}}", lang).replace("{{CLUE}}", t.clue).replace("{{TAGLINE}}", t.tagline);
  fs.writeFileSync(`promo/promo-journey.${lang}.html`, out);
}
