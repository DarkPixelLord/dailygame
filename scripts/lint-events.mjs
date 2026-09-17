#!/usr/bin/env node
// Deterministic lint for src/lib/poc-events.ts and src/lib/poc-events-fr.ts.
//
// Catches the mechanical (non-judgment) rules established for event
// writing: no dates/eras in player-facing text, no clue-phase words that
// hand the player the map answer (nationalities, regions, ruler titles tied
// to one culture, etc.), no unvetted capitalized proper nouns in clues (see
// CAPITALIZED_WORD_EXCEPTIONS below — this is the primary defense against
// geographic leaks, since a hardcoded word list can never enumerate every
// river/mountain/sea on Earth), no em dashes anywhere, clues short enough
// to read comfortably on a phone screen, and names short enough (and
// date-free) to fit the fixed-height final-round cards without truncating.
// It does NOT catch vagueness/ambiguity or factual accuracy of added
// details — those need the blind-verification pass described in
// docs/event-writing-guide.md, because those are judgment calls a regex
// can't make.
//
// Usage: node scripts/lint-events.mjs   (exit code 1 if any violation)

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EN_PATH = path.join(__dirname, "..", "src", "lib", "poc-events.ts");
const FR_PATH = path.join(__dirname, "..", "src", "lib", "poc-events-fr.ts");

// Date/era patterns: apply to BOTH clue and explanation, both languages.
const DATE_PATTERNS = [
  { name: "4-digit year", re: /\b(1[0-9]{3}|20[0-9]{2})\b/ },
  { name: "BCE/CE marker", re: /\b(BCE|CE)\b/ },
  { name: "French era marker", re: /\bapr\.?\s*J\.?-?C\.?|av\.?\s*J\.?-?C\.?/i },
  { name: "decade (e.g. 1920s)", re: /\b1[0-9]{3}0s\b/i },
  // Only flags a century tied to a specific number/ordinal ("19th century",
  // "XIVe siècle") — a bare duration like "for a century"/"pendant un
  // siècle" doesn't reveal chronological placement, so it's not flagged.
  { name: "specific century", re: /\b(\d+(st|nd|rd|th)\s+century|century\s+(BCE|CE)|[ivxlcdm]+e?\s+si[eè]cle)\b/i },
];

// Words that leak the map answer's nationality/ethnicity/culture/region, or
// a ruler title tied to one specific culture (tsar -> Russia, caliph ->
// Middle East, shogun -> Japan, pharaoh -> Egypt, etc.). Only checked in
// `clue` — `explanation` is shown after the player has already guessed, so
// it's fine (and expected) to name places/cultures there.
// Extend this list whenever a new leak type is found in review.
const BANNED_CLUE_WORDS_EN = [
  "roman", "romans", "french", "britain", "british", "persian", "greek", "greece",
  "german", "germany", "spanish", "spain", "chinese", "china", "japanese", "japan",
  "egyptian", "egypt", "russian", "russia", "american", "america", "ottoman",
  "mongol", "mongolian", "african", "africa", "european", "europe", "asian", "asia",
  "parisian", "paris", "english", "byzantine", "soviet", "genoese", "genoa",
  "incan", "inca", "gothic", "goths", "italian", "italy", "ethiopian", "ethiopia",
  "indian", "india", "israeli", "israel", "arab", "arabic", "nordic",
  "scandinavian", "balkan", "iberian", "slavic", "caribbean", "mediterranean",
  "atlantic", "pacific", "baltic", "siberia", "siberian", "sahara", "andes",
  "himalaya", "himalayas", "alps", "nile", "rhine", "danube", "amazon",
  "tsar", "tzar", "caliph", "shogun", "pharaoh", "viking", "norman", "normandy",
  "celtic", "gallic", "gaul", "prussia", "prussian",
];
// Mobile-friendliness + house style: no em dashes anywhere, and clues must
// stay short enough to read comfortably on a small screen.
const MAX_CLUE_LENGTH = 160;
// `name` is shown both after a map guess AND as the card label in the final
// chronological-order round — so, unlike `clue`, it can't contain a date
// (that would hand the player the answer to the round it's displayed in),
// and it needs to stay short enough that the fixed-height reorder cards
// never have to truncate it. Character count is only a rough proxy for how
// many lines a name wraps to (word length/breaks matter too), so treat a
// violation here as "double-check this one," and use the dev-order page's
// "Longest titles" button for the real visual verification.
const MAX_NAME_LENGTH = 46;
const EM_DASH_RE = /—/;

