import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ACTIVE_EVENTS } from "@/lib/event-pool";
import { localizeEvent } from "@/lib/localize";
import { MAX_LOCATION_POINTS, MISS_RATIO } from "@/lib/scoring";
import { PANEL, GHOST_BUTTON, PRIMARY_BUTTON } from "@/lib/theme";

// Clue stats: patterns for the clue pipeline, not a per-clue scoreboard.
//
// clue_stats holds one counter row per (clue, language), fed by api/guess
// with each device's first attempt only, so storage stays flat however many
// people play. A daily clue is served once, so fixing one clue is worth
// little; this tab groups the counters by event traits (tier, theme, pin
// type, era, region, language) to spot what the generation gets wrong.

// A group below this many attempts isn't shown: too noisy to act on.
const MIN_GROUP_ATTEMPTS = 20;
// Concrete examples under the patterns: the worst clues with at least this
// many attempts.
const MIN_EXAMPLE_ATTEMPTS = 5;
const EXAMPLE_COUNT = 10;

export type Difficulty = "easy" | "medium" | "hard";
const DIFFICULTY_LABEL: Record<Difficulty, string> = { easy: "Facile", medium: "Moyen", hard: "Difficile" };
const CATEGORY_LABEL: Record<string, string> = {
  conflict_politics_society: "Conflits, politique, société",
  arts_culture: "Arts et culture",
  science_infrastructure: "Sciences et infrastructures",
};

function eraOf(year: number): string {
  if (year < -3000) return "1. Préhistoire";
  if (year < 500) return "2. Antiquité";
  if (year < 1500) return "3. Moyen Âge";
  if (year < 1800) return "4. Époque moderne";
  if (year < 1945) return "5. 1800–1945";
  return "6. Après 1945";
}

// Rough boxes, good enough to see a regional trend; not a geocoder.
function regionOf(lat: number, lng: number): string {
  if (lng < -30) return lat >= 25 ? "Amérique du Nord" : "Amérique latine";
  if (lng > 110 && lat < -10) return "Océanie";
  if (lat >= 36 && lng >= -25 && lng <= 40) return "Europe";
  if (lat >= 12 && lat <= 42 && lng >= -18 && lng <= 63) return "Afrique du Nord, Moyen-Orient";
  if (lat < 12 && lng >= -20 && lng <= 55) return "Afrique subsaharienne";
  return "Asie";
}

type ClueRow = { eventId: string; lang: string; attempts: number; pointsSum: number; misses: number };

async function loadClueRows(): Promise<ClueRow[] | null> {
  const rows: ClueRow[] = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from("clue_stats")
      .select("event_id, lang, attempts, points_sum, misses")
      .range(from, from + PAGE - 1);
    if (error) return null;
    for (const r of data) {
      rows.push({ eventId: r.event_id, lang: r.lang, attempts: r.attempts, pointsSum: r.points_sum, misses: r.misses });
    }
    if (data.length < PAGE) break;
  }
  return rows;
}

type Traits = Record<"difficulty" | "pin" | "category" | "subcategory" | "era" | "region" | "lang", string>;
type Group = { label: string; attempts: number; avgPoints: number; missRate: number };

function groupBy(rows: (ClueRow & { traits: Traits })[], dimension: keyof Traits): Group[] {
  const acc = new Map<string, { attempts: number; pointsSum: number; misses: number }>();
  for (const r of rows) {
    const key = r.traits[dimension];
    const g = acc.get(key) ?? { attempts: 0, pointsSum: 0, misses: 0 };
    g.attempts += r.attempts;
    g.pointsSum += r.pointsSum;
    g.misses += r.misses;
    acc.set(key, g);
  }
  return [...acc]
    .filter(([, g]) => g.attempts >= MIN_GROUP_ATTEMPTS)
    .map(([label, g]) => ({
      label,
      attempts: g.attempts,
      avgPoints: Math.round(g.pointsSum / g.attempts),
      missRate: Math.round((g.misses / g.attempts) * 100),
    }))
    .sort((a, b) => a.avgPoints - b.avgPoints);
}

const DIMENSIONS: { key: keyof Traits; title: string }[] = [
  { key: "difficulty", title: "Par niveau" },
  { key: "pin", title: "Par type d'épingle" },
  { key: "category", title: "Par catégorie" },
  { key: "subcategory", title: "Par sous-catégorie" },
  { key: "era", title: "Par époque" },
  { key: "region", title: "Par région (approx.)" },
  { key: "lang", title: "Par langue" },
];

