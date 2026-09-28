import type { Lang } from "./i18n";

// "Ton parcours": every daily challenge played earns XP, which moves the
// player's pawn up a timeline of historical milestones (prehistory at the
// bottom, the future at the top). Deliberately separate from the per-game
// rank tiers in rank-icons.ts: the rank rates one game, the journey rewards
// coming back. XP never goes down; the streak only speeds it up.

type Localized = Record<Lang, string>;

export type EraKey = "prehistory" | "antiquity" | "middleAges" | "earlyModern" | "c19" | "c20" | "future";

export const ERA_LABELS: Record<EraKey, Localized> = {
  prehistory: { fr: "Préhistoire", en: "Prehistory" },
  antiquity: { fr: "Antiquité", en: "Antiquity" },
  middleAges: { fr: "Moyen Âge", en: "Middle Ages" },
  earlyModern: { fr: "Temps modernes", en: "Early modern era" },
  c19: { fr: "XIXe siècle", en: "19th century" },
  c20: { fr: "XXe-XXIe siècle", en: "20th-21st century" },
  future: { fr: "Futur", en: "Future" },
};

export type Milestone = { xp: number; icon: string; label: Localized; date: Localized; era: EraKey };

// Icons are game-icons.net SVGs (CC BY 3.0, same collection as the rank
// icons) in public/icons/milestones/, background square removed so they can
// be tinted through a CSS mask (see MilestoneIcon).
const RAW_MILESTONES: [icon: string, label: Localized, date: Localized, era: EraKey][] = [
  ["caveman", { fr: "Départ", en: "Start" }, { fr: "", en: "" }, "prehistory"],
  ["campfire", { fr: "Maîtrise du feu", en: "Mastering fire" }, { fr: "vers -400 000", en: "c. 400,000 BC" }, "prehistory"],
  ["tombstone", { fr: "Sépultures", en: "Burials" }, { fr: "vers -100 000", en: "c. 100,000 BC" }, "prehistory"],
  ["bison", { fr: "Art pariétal", en: "Cave art" }, { fr: "vers -36 000", en: "c. 36,000 BC" }, "prehistory"],
  ["wheat", { fr: "Agriculture", en: "Farming" }, { fr: "vers -10 000", en: "c. 10,000 BC" }, "prehistory"],
  ["cartwheel", { fr: "La roue", en: "The wheel" }, { fr: "vers -3 500", en: "c. 3500 BC" }, "prehistory"],
  ["quill-ink", { fr: "Écriture", en: "Writing" }, { fr: "vers -3 300", en: "c. 3300 BC" }, "antiquity"],
  ["axe-sword", { fr: "Âge du bronze", en: "Bronze Age" }, { fr: "vers -3 000", en: "c. 3000 BC" }, "antiquity"],
  ["egyptian-pyramids", { fr: "Pyramides de Gizeh", en: "Pyramids of Giza" }, { fr: "vers -2 560", en: "c. 2560 BC" }, "antiquity"],
  ["menhir", { fr: "Stonehenge", en: "Stonehenge" }, { fr: "vers -2 500", en: "c. 2500 BC" }, "antiquity"],
  ["stone-tablet", { fr: "Code d'Hammurabi", en: "Code of Hammurabi" }, { fr: "vers -1 750", en: "c. 1750 BC" }, "antiquity"],
  ["anvil", { fr: "Âge du fer", en: "Iron Age" }, { fr: "vers -1 200", en: "c. 1200 BC" }, "antiquity"],
  ["scroll-unfurled", { fr: "Alphabet", en: "Alphabet" }, { fr: "vers -1 050", en: "c. 1050 BC" }, "antiquity"],
  ["two-coins", { fr: "Monnaie", en: "Coinage" }, { fr: "vers -600", en: "c. 600 BC" }, "antiquity"],
  ["greek-temple", { fr: "Démocratie athénienne", en: "Athenian democracy" }, { fr: "-508", en: "508 BC" }, "antiquity"],
  ["defensive-wall", { fr: "Grande Muraille", en: "Great Wall" }, { fr: "-220", en: "220 BC" }, "antiquity"],
  ["coliseum", { fr: "Colisée", en: "Colosseum" }, { fr: "80", en: "AD 80" }, "antiquity"],
  ["papyrus", { fr: "Papier", en: "Paper" }, { fr: "vers 105", en: "c. AD 105" }, "antiquity"],
  ["abacus", { fr: "Le zéro", en: "Zero" }, { fr: "vers 500", en: "c. 500" }, "middleAges"],
  ["drakkar", { fr: "Vikings", en: "Vikings" }, { fr: "vers 800", en: "c. 800" }, "middleAges"],
  ["powder-bag", { fr: "Poudre à canon", en: "Gunpowder" }, { fr: "vers 850", en: "c. 850" }, "middleAges"],
  ["compass", { fr: "Boussole", en: "Compass" }, { fr: "XIe siècle", en: "11th century" }, "middleAges"],
  ["castle", { fr: "Châteaux forts", en: "Castles" }, { fr: "XIe siècle", en: "11th century" }, "middleAges"],
  ["church", { fr: "Cathédrales gothiques", en: "Gothic cathedrals" }, { fr: "XIIe siècle", en: "12th century" }, "middleAges"],
  ["wax-seal", { fr: "Magna Carta", en: "Magna Carta" }, { fr: "1215", en: "1215" }, "middleAges"],
  ["book-cover", { fr: "Imprimerie", en: "Printing press" }, { fr: "vers 1450", en: "c. 1450" }, "middleAges"],
  ["caravel", { fr: "Grandes découvertes", en: "Age of Discovery" }, { fr: "1492", en: "1492" }, "earlyModern"],
  ["vitruvian-man", { fr: "Renaissance", en: "Renaissance" }, { fr: "vers 1500", en: "c. 1500" }, "earlyModern"],
  ["telescope", { fr: "Lunette de Galilée", en: "Galileo's telescope" }, { fr: "1609", en: "1609" }, "earlyModern"],
  ["crown", { fr: "Versailles", en: "Versailles" }, { fr: "1682", en: "1682" }, "earlyModern"],
  ["shiny-apple", { fr: "Gravitation de Newton", en: "Newton's gravity" }, { fr: "1687", en: "1687" }, "earlyModern"],
  ["air-balloon", { fr: "Montgolfière", en: "Hot-air balloon" }, { fr: "1783", en: "1783" }, "earlyModern"],
  ["scales", { fr: "Déclaration des droits de l'homme", en: "Rights of Man" }, { fr: "1789", en: "1789" }, "earlyModern"],
  ["syringe", { fr: "Vaccin", en: "Vaccine" }, { fr: "1796", en: "1796" }, "earlyModern"],
  ["steam-locomotive", { fr: "Chemin de fer", en: "Railway" }, { fr: "1829", en: "1829" }, "c19"],
  ["photo-camera", { fr: "Photographie", en: "Photography" }, { fr: "1839", en: "1839" }, "c19"],
  ["rotary-phone", { fr: "Téléphone", en: "Telephone" }, { fr: "1876", en: "1876" }, "c19"],
  ["light-bulb", { fr: "Ampoule électrique", en: "Light bulb" }, { fr: "1879", en: "1879" }, "c19"],
  ["city-car", { fr: "Automobile", en: "Automobile" }, { fr: "1886", en: "1886" }, "c19"],
  ["film-projector", { fr: "Cinéma", en: "Cinema" }, { fr: "1895", en: "1895" }, "c19"],
  ["biplane", { fr: "Aviation", en: "Aviation" }, { fr: "1903", en: "1903" }, "c20"],
  ["pill", { fr: "Pénicilline", en: "Penicillin" }, { fr: "1928", en: "1928" }, "c20"],
  ["atom", { fr: "L'atome", en: "The atom" }, { fr: "1938", en: "1938" }, "c20"],
  ["pc", { fr: "Ordinateur", en: "Computer" }, { fr: "1946", en: "1946" }, "c20"],
  ["lunar-module", { fr: "Premier pas sur la Lune", en: "Moon landing" }, { fr: "1969", en: "1969" }, "c20"],
  ["wireframe-globe", { fr: "Internet", en: "Internet" }, { fr: "1990", en: "1990" }, "c20"],
  ["smartphone", { fr: "Smartphone", en: "Smartphone" }, { fr: "2007", en: "2007" }, "c20"],
  ["processor", { fr: "Intelligence artificielle", en: "Artificial intelligence" }, { fr: "2022", en: "2022" }, "c20"],
  ["spaceship", { fr: "Le futur", en: "The future" }, { fr: "?", en: "?" }, "future"],
];