// A hardcoded banned-word list can never enumerate every river, mountain
// range, sea, or desert on Earth that would leak the map answer ("the
// Volga", "the Alps", "Lake Titicaca", ...) — it's whack-a-mole against an
// open-ended category. Proper nouns are reliably marked by capitalization
// instead, so flag any capitalized word appearing after the first word of
// a clue (which is always capitalized as a sentence-starter) as a likely
// proper-noun leak. This is much stricter than the word list, which is the
// point: it catches leaks nobody thought to list ahead of time.
//
// Vetted exceptions: capitalized words that are NOT geographic and don't
// leak the map answer (identity/era descriptors, not place names). Only add
// a word here after confirming by hand that it doesn't reveal location.
const CAPITALIZED_WORD_EXCEPTIONS = new Set([
  "earth", "terre", "west", "occident", "jewish", "juif", "juive",
  "holocaust", "holocauste", "nazi", "nazis", "black", "noire", "noir",
  "indies", "indes", "antiquity", "antiquité",
]);

function findCapitalizedLeak(clue) {
  const words = clue.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g) || [];
  for (let i = 1; i < words.length; i++) {
    const w = words[i];
    if (w.length > 1 && /^[A-ZÀ-Ý]/.test(w) && !CAPITALIZED_WORD_EXCEPTIONS.has(w.toLowerCase())) {
      return w;
    }
  }
  return null;
}

const BANNED_CLUE_WORDS_FR = [
  "romain", "romaine", "français", "française", "britannique", "perse", "grec",
  "grecque", "allemand", "allemande", "espagnol", "espagnole", "chinois",
  "chinoise", "japonais", "japonaise", "égyptien", "égyptienne", "russe",
  "américain", "américaine", "ottoman", "ottomane", "mongol", "mongole",
  "africain", "africaine", "européen", "européenne", "asiatique", "parisien",
  "parisienne", "anglais", "anglaise", "byzantin", "byzantine", "soviétique",
  "génois", "génoise", "inca", "gothique", "italien", "italienne", "éthiopien",
  "éthiopienne", "indien", "indienne", "israélien", "israélienne",
  "arabe", "nordique", "scandinave", "balkanique", "ibérique", "slave",
  "caraïbe", "méditerranéen", "méditerranéenne", "atlantique", "pacifique",
  "baltique", "sibérien", "sibérienne", "sahara", "andes", "himalaya", "alpes",
  "nil", "rhin", "danube", "amazone", "tsar", "calife", "shogun", "pharaon",
  "viking", "normand", "normande", "normandie", "celtique", "gaulois",
  "gauloise", "prussien", "prussienne",
];

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findBannedWord(text, words) {
  for (const w of words) {
    const re = new RegExp(`\\b${escapeRe(w)}\\b`, "i");
    if (re.test(text)) return w;
  }
  return null;
}

function findDateHit(text) {
  for (const { name, re } of DATE_PATTERNS) {
    if (re.test(text)) return name;
  }
  return null;
}

// Slice `content` into per-entry blocks keyed by id, using each match of
// `idRe` as a block boundary (block = from this match to the next one).
function sliceBlocks(content, idRe) {
  const matches = [...content.matchAll(idRe)];
  const blocks = new Map();
  for (let i = 0; i < matches.length; i++) {
    const id = matches[i][1];
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : content.length;
    blocks.set(id, content.slice(start, end));
  }
  return blocks;
}

