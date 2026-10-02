// Builds promo-portrait.{en,fr}.html (4:5, for Facebook) from the .src template:
// inlines the real milestone icons, the laurel path and the world map data.
import fs from "node:fs";
const svgInner = (n) => fs.readFileSync(`public/icons/milestones/${n}.svg`, "utf8").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
const laurel = fs.readFileSync("src/app/opengraph-image.tsx", "utf8").match(/LAUREL_PATH =\s*"([^"]+)"/)[1];
const world = fs.readFileSync("promo/countries-110m.json", "utf8");

// Labels and dates copied from src/lib/journey.ts. Top to bottom, like the app.
const ITEMS = [
  { state: "future", en: ["???", "c. 1500"], fr: ["???", "vers 1500"] },
  { state: "future", en: ["???", "1492"], fr: ["???", "1492"] },
  { icon: "book-cover", state: "current", en: ["Printing press", "c. 1450"], fr: ["Imprimerie", "vers 1450"] },
  { icon: "castle", en: ["Castles", "11th century"], fr: ["Châteaux forts", "XIe siècle"] },
  { icon: "drakkar", en: ["Vikings", "c. 800"], fr: ["Vikings", "vers 800"] },
  { icon: "coliseum", en: ["Colosseum", "AD 80"], fr: ["Colisée", "80"] },
  { icon: "egyptian-pyramids", en: ["Pyramids of Giza", "c. 2560 BC"], fr: ["Pyramides de Gizeh", "vers -2 560"] },
  { icon: "campfire", en: ["Mastering fire", "c. 400,000 BC"], fr: ["Maîtrise du feu", "vers -400 000"] },
];
const TEXT = {
  en: { tagline: "Guess where.<br><em>Order the past.</em>", meta: "Free &middot; daily &middot; no account" },
  fr: { tagline: "Devine l'endroit.<br><em>Remets l'histoire dans l'ordre.</em>", meta: "Gratuit &middot; quotidien &middot; sans compte" },
};
const Y0 = 480, STEP = 92;
const ys = ITEMS.map((_, i) => Y0 + i * STEP);
const cur = ITEMS.findIndex((it) => it.state === "current");
const src = fs.readFileSync("promo/promo-portrait.src.html", "utf8");

for (const lang of ["en", "fr"]) {
  let tl = `<div class="line" style="top:${ys[0] - 60}px;height:${ys.at(-1) - ys[0] + 60}px"></div>`;
  tl += `\n  <div class="fill" style="top:${ys[cur]}px;height:${ys.at(-1) - ys[cur]}px"></div>`;
  ITEMS.forEach((it, i) => {
    const st = it.state ?? "past";
    const [name, date] = it[lang];
    tl += `\n  <div class="node ${st}" style="top:${ys[i]}px">${it.icon ? `<svg viewBox="0 0 512 512">${svgInner(it.icon)}</svg>` : ""}</div>`;
    tl += `\n  <div class="lbl ${st}" style="top:${ys[i]}px"><b>${name}</b><i>${date}</i></div>`;
  });
  tl += `\n  <svg class="pawn" style="top:${ys[cur]}px" viewBox="0 0 512 512">${svgInner("walk")}</svg><div class="pawn-dots" style="top:${ys[cur] - 2}px"></div>`;
  const out = src
    .replace("<!-- TIMELINE -->", tl)
    .replaceAll('d="LAUREL"', `d="${laurel}"`)
    .replace("/*WORLD*/null", world)
    .replace("{{LANG}}", lang).replace("{{TAGLINE}}", TEXT[lang].tagline).replace("{{META}}", TEXT[lang].meta);
  fs.writeFileSync(`promo/promo-portrait.${lang}.html`, out);
}
