// Active pool for the game (v2 guide). Starts empty after the v1 corpus was
// frozen into legacy-events.ts on 2026-09-19 — see docs/event-writing-guide-v2.md.
// Real version would extract this from Wikidata (P585/P580 for date, P625 for coordinates).
export type HistoricalEvent = {
  id: string;
  clue: string;
  name: string;
  explanation: string;
  year: number; // negative = BCE
  lat: number;
  lng: number;
  wikipediaTitle: string;
};

export const POC_EVENTS: HistoricalEvent[] = [
  {
    id: "pearl_harbor",
    clue: "A surprise air raid launched from aircraft carriers cripples a fleet moored in a harbor, pulling a neutral nation into a world war overnight.",
    name: "Attack on Pearl Harbor",
    explanation: "Japan launched a carrier-based air attack on the US Pacific Fleet at Pearl Harbor, Hawaii, killing over 2,400 people and bringing the United States into World War II the very next day.",
    year: 1941,
    lat: 21.365,
    lng: -157.95,
    wikipediaTitle: "Attack_on_Pearl_Harbor",
  },
  {
    id: "machu_picchu",
    clue: "Perched on a steep mountain ridge above a river canyon, a stone citadel of terraces and temples was built without mortar, iron tools, or wheels.",
    name: "Machu Picchu",
    explanation: "Machu Picchu, an Inca citadel perched high in the Peruvian mountains, was built using precise dry-stone construction without mortar and abandoned only decades after being completed, remaining unknown to the outside world for centuries before its rediscovery drew global attention.",
    year: 1450,
    lat: -13.163333,
    lng: -72.545556,
    wikipediaTitle: "Machu_Picchu",
  },
  {
    id: "woodstock",
    clue: "Half a million people gather on a dairy farm for three days of rain-soaked live music, becoming the defining symbol of a counterculture generation.",
    name: "Woodstock",
    explanation: "The Woodstock Music and Art Fair drew several hundred thousand attendees to a dairy farm in upstate New York over three days of rain and mud, becoming the emblematic event of the counterculture era.",
    year: 1969,
    lat: 41.7,
    lng: -74.88,
    wikipediaTitle: "Woodstock",
  },
  {
    id: "newton_gravity",
    clue: "On a small farm, a scientist is born prematurely; a falling apple there later sparked his thinking on gravity, laying the foundations of modern physics.",
    name: "Isaac Newton",
    explanation: "Isaac Newton was born prematurely at Woolsthorpe Manor in rural England and went on to publish the Principia Mathematica, formulating the laws of motion and universal gravitation that underpinned classical physics for centuries.",
    year: 1643,
    lat: 52.809167,
    lng: -0.630556,
    wikipediaTitle: "Isaac_Newton",
  },
  {
    id: "berne_convention",
    clue: "Ten countries meet in a small city to sign the first major treaty letting authors, composers, and artists control how their work is copied and translated.",
    name: "Berne Convention",
    explanation: "Delegates from ten European countries met in Bern, Switzerland, to sign the Berne Convention, the first major international treaty establishing copyright protections for literary and artistic works, still the basis of copyright law today.",
    year: 1886,
    lat: 46.94798,
    lng: 7.44743,
    wikipediaTitle: "Berne_Convention",
  },
  {
    id: "waterloo",
    clue: "Returning from exile, a general is decisively defeated in a single day when two armies converge against him, ending decades of war across an entire continent.",
    name: "Battle of Waterloo",
    explanation: "Napoleon Bonaparte, having escaped exile and returned to power in France, was decisively defeated near the village of Waterloo by a British-led army under Wellington and a Prussian army under Blücher, ending the Napoleonic Wars for good.",
    year: 1815,
    lat: 50.678056,
    lng: 4.412222,
    wikipediaTitle: "Battle_of_Waterloo",
  },
  {
    id: "giza_pyramid",
    clue: "The last of the ancient world's seven wonders still standing is a ruler's tomb, a huge stone pyramid aligned to the compass points with striking precision.",
    name: "Great Pyramid of Giza",
    explanation: "Built as a tomb for the pharaoh Khufu, the Great Pyramid of Giza is the only Wonder of the Ancient World still largely intact and remained the tallest human-made structure on Earth for millennia, despite being built with only copper and stone tools.",
    year: -2561,
    lat: 29.97915,
    lng: 31.13422,
    wikipediaTitle: "Great_Pyramid_of_Giza",
  },
  {
    id: "colosseum",
    clue: "An elliptical stone amphitheater built to seat tens of thousands once staged gladiator duels, animal hunts, and even mock naval battles as public spectacle.",
    name: "Colosseum",
    explanation: "The Colosseum in Rome, the largest amphitheater ever built in the ancient world, hosted gladiator contests and animal hunts, and in its early years staged mock naval battles by flooding the arena floor.",
    year: 82,
    lat: 41.890278,
    lng: 12.492222,
    wikipediaTitle: "Colosseum",
  },
  {
    id: "davinci",
    clue: "Born out of wedlock in a small hillside town, a self-taught painter and engineer filled notebooks with mirror-written notes on anatomy, flight, and hydraulics.",
    name: "Leonardo da Vinci",
    explanation: "Leonardo da Vinci was born in the Tuscan hill town of Vinci and became a painter, engineer, and scientist whose notebooks, written in mirror script, anticipated ideas in anatomy, engineering, and flight long before they were achievable.",
    year: 1452,
    lat: 43.799167,
    lng: 10.938133,
    wikipediaTitle: "Leonardo_da_Vinci",
  },
  {
    id: "treaty_london",
    clue: "A conference of the era's great powers produces a treaty guaranteeing a new kingdom's permanent neutrality, later invoked as one power's reason to go to war.",
    name: "Treaty of London",
    explanation: "The Treaty of London was signed by the major European powers, the Netherlands, and Belgium, guaranteeing Belgian independence and permanent neutrality, a guarantee Britain later cited as its reason for entering World War I after Germany invaded.",
    year: 1839,
    lat: 51.5072,
    lng: -0.1275,
    wikipediaTitle: "Treaty_of_London_(1839)",
  },
  {
    id: "angkor_wat",
    clue: "The world's largest religious complex uniquely faces west instead of east, unlike almost every temple of its kind, and appears on its nation's flag.",
    name: "Angkor Wat",
    explanation: "Angkor Wat, in Siem Reap, Cambodia, is a Hindu-Buddhist temple complex and the largest religious monument in the world. It was built by the Khmer king Suryavarman II as a temple to the Hindu god Vishnu, later evolved into a center of Buddhist worship, and today appears on Cambodia's national flag.",
    year: 1150,
    lat: 13.4125,
    lng: 103.866667,
    wikipediaTitle: "Angkor_Wat",
  },
  {
    id: "mali_coup_2020",
    clue: "Soldiers at a military base seized weapons and rolled into the capital, detaining the president, in the country's second coup in under a decade.",
    name: "Mali Coup d'État",
    explanation: "In Mali, soldiers at a military base near Bamako mutinied, seizing weapons and rolling into the capital in tanks and armored vehicles. They detained President Ibrahim Boubacar Keita, who resigned and dissolved the government hours later. It was the second time in less than ten years that Mali's government had been overthrown by its own military.",
    year: 2020,
    lat: 12.746667,
    lng: -8.071389,
    wikipediaTitle: "2020_Malian_coup_d'état",
  },
  {
    id: "elias_canetti",
    clue: "Born in a small river town to a merchant family, this writer adopted a language that wasn't his mother tongue and won a Nobel Prize for literature.",
    name: "Elias Canetti",
    explanation: "Elias Canetti was born in Ruse, a river port town, to a Sephardic Jewish merchant family that spoke Ladino at home. He later wrote almost entirely in German, a language he only began learning as a child, and won the Nobel Prize in Literature for works including the novel Auto-da-Fe and the study Crowds and Power.",
    year: 1905,
    lat: 43.844532,
    lng: 25.953907,
    wikipediaTitle: "Elias_Canetti",
  },
  {
    id: "tiwanaku",
    clue: "Beside one of the highest large lakes on the planet, a monumental stone city once housed up to 20,000 people, among the largest settlements of its time.",
    name: "Tiwanaku",
    explanation: "Tiwanaku, near Lake Titicaca in the Bolivian highlands, was a major pre-Columbian city built from massive fitted stone blocks. At its height, it was home to an estimated 10,000 to 20,000 people, among the largest urban populations in the Americas at the time.",
    year: 800,
    lat: -16.554722,
    lng: -68.673333,
    wikipediaTitle: "Tiwanaku",
  },
  {
    id: "klondike_gold_rush",
    clue: "News of gold in a remote northern valley triggered a stampede of 100,000 prospectors, each required to haul a year's supplies over a mountain pass.",
    name: "Klondike Gold Rush",
    explanation: "The Klondike Gold Rush drew an estimated 100,000 prospectors to the Yukon region of northwestern Canada after gold was discovered along a local creek. Canadian authorities required each prospector to carry roughly a ton of supplies over a mountain pass before entering the territory, and most who made the journey found little or no gold.",
    year: 1896,
    lat: 64.034917,
    lng: -139.285961,
    wikipediaTitle: "Klondike_Gold_Rush",
  },
  {
    id: "sudan_coup_2021",
    clue: "The military cut nationwide internet and dissolved the governing council, while the prime minister, who refused to back it, was placed under house arrest.",
    name: "Sudan Coup d'État",
    explanation: "In Sudan, the military, led by General Abdel Fattah al-Burhan, seized power and dissolved the Sovereignty Council. Prime Minister Abdalla Hamdok refused to endorse the takeover and called for popular resistance before being confined to house arrest, while internet access across the country was cut and officials, activists, and journalists were detained in secret locations.",
    year: 2021,
    lat: 15.502778,
    lng: 32.5625,
    wikipediaTitle: "2021_Sudanese_coup_d'état",
  },
  {
    id: "gateway_arch",
    clue: "Clad in stainless steel and shaped like the curve of a hanging chain, a monument became the world's tallest arch, built to mark an era of westward expansion.",
    name: "Gateway Arch",
    explanation: "The Gateway Arch, in St. Louis, Missouri, is a 630-foot stainless steel monument built in the shape of a weighted catenary, the curve formed by a hanging chain. It is the world's tallest arch and was built as a monument to the westward expansion of the United States, now a National Historic Landmark and a symbol of the city.",
    year: 1965,
    lat: 38.624611,
    lng: -90.184972,
    wikipediaTitle: "Gateway_Arch",
  },
  {
    id: "auguste_comte",
    clue: "Growing up in a southern town, this philosopher coined the term for the scientific study of society, calling it the crowning achievement of all science.",
    name: "Auguste Comte",
    explanation: "Auguste Comte was born in Montpellier and became a philosopher and writer who formulated the doctrine of positivism, often regarded as the first philosopher of science in the modern sense. He coined the term sociology and treated it as the crowning achievement of the sciences.",
    year: 1798,
    lat: 43.610919,
    lng: 3.877231,
    wikipediaTitle: "Auguste_Comte",
  },
  {
    id: "chiang_kaishek_memorial",
    clue: "A monument built under martial law to honor a former head of state now also serves as a place of remembrance for that same martial law period.",
    name: "Chiang Kai-shek Memorial Hall",
    explanation: "The Chiang Kai-shek Memorial Hall, in Taipei, Taiwan, is a national monument built during Taiwan's martial law period to honor Chiang Kai-shek, the former President of the Republic of China. In recent years, the site has also come to incorporate remembrance of that same martial law period.",
    year: 1980,
    lat: 25.034444,
    lng: 121.521667,
    wikipediaTitle: "Chiang_Kai-shek_Memorial_Hall",
  },
  {
    id: "first_council_nicaea",
    clue: "An emperor summoned bishops from his realm to one city to settle a fierce religious dispute, producing a creed still recited by millions today.",
    name: "First Council of Nicaea",
    explanation: "The First Council of Nicaea was a gathering of Christian bishops convened by the Roman emperor Constantine I in the city of Nicaea. Also known as the First Ecumenical Council, it resolved a major dispute over Christian doctrine and produced the Nicene Creed, still recited in Christian worship today.",
    year: 325,
    lat: 40.43,
    lng: 29.72,
    wikipediaTitle: "First_Council_of_Nicaea",
  },
];

export type GameMode = "daily" | "free";

export function pickRandomEvents(events: HistoricalEvent[], count: number, excludeIds: string[] = []): HistoricalEvent[] {
  const excluded = new Set(excludeIds);
  const pool = events.filter((e) => !excluded.has(e.id));
  // If exclusions would leave too few events to fill a round, ignore them
  // rather than block the game — repeats are a minor annoyance, an empty
  // pool isn't an option.
  const source = pool.length >= count ? pool : events;
  const shuffled = [...source];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

// Deterministic day-of-year seed (UTC) so every player gets the same shuffle
// on the same calendar day without any server round-trip.
function dailySeed(date: Date): number {
  const key = date.toISOString().slice(0, 10); // "YYYY-MM-DD"
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (Math.imul(hash, 31) + key.charCodeAt(i)) | 0;
  }
  return hash;
}

// xmur3-ish mix into mulberry32, seeded from dailySeed — good enough
// distribution for shuffling a few dozen events, not cryptographic.
function seededRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickDailyEvents(events: HistoricalEvent[], count: number, date: Date = new Date()): HistoricalEvent[] {
  const random = seededRandom(dailySeed(date));
  const shuffled = [...events];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