function extractField(block, field) {
  const re = new RegExp(`${field}:\\s*\\n?\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const m = block.match(re);
  return m ? m[1] : null;
}

function loadEn() {
  const content = readFileSync(EN_PATH, "utf8");
  const blocks = sliceBlocks(content, /id:\s*"([a-zA-Z0-9_]+)"/g);
  const entries = new Map();
  for (const [id, block] of blocks) {
    entries.set(id, {
      name: extractField(block, "name"),
      clue: extractField(block, "clue"),
      explanation: extractField(block, "explanation"),
    });
  }
  return entries;
}

function loadFr() {
  const content = readFileSync(FR_PATH, "utf8");
  const blocks = sliceBlocks(content, /^ {2}([a-zA-Z_][a-zA-Z0-9_]*):\s*\{/gm);
  const entries = new Map();
  for (const [id, block] of blocks) {
    entries.set(id, {
      name: extractField(block, "name"),
      clue: extractField(block, "clue"),
      explanation: extractField(block, "explanation"),
    });
  }
  return entries;
}

function main() {
  const en = loadEn();
  const fr = loadFr();
  const violations = [];

  const enIds = new Set(en.keys());
  const frIds = new Set(fr.keys());
  for (const id of enIds) {
    if (!frIds.has(id)) violations.push({ id, field: "-", issue: "missing from poc-events-fr.ts" });
  }
  for (const id of frIds) {
    if (!enIds.has(id)) violations.push({ id, field: "-", issue: "missing from poc-events.ts" });
  }

  function checkLang(entries, geoWords, langLabel) {
    for (const [id, { name, clue, explanation }] of entries) {
      if (name == null) violations.push({ id, field: `${langLabel}.name`, issue: "could not parse field (check formatting)" });
      if (clue == null) violations.push({ id, field: `${langLabel}.clue`, issue: "could not parse field (check formatting)" });
      if (explanation == null) violations.push({ id, field: `${langLabel}.explanation`, issue: "could not parse field (check formatting)" });

      if (name != null) {
        const dateHit = findDateHit(name);
        if (dateHit) violations.push({ id, field: `${langLabel}.name`, issue: `contains a date/era (${dateHit}) — name is shown in the final-round cards` });
        if (EM_DASH_RE.test(name)) violations.push({ id, field: `${langLabel}.name`, issue: "contains an em dash (—) — never use one" });
        if (name.length > MAX_NAME_LENGTH) {
          violations.push({ id, field: `${langLabel}.name`, issue: `too long for a fixed-height final-round card (${name.length} chars, max ${MAX_NAME_LENGTH})` });
        }
      }
      if (clue != null) {
        const dateHit = findDateHit(clue);
        if (dateHit) violations.push({ id, field: `${langLabel}.clue`, issue: `contains a date/era (${dateHit})` });
        const geoHit = findBannedWord(clue, geoWords);
        if (geoHit) violations.push({ id, field: `${langLabel}.clue`, issue: `leaks geography/culture via "${geoHit}"` });
        const capHit = findCapitalizedLeak(clue);
        if (capHit) violations.push({ id, field: `${langLabel}.clue`, issue: `capitalized word "${capHit}" is likely an unvetted proper noun (place/name) — review, then either rewrite or add to CAPITALIZED_WORD_EXCEPTIONS if it's confirmed safe` });
        if (EM_DASH_RE.test(clue)) violations.push({ id, field: `${langLabel}.clue`, issue: "contains an em dash (—) — never use one" });
        if (clue.length > MAX_CLUE_LENGTH) {
          violations.push({ id, field: `${langLabel}.clue`, issue: `too long for mobile (${clue.length} chars, max ${MAX_CLUE_LENGTH})` });
        }
      }
      if (explanation != null) {
        const dateHit = findDateHit(explanation);
        if (dateHit) violations.push({ id, field: `${langLabel}.explanation`, issue: `contains a date/era (${dateHit})` });
        if (EM_DASH_RE.test(explanation)) violations.push({ id, field: `${langLabel}.explanation`, issue: "contains an em dash (—) — never use one" });
      }
    }
  }

  checkLang(en, BANNED_CLUE_WORDS_EN, "EN");
  checkLang(fr, BANNED_CLUE_WORDS_FR, "FR");

  const total = en.size + fr.size;
  if (violations.length === 0) {
    console.log(`lint-events: OK — ${en.size} EN / ${fr.size} FR entries checked, no violations.`);
    process.exit(0);
  }

  console.error(`lint-events: ${violations.length} violation(s) found:\n`);
  for (const v of violations) {
    console.error(`  [${v.id}] ${v.field}: ${v.issue}`);
  }
  console.error(`\n${total} entries checked total.`);
  process.exit(1);
}

main();