function TierFilter({ active }: { active: Difficulty | null }) {
  const options: [Difficulty | null, string][] = [
    [null, "Tous"],
    ["easy", "Faciles"],
    ["medium", "Moyens"],
    ["hard", "Difficiles"],
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(([value, label]) => (
        <Link
          key={label}
          href={`/dashboard?tab=clues${value ? `&tier=${value}` : ""}`}
          className={(active === value ? PRIMARY_BUTTON : GHOST_BUTTON) + " text-[10px] sm:text-xs"}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default async function CluesTab({ tier }: { tier: Difficulty | null }) {
  const raw = await loadClueRows();
  if (!raw) return <p className="text-white/50">Impossible de charger la table clue_stats.</p>;

  const rows = raw.flatMap((r) => {
    const event = ACTIVE_EVENTS.find((e) => e.id === r.eventId);
    if (!event) return [];
    const traits: Traits = {
      difficulty: event.difficulty ? DIFFICULTY_LABEL[event.difficulty] : "?",
      pin: event.pinIsBirthplace ? "Lieu de naissance (personnes)" : "Lieu de l'événement",
      category: event.category ? CATEGORY_LABEL[event.category] : "?",
      subcategory: event.subcategory ?? "?",
      era: eraOf(event.year),
      region: regionOf(event.lat, event.lng),
      lang: r.lang.toUpperCase(),
    };
    return [{ ...r, traits, event }];
  });
  const filtered = tier ? rows.filter((r) => r.event.difficulty === tier) : rows;

  const attempts = filtered.reduce((s, r) => s + r.attempts, 0);
  const overall = attempts ? Math.round(filtered.reduce((s, r) => s + r.pointsSum, 0) / attempts) : 0;

  const examples = filtered
    .filter((r) => r.attempts >= MIN_EXAMPLE_ATTEMPTS)
    .map((r) => ({ ...r, avgPoints: Math.round(r.pointsSum / r.attempts) }))
    .sort((a, b) => a.avgPoints - b.avgPoints)
    .slice(0, EXAMPLE_COUNT);

  return (
    <>
      <section className={PANEL + " flex flex-col gap-3 px-4 py-4"}>
        <TierFilter active={tier} />
        <div className="flex items-baseline justify-between gap-2 text-sm">
          <span className="text-white/60">Tentatives comptées</span>
          <span className="font-semibold text-white">{attempts}</span>
        </div>
        <div className="flex items-baseline justify-between gap-2 text-sm">
          <span className="text-white/60">Points moyens</span>
          <span className="font-semibold text-white">
            {overall} / {MAX_LOCATION_POINTS}
          </span>
        </div>
        <p className="text-xs text-white/40">
          Première tentative de chaque appareil uniquement. Un groupe n&rsquo;apparaît qu&rsquo;à partir de{" "}
          {MIN_GROUP_ATTEMPTS} tentatives. Écart en rouge : plus de 10 % sous la moyenne. « Ratés » = moins de{" "}
          {Math.round(MISS_RATIO * 100)} % des points (mauvaise région).
        </p>
      </section>

      {DIMENSIONS.filter((d) => !(tier && d.key === "difficulty")).map((d) => {
        const groups = groupBy(filtered, d.key);
        if (groups.length === 0) return null;
        return (
          <section key={d.key} className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
            <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">{d.title}</h2>
            {groups.map((g) => {
              const gap = g.avgPoints - overall;
              const low = gap < -MAX_LOCATION_POINTS * 0.1;
              return (
                <div key={g.label} className="flex flex-col gap-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm text-white/80">
                      {g.label} <span className="text-xs text-white/40">({g.attempts})</span>
                    </span>
                    <span className="shrink-0 text-xs text-white/50">
                      {g.missRate} % ratés ·{" "}
                      <span className={low ? "font-semibold text-rose-400" : "text-amber-300"}>
                        {g.avgPoints} ({gap >= 0 ? "+" : ""}
                        {gap})
                      </span>
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-sm bg-white/5">
                    <div
                      className="h-full bg-amber-400/70"
                      style={{ width: `${Math.round((g.avgPoints / MAX_LOCATION_POINTS) * 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}

      <details className={PANEL + " px-4 py-4"}>
        <summary className="cursor-pointer text-xs font-bold uppercase tracking-wide text-white/50">
          Exemples : les {EXAMPLE_COUNT} énigmes les plus ratées (≥ {MIN_EXAMPLE_ATTEMPTS} tentatives)
        </summary>
        {examples.length === 0 ? (
          <p className="mt-2 text-sm text-white/40">Pas encore assez de tentatives par énigme.</p>
        ) : (
          examples.map((r) => {
            const local = localizeEvent(r.event, r.lang === "fr" ? "fr" : "en");
            return (
              <div key={r.eventId + r.lang} className="mt-3 flex flex-col gap-0.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-semibold text-white">
                    {local.name}{" "}
                    <span className="text-xs font-normal text-white/40">
                      {r.traits.difficulty} · {r.traits.lang} · {r.attempts} tent.
                    </span>
                  </span>
                  <span className="shrink-0 text-sm text-amber-300">{r.avgPoints}</span>
                </div>
                <p className="text-xs italic text-white/60">{local.clue}</p>
              </div>
            );
          })
        )}
      </details>
    </>
  );
}
