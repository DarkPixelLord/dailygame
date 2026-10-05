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
// docs/event-writing-guide-v2.md, because those are judgment calls a regex
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

// Words that leak the map answer's country: the country/continent's own
// name, its nationality/culture adjective, or a ruler title tied to one
// specific culture (tsar -> Russia, caliph -> Middle East, shogun -> Japan,
// pharaoh -> Egypt, etc.). Unlike BANNED_GEO_FEATURE_WORDS below, these are
// banned at EVERY difficulty, including easy — see "Writing to a target
// difficulty" in docs/event-writing-guide-v2.md: easy allows the player to
// deduce the country from a real proper noun (a city, river, mountain,
// monument...), but never states the country itself outright. Only checked
// in `clue` — `explanation` is shown after the player has already guessed,
// so it's fine (and expected) to name places/cultures there.
// Extend this list whenever a new leak type is found in review.
const BANNED_ALWAYS_WORDS_EN = [
  "roman", "romans", "french", "britain", "british", "persian", "greek", "greece",
  "german", "germany", "spanish", "spain", "chinese", "china", "japanese", "japan",
  "egyptian", "egypt", "russian", "russia", "american", "america", "ottoman",
  "mongol", "mongolian", "african", "africa", "european", "europe", "asian", "asia",
  "parisian", "english", "byzantine", "soviet", "genoese",
  "incan", "inca", "maya", "mayan", "gothic", "goths", "italian", "italy", "ethiopian", "ethiopia",
  "indian", "india", "israeli", "israel", "arab", "arabic", "nordic",
  "scandinavian", "balkan", "iberian", "slavic",
  "tsar", "tzar", "caliph", "shogun", "pharaoh", "viking", "norman",
  "celtic", "gallic", "gaul", "prussia", "prussian",
  // Country names hidden inside a feature name ("Gulf of Finland") or an
  // island synonymous with one country (Java = Indonesia) leak the same way.
  "finland", "finnish", "indonesia", "indonesian", "java", "javanese",
];
// Named geographic/cultural features (a city, sea, river, mountain range,
// region...) that let a player deduce the country without being told it
// directly. These are exactly the easy-tier lever, so they're only banned
// for medium/hard (where no proper noun is allowed at all) — see checkLang.
const BANNED_GEO_FEATURE_WORDS_EN = [
  "paris", "genoa", "caribbean", "mediterranean",
  "atlantic", "pacific", "baltic", "siberia", "siberian", "sahara", "andes",
  "himalaya", "himalayas", "alps", "nile", "rhine", "danube", "amazon",
  "normandy",
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

// Person entries pin the map answer at the subject's birthplace (see
// pinIsBirthplace in poc-events.ts). The clue must make that legible via an
// explicit birth word, not just imply it through career facts — see "Person
// entries" in docs/event-writing-guide-v2.md. Place-as-subject clues ("this
// town saw the birth of...") need the noun forms too.
const BIRTH_SIGNAL_EN_RE = /\b(born|birth|birthplace)\b/i;
// French: only the accented "né/née/nés/nées" (never bare "ne", the
// negation), "naît"/"naquit"/"naître"/"naissance", and only as a whole word
// (not inside "connaît", "renaît", etc.) — \b doesn't work reliably around
// accented letters in JS regex, so boundaries are checked manually via
// lookaround.
const BIRTH_SIGNAL_FR_RE =
  /(^|[^a-zà-öø-ÿ])(née?s?|na[iî]t|naquit|na[iî]tre|naissance)(?![a-zà-öø-ÿ])/i;

// A hardcoded banned-word list can never enumerate every city, river,
// mountain range, sea, or desert on Earth that could serve as the easy-tier
// deduction lever ("the Volga", "Lake Titicaca", ...) — it's whack-a-mole
// against an open-ended category. Proper nouns are reliably marked by
// capitalization instead, so flag any capitalized word appearing after the
// first word of a clue (which is always capitalized as a sentence-starter)
// as a likely-unvetted proper noun. This is much stricter than the word
// lists above, which is the point: it catches leaks nobody thought to list
// ahead of time — including a country name too obscure to be in
// BANNED_ALWAYS_WORDS.
//
// Two exception sets, because "is this OK?" depends on the tier:
// - CAPITALIZED_WORD_EXCEPTIONS: words that are NOT geographic at all and
//   don't leak the map answer at any tier (identity/era descriptors, not
//   place names). Only add a word here after confirming by hand that it
//   doesn't reveal location for ANY entry, easy or not.
// - EASY_PROPER_NOUN_EXCEPTIONS: real proper nouns (a city, river,
//   mountain, monument...) confirmed to be a deliberate easy-tier
//   deduction lever, not a bare country name. These only bypass the check
//   for `difficulty: "easy"` entries — the same word in a medium/hard clue
//   still gets flagged, because those tiers allow no proper noun at all.
const CAPITALIZED_WORD_EXCEPTIONS = new Set([
  "earth", "terre", "west", "occident", "jewish", "juif", "juive",
  "holocaust", "holocauste", "nazi", "nazis", "black", "noire", "noir",
  "indies", "indes", "antiquity", "antiquité", "mars",
  "nobel", "prize", "protestant", "protestante", "catholic", "catholique",
  "olympic", "olympics", "olympiques", "hindu", "buddhist", "games",
  "river", "peninsula", "state", "jeux", "état", "southern", "cold",
  "hemisphere", "war", "mountain", "mountains", "gulf",
  "indigenous", "autochtones", "south", "sud", "pole",
  // Added for the 2026-09-24 100-clue batch: religious/cultural adjectives
  // and celestial bodies, neither of which narrow the map answer's location.
  "christian", "chrétien", "chrétienne", "moon", "lune",
  // Added for the 2026-09-25 easy batch: "World Wide Web" is a technology
  // name (not tied to any one country), and "Academy" refers to Plato's
  // school as an institution, not a place name — neither narrows the map
  // answer's location.
  "world", "wide", "web", "monde", "toile", "academy", "académie",
  // Added for the second 2026-09-25 easy batch: "Martians"/"Martiens" refers
  // to the fictional aliens from The War of the Worlds, not a real place —
  // doesn't narrow the map answer's location at any tier.
  "martians", "martian", "martiens", "martien",
  // Added for the second 2026-09-28 hard batch: "Literature"/"Littérature"
  // only ever appears here as part of "Nobel Prize in Literature" — an award
  // category name, not a place — so it doesn't narrow the map answer.
  "literature", "littérature",
  // Added for the 2026-10-01 non-person batches: a religious figure's name,
  // no more location-revealing than "christian" above.
  "jesus", "jésus",
  // Only appears in Attila's nickname, the scourge of God.
  "god", "dieu",
]);
const EASY_PROPER_NOUN_EXCEPTIONS = new Set([
  // Added for the 2026-10-05 person rewrites (iconic places): mountain range,
  // Rome's nickname, and Tierra del Fuego, none of them a country name.
  "pennines", "eternal", "city", "ville", "quaker", "land", "fire", "terre", "feu",
  // Added for the 2026-09-28 easy-clue disambiguation pass:
  "bach", "grimm", "brothers",
  "neva", "brussels", "bruxelles", "channel", "manche", "vienna", "vienne", "texas", "andes", "aztecs", "aztèques", "sea", "azov", "queen", "victoria", "carthage", "blitz", "island", "south", "sud", "silk", "road", "tang", "yellow", "river", "jaune", "rome", "naples", "adriatic", "adriatique", "midwest", "hanover", "hanovre", "wild", "west", "far", "elvis", "constantinople", "nobel", "prizes", "confucius", "way", "voie", "nile", "nil", "état", "shoguns", "pacific", "pacifique",
  "moravian", "moravie", "hollywood", "oxford", "himalayan", "sava", "save", "numidia", "numidie",
  "appalachian", "appalaches", "nineveh", "ninive", "punjab", "pendjab",
  "est", "grande", "guerre", "eastern", "bloc", "great", "war",
  "euphrates", "euphrate", "urubamba", "tōhoku", "catskill", "catskills",
  "baltic", "baltique", "tonlé", "tonle", "sap", "yucatán", "zagros",
  "dnieper", "dniepr", "irrawaddy", "cantabrian", "cantabriques",
  "himalaya", "himalayas", "saint", "lawrence", "laurent", "moselle",
  "nile", "nil", "rhine", "rhin", "mediterranean", "méditerranée", "volga",
  // Added for the 2026-09-24 batch (see docs/pool-stats.md history):
  "meuse", "atlantic", "atlantique", "caribbean", "caraïbes", "pacific", "pacifique",
  // Added for the 2026-09-25 easy batch (18 new person entries): Siberia
  // spans millions of km2 across multiple time zones, leaving real
  // uncertainty about the exact pin, same as Sahara/Andes/Himalaya above.
  "siberia", "siberian",
  // Added for the 2026-09-28 easy batch (10th batch, 20 new entries): the
  // Danube runs ~2,850 km through ten countries (easy-tier lever for the
  // Belgrade siege entry); the Urals run ~2,500 km and form the traditional
  // Europe/Asia boundary (easy-tier lever for the Romanov execution entry) —
  // both leave real uncertainty about the exact pin, same as Volga/Nile above.
  "danube", "ural", "urals", "oural",
  // Added for the 2026-10-01 non-person batches: the Red River runs ~1,150 km
  // from Yunnan through northern Vietnam (and shares its name with a US
  // river), so it leaves real uncertainty about the exact pin.
  "red", "rouge",
  // The Atlas range runs ~2,500 km across three countries, the Apennines
  // ~1,200 km down a whole peninsula, the Dead Sea borders three territories,
  // and Lake Peipus straddles a national border: all leave real uncertainty
  // about the exact pin.
  "atlas", "apennines", "apennins", "dead", "morte", "lake", "peipus", "peïpous",
  // The Tagus runs ~1,000 km through two countries; the Sea of Marmara is
  // ~280 km long with dozens of coastal towns.
  "tagus", "tage", "marmara",
  // The Sahara spans ~9 million km2 across a dozen countries; the Alps span
  // eight countries; Hokkaido is an 83,000 km2 island; the Río de la Plata
  // estuary is shared by two countries.
  "sahara", "alps", "alpes", "hokkaido", "río", "rio", "plata",
  // The Dolomites cover ~140,000 ha of peaks; Crete is a 260 km-long island.
  "dolomites", "crete", "crète",
  // The Adirondacks cover ~25,000 km2; the Orontes runs ~570 km through
  // three countries.
  "adirondacks", "orontes", "oronte",
  // The Po runs ~650 km across a whole plain, the Tigris ~1,850 km through
  // two countries, and the Isonzo ~140 km across a national border.
  "po", "pô", "tigris", "tigre", "isonzo",
  // The Gila runs ~1,000 km, the Don ~1,870 km, and the Aegean borders two
  // countries and hundreds of islands.
  "gila", "don", "aegean", "égée",
  // The Dardanelles strait is ~60 km long between two continents.
  "dardanelles",
  // Added for the 2026-10-01 easy-lever rewrites (each passed the stripped-
  // text pin test): large rivers, bays, seas, ranges and a 117 km wall.
  "north", "nord", "scheldt", "escaut", "ohio", "main", "thames", "tamise",
  "hadrian", "hadrien", "alborz", "vistula", "vistule", "chesapeake",
  "wall", "bay",
  "anatolian", "appalachians", "bering", "douro", "emerald", "émeraude",
  "missouri", "ontario", "sibérie", "silicon", "virgin", "vierges",
  "yangtze", "yangzi", "mississippi", "isle", "strait", "béring", "islands", "valley",
  // Packs 15-21 rewrites (all passed the stripped-text pin test): a strait,
  // a 58,000 km2 lake, a 23,000 km2 inland sea, a 36,000 km2 island, the
  // ~930 km Ebro, regions of 70,000 / 342,000 / 19,000 km2, a multi-state
  // region, and a volcano seen across a whole plain.
  "bosphorus", "bosphore", "michigan", "seto", "kyushu", "ebro", "èbre",
  "bavarian", "bavière", "rajasthan", "picardy", "picardie", "northwest", "ouest",
  "mount", "fuji", "inland",
  // Packs 22-26 rewrites (same gate): the ~500 km Delaware, a 5,650 km2
  // lake, the ~370 km Chao Phraya, a 2.7 km strait, the Anatolian plateau,
  // and a 696,000 km2 state.
  "delaware", "vänern", "chao", "phraya", "golden", "gate", "anatolia", "anatolie", "texan",
  // Packs 27-31 rewrites (same gate): the 400 km Tiber, the ~2,100 km Orange and ~1,200 km Vaal,
  // the ~2,500 km Amu Darya and Ganges, the 3,000 km St. Lawrence, and the
  // 70,000 km2 / 87,000 km2 regions of Bavaria and Andalusia.
  "tiber", "tibre", "orange", "amu", "amou", "ganges", "gange", "st",
  "bavaria", "andalusia", "andalousie", "vaal", "darya", "daria",
  // Packs 32-36 rewrites (same gate): the ~550,000 km2 Balkan peninsula, the
  // ~780 km Seine, the ~1,500 km Oka, and an empire-wide adjective.
  "balkans", "seine", "oka", "aztec",
]);

function findCapitalizedLeak(clue, isEasy) {
  const words = clue.match(/[A-Za-zÀ-ÖØ-öø-ÿ]+/g) || [];
  for (let i = 1; i < words.length; i++) {
    const w = words[i];
    if (w.length <= 1) continue;
    if (!/^[A-ZÀ-Ý]/.test(w)) continue;
    const lower = w.toLowerCase();
    if (CAPITALIZED_WORD_EXCEPTIONS.has(lower)) continue;
    if (isEasy && EASY_PROPER_NOUN_EXCEPTIONS.has(lower)) continue;
    return w;
  }
  return null;
}

const BANNED_ALWAYS_WORDS_FR = [
  "romain", "romaine", "français", "française", "britannique", "perse", "grec",
  "grecque", "allemand", "allemande", "espagnol", "espagnole", "chinois",
  "chinoise", "japonais", "japonaise", "égyptien", "égyptienne", "russe",
  "américain", "américaine", "ottoman", "ottomane", "mongol", "mongole",
  "africain", "africaine", "européen", "européenne", "asiatique", "parisien",
  "parisienne", "anglais", "anglaise", "byzantin", "byzantine", "soviétique",
  "génois", "génoise", "inca", "maya", "mayas", "gothique", "italien", "italienne", "éthiopien",
  "éthiopienne", "indien", "indienne", "israélien", "israélienne",
  "arabe", "nordique", "scandinave", "balkanique", "ibérique", "slave",
  "tsar", "calife", "shogun", "pharaon",
  "viking", "normand", "normande", "celtique", "gaulois",
  "gauloise", "prussien", "prussienne",
  "finlande", "finlandais", "finlandaise", "indonésie", "indonésien",
  "indonésienne", "java", "javanais", "javanaise",
];
const BANNED_GEO_FEATURE_WORDS_FR = [
  "caraïbe", "méditerranéen", "méditerranéenne", "atlantique", "pacifique",
  "baltique", "sibérien", "sibérienne", "sahara", "andes", "himalaya", "alpes",
  "nil", "rhin", "danube", "amazone", "normandie",
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

function extractBoolField(block, field) {
  const re = new RegExp(`${field}:\\s*(true|false)\\b`);
  const m = block.match(re);
  return m ? m[1] === "true" : null;
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
      pinIsBirthplace: extractBoolField(block, "pinIsBirthplace"),
      difficulty: extractField(block, "difficulty"),
      category: extractField(block, "category"),
      subcategory: extractField(block, "subcategory"),
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

  // Every entry in the active pool must explicitly say whether the map
  // answer is the subject's birthplace, and, when it is, the clue in BOTH
  // languages must carry a birth-signal word. See "Person entries" in
  // docs/event-writing-guide-v2.md.
  const VALID_DIFFICULTIES = new Set(["easy", "medium", "hard"]);
  const VALID_CATEGORIES = new Set(["conflict_politics_society", "arts_culture", "science_infrastructure"]);
  // Same keys as SUBCATEGORIES in scripts/fetch-candidates.mjs (plus the two
  // person-based ones). build-final-daily-packs.mjs keeps at most one event
  // per subcategory in a pack, so an untagged entry would slip past that rule.
  const VALID_SUBCATEGORIES = new Set(["war", "rupture", "treaty", "beliefs", "economy", "major_artist", "pioneer", "civil_engineering", "natural_hazard", "archaeological_site", "world_gathering"]);
  for (const [id, entry] of en) {
    if (entry.pinIsBirthplace == null) {
      violations.push({ id, field: "EN.pinIsBirthplace", issue: "missing or not a literal true/false — every active-pool entry must set this explicitly" });
    }
    if (!VALID_DIFFICULTIES.has(entry.difficulty)) {
      violations.push({ id, field: "EN.difficulty", issue: `missing or invalid (got ${JSON.stringify(entry.difficulty)}) — must be "easy", "medium", or "hard", chosen before drafting per docs/event-writing-guide-v2.md` });
    }
    if (!VALID_CATEGORIES.has(entry.category)) {
      violations.push({ id, field: "EN.category", issue: `missing or invalid (got ${JSON.stringify(entry.category)}) — must be "conflict_politics_society", "arts_culture", or "science_infrastructure"` });
    }
    if (!VALID_SUBCATEGORIES.has(entry.subcategory)) {
      violations.push({ id, field: "EN.subcategory", issue: `missing or invalid (got ${JSON.stringify(entry.subcategory)}) — copy it from the source candidate in data/candidates-*.json` });
    }
  }
  const birthplaceIds = new Set([...en].filter(([, e]) => e.pinIsBirthplace === true).map(([id]) => id));
  // "Writing to a target difficulty" in docs/event-writing-guide-v2.md: easy
  // still bans the country's own name/nationality adjective (checked via
  // BANNED_ALWAYS_WORDS for every entry, below), but lifts the ban on named
  // geographic/cultural proper nouns (a city, river, mountain...) that let
  // the player deduce the country instead of being told it. Medium/hard
  // allow no proper noun at all.
  const easyIds = new Set([...en].filter(([, e]) => e.difficulty === "easy").map(([id]) => id));

  function checkLang(entries, alwaysWords, geoFeatureWords, langLabel, birthSignalRe) {
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
        const isEasy = easyIds.has(id);
        const dateHit = findDateHit(clue);
        if (dateHit) violations.push({ id, field: `${langLabel}.clue`, issue: `contains a date/era (${dateHit})` });
        const alwaysHit = findBannedWord(clue, alwaysWords);
        if (alwaysHit) violations.push({ id, field: `${langLabel}.clue`, issue: `leaks the country via "${alwaysHit}" — never allowed, even at easy` });
        if (!isEasy) {
          const geoHit = findBannedWord(clue, geoFeatureWords);
          if (geoHit) violations.push({ id, field: `${langLabel}.clue`, issue: `leaks geography via "${geoHit}" — proper nouns are easy-tier only` });
        }
        const capHit = findCapitalizedLeak(clue, isEasy);
        if (capHit) {
          const guidance = isEasy
            ? `review, then either rewrite or add to EASY_PROPER_NOUN_EXCEPTIONS if it's confirmed to be a real proper noun (not the bare country name)`
            : `review, then either rewrite or add to CAPITALIZED_WORD_EXCEPTIONS if it's confirmed safe (medium/hard allow no proper noun at all)`;
          violations.push({ id, field: `${langLabel}.clue`, issue: `capitalized word "${capHit}" is likely an unvetted proper noun (place/name) — ${guidance}` });
        }
        if (EM_DASH_RE.test(clue)) violations.push({ id, field: `${langLabel}.clue`, issue: "contains an em dash (—) — never use one" });
        if (clue.length > MAX_CLUE_LENGTH) {
          violations.push({ id, field: `${langLabel}.clue`, issue: `too long for mobile (${clue.length} chars, max ${MAX_CLUE_LENGTH})` });
        }
        if (birthplaceIds.has(id) && !birthSignalRe.test(clue)) {
          violations.push({ id, field: `${langLabel}.clue`, issue: "pinIsBirthplace is true but the clue has no birth-signal word (\"born\"/\"né\"/\"naît\") — the player has no way to know the pin is a birthplace" });
        }
      }
      if (explanation != null) {
        const dateHit = findDateHit(explanation);
        if (dateHit) violations.push({ id, field: `${langLabel}.explanation`, issue: `contains a date/era (${dateHit})` });
        if (EM_DASH_RE.test(explanation)) violations.push({ id, field: `${langLabel}.explanation`, issue: "contains an em dash (—) — never use one" });
      }
    }
  }

  checkLang(en, BANNED_ALWAYS_WORDS_EN, BANNED_GEO_FEATURE_WORDS_EN, "EN", BIRTH_SIGNAL_EN_RE);
  checkLang(fr, BANNED_ALWAYS_WORDS_FR, BANNED_GEO_FEATURE_WORDS_FR, "FR", BIRTH_SIGNAL_FR_RE);

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