// Thresholds in games played: the first three come quickly (1, 3, 6) so a new
// player sees milestones in their first week, then gaps grow linearly from 4
// to 7 games, putting the future about a year out for someone playing five
// days a week.
const XP_PER_GAME = 150;
const FIRST_GAMES = [0, 1, 3, 6];
const MIN_GAP = 4;
const MAX_GAP = 7;

function milestoneGames(): number[] {
  const games = [...FIRST_GAMES];
  const remaining = RAW_MILESTONES.length - FIRST_GAMES.length;
  for (let k = 0; k < remaining; k++) {
    const gap = Math.round(MIN_GAP + ((MAX_GAP - MIN_GAP) * k) / Math.max(1, remaining - 1));
    games.push(games[games.length - 1] + gap);
  }
  return games;
}

const GAMES = milestoneGames();

export const MILESTONES: Milestone[] = RAW_MILESTONES.map(([icon, label, date, era], i) => ({
  xp: GAMES[i] * XP_PER_GAME,
  icon,
  label,
  date,
  era,
}));

// Index of the last milestone reached at this XP.
export function segmentIndex(xp: number): number {
  let i = 0;
  while (i < MILESTONES.length - 1 && MILESTONES[i + 1].xp <= xp) i++;
  return i;
}

// How far (0-100) this XP is between milestone `seg` and the next one.
export function pctInSegment(xp: number, seg: number): number {
  const cur = MILESTONES[seg];
  const next = MILESTONES[seg + 1];
  if (!next) return 100;
  return Math.min(100, ((xp - cur.xp) / (next.xp - cur.xp)) * 100);
}

const BASE_XP = 100;
const MAX_SCORE_BONUS = 50;
const STREAK_PCT_PER_DAY = 10;
export const MAX_STREAK_PCT = 50;

function streakPct(daysBeforeToday: number): number {
  return Math.min(Math.max(daysBeforeToday, 0) * STREAK_PCT_PER_DAY, MAX_STREAK_PCT);
}

export type XpGain = {
  base: number;
  scoreBonus: number;
  streakPct: number;
  streakBonus: number;
  total: number;
  // Streak bonus the player gets if they come back tomorrow.
  tomorrowPct: number;
};

// `streak` is the current streak including today's game (so the first day
// of a streak earns no bonus, the second +10%, capped at +50%).
export function computeXpGain(scoreRatio: number, streak: number): XpGain {
  const scoreBonus = Math.round(MAX_SCORE_BONUS * Math.min(Math.max(scoreRatio, 0), 1));
  const pct = streakPct(streak - 1);
  const streakBonus = Math.round(((BASE_XP + scoreBonus) * pct) / 100);
  return {
    base: BASE_XP,
    scoreBonus,
    streakPct: pct,
    streakBonus,
    total: BASE_XP + scoreBonus + streakBonus,
    tomorrowPct: streakPct(streak),
  };
}
