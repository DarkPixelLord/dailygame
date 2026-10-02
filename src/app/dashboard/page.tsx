import Link from "next/link";
import { isDashboardAuthed } from "@/lib/dashboard-auth";
import { supabase } from "@/lib/supabase";
import { MAX_LOCATION_POINTS, type RankTier } from "@/lib/scoring";
import { POC_EVENTS } from "@/lib/poc-events";
import { ACTIVE_EVENTS } from "@/lib/event-pool";
import { localizeEvent } from "@/lib/localize";
import DAILY_PACKS_PLAN from "../../../data/daily-packs-plan.json";
import LoginForm from "./LoginForm";
import LineChart from "./LineChart";
import TierBreakdown, { TIER_ORDER } from "./TierBreakdown";
import { logoutAction } from "./actions";
import { PANEL, GHOST_BUTTON, PRIMARY_BUTTON, GAME_TITLE } from "@/lib/theme";

export const dynamic = "force-dynamic";

type Tab = "daily" | "streak" | "archive" | "content" | "clues";
type TierRange = "today" | "60d";

const HISTORY_DAYS = 60;

function cutoffDate(): string {
  const cutoff = new Date();
  cutoff.setUTCDate(cutoff.getUTCDate() - HISTORY_DAYS);
  return cutoff.toISOString().slice(0, 10);
}

function todayDate(): string {
  return new Date().toISOString().slice(0, 10);
}

async function loadDailyStats() {
  const { data, error } = await supabase
    .from("daily_scores")
    .select("played_at, score")
    .gte("played_at", cutoffDate())
    .order("played_at", { ascending: true });

  if (error || !data) return null;

  const byDay = new Map<string, { count: number; scoreSum: number }>();
  for (const row of data) {
    const day = byDay.get(row.played_at) ?? { count: 0, scoreSum: 0 };
    day.count += 1;
    day.scoreSum += row.score;
    byDay.set(row.played_at, day);
  }

  return {
    playersPerDay: [...byDay.entries()].map(([label, d]) => ({ label, value: d.count })),
    avgScorePerDay: [...byDay.entries()].map(([label, d]) => ({ label, value: Math.round(d.scoreSum / d.count) })),
  };
}

// free_mode_plays predates the "archive" rename — table name kept as-is to
// avoid a migration, but it's the archive activity log now.
async function loadArchiveStats() {
  const { data, error } = await supabase
    .from("free_mode_plays")
    .select("played_at, score")
    .gte("played_at", cutoffDate())
    .order("played_at", { ascending: true });

  if (error || !data) return null;

  const byDay = new Map<string, { count: number; scoreSum: number }>();
  for (const row of data) {
    const day = byDay.get(row.played_at) ?? { count: 0, scoreSum: 0 };
    day.count += 1;
    day.scoreSum += row.score;
    byDay.set(row.played_at, day);
  }

  return {
    playsPerDay: [...byDay.entries()].map(([label, d]) => ({ label, value: d.count })),
    avgScorePerDay: [...byDay.entries()].map(([label, d]) => ({ label, value: Math.round(d.scoreSum / d.count) })),
  };
}

function isNextCalendarDay(prev: string, day: string): boolean {
  const d = new Date(`${prev}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10) === day;
}

// D+1 retention: of the devices that played on day D-1, what share came
// back on day D. Needs no new tracking — device_id is already stored per
// row in daily_scores (unique per device+day, see api/finish) purely to
// dedupe score submissions; this just re-reads it as a cohort.
// Fetches one extra day before the display cutoff so the first displayed
// day still has a previous-day cohort to compare against.
async function loadRetentionStats() {
  const extendedCutoff = (() => {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - (HISTORY_DAYS + 1));
    return d.toISOString().slice(0, 10);
  })();

  const { data, error } = await supabase
    .from("daily_scores")
    .select("played_at, device_id")
    .gte("played_at", extendedCutoff)
    .order("played_at", { ascending: true });

  if (error || !data) return null;

  const devicesByDay = new Map<string, Set<string>>();
  for (const row of data) {
    const set = devicesByDay.get(row.played_at) ?? new Set<string>();
    set.add(row.device_id);
    devicesByDay.set(row.played_at, set);
  }

  const days = [...devicesByDay.keys()].sort();
  const cutoff = cutoffDate();
  const points: { label: string; value: number }[] = [];
  for (let i = 1; i < days.length; i++) {
    const prevDay = days[i - 1];
    const day = days[i];
    if (day < cutoff || !isNextCalendarDay(prevDay, day)) continue;
    const prevSet = devicesByDay.get(prevDay)!;
    if (prevSet.size === 0) continue;
    const set = devicesByDay.get(day)!;
    let returning = 0;
    for (const id of prevSet) if (set.has(id)) returning += 1;
    points.push({ label: day, value: Math.round((returning / prevSet.size) * 100) });
  }

  return points;
}

const STREAK_BUCKET_ORDER = ["30j+", "14-29j", "7-13j", "4-6j", "2-3j", "1j"] as const;

function bucketStreak(streak: number): (typeof STREAK_BUCKET_ORDER)[number] {
  if (streak >= 30) return "30j+";
  if (streak >= 14) return "14-29j";
  if (streak >= 7) return "7-13j";
  if (streak >= 4) return "4-6j";
  if (streak >= 2) return "2-3j";
  return "1j";
}

// Streak isn't stored anywhere server-side — the client keeps it in
// localStorage only (see lib/daily-streak.ts) and never sends it over. But
// it's fully derivable from daily_scores: device_id + played_at already
// record exactly which days each device played, which is all a streak is.
// Pulls the full history rather than a rolling window, since a streak's
// length depends on the whole run, not just the last HISTORY_DAYS.
async function loadStreakStats() {
  const { data, error } = await supabase
    .from("daily_scores")
    .select("played_at, device_id")
    .order("played_at", { ascending: true });

  if (error || !data) return null;

  const daysByDevice = new Map<string, string[]>();
  for (const row of data) {
    const list = daysByDevice.get(row.device_id) ?? [];
    list.push(row.played_at);
    daysByDevice.set(row.device_id, list);
  }

  const today = todayDate();
  const yesterday = (() => {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - 1);
    return d.toISOString().slice(0, 10);
  })();

  let maxStreakEver = 0;
  const activeStreaks: number[] = [];

  // Rows come back ordered by played_at, and a device has at most one row
  // per day (unique constraint), so each list is already an ascending,
  // deduped list of that device's play days.
  for (const days of daysByDevice.values()) {
    let runLength = 0;
    let prevDay: string | null = null;
    for (const day of days) {
      runLength = prevDay && isNextCalendarDay(prevDay, day) ? runLength + 1 : 1;
      if (runLength > maxStreakEver) maxStreakEver = runLength;
      prevDay = day;
    }
    const lastPlayedDay = days[days.length - 1];
    if (lastPlayedDay === today || lastPlayedDay === yesterday) activeStreaks.push(runLength);
  }

  const bucketCounts = new Map<string, number>(STREAK_BUCKET_ORDER.map((b) => [b, 0]));
  for (const s of activeStreaks) bucketCounts.set(bucketStreak(s), (bucketCounts.get(bucketStreak(s)) ?? 0) + 1);

  const avgActiveStreak = activeStreaks.length
    ? Math.round((activeStreaks.reduce((a, b) => a + b, 0) / activeStreaks.length) * 10) / 10
    : 0;

  return {
    maxStreakEver,
    avgActiveStreak,
    activeCount: activeStreaks.length,
    loyalCount: activeStreaks.filter((s) => s >= 7).length,
    buckets: STREAK_BUCKET_ORDER.map((label) => ({ label, count: bucketCounts.get(label) ?? 0 })),
  };
}

// Tier breakdown is loaded separately from the per-day charts above: the
// charts always show the full HISTORY_DAYS trend, while this block is what
// the today/60d range selector toggles — the two shouldn't be coupled to
// the same query.
async function loadTierBreakdown(table: "daily_scores" | "free_mode_plays", range: TierRange) {
  const query = supabase.from(table).select("tier");
  const { data, error } =
    range === "today" ? await query.eq("played_at", todayDate()) : await query.gte("played_at", cutoffDate());

  if (error || !data) return null;

  const tierCounts = Object.fromEntries(TIER_ORDER.map((t) => [t, 0])) as Record<RankTier, number>;
  for (const row of data) {
    if (row.tier && row.tier in tierCounts) tierCounts[row.tier as RankTier] += 1;
  }
  return { tierCounts, total: data.length };
}

function Tabs({ active }: { active: Tab }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/dashboard?tab=daily" className={active === "daily" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Défi du jour
      </Link>
      <Link href="/dashboard?tab=streak" className={active === "streak" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Streak
      </Link>
      <Link href="/dashboard?tab=archive" className={active === "archive" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Archive
      </Link>
      <Link href="/dashboard?tab=content" className={active === "content" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Contenu
      </Link>
      <Link href="/dashboard?tab=clues" className={active === "clues" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Énigmes
      </Link>
    </div>
  );
}

function RangeSelector({ tab, active }: { tab: Tab; active: TierRange }) {
  return (
    <div className="flex gap-2">
      <Link
        href={`/dashboard?tab=${tab}&range=today`}
        className={(active === "today" ? PRIMARY_BUTTON : GHOST_BUTTON) + " text-[10px] sm:text-xs"}
      >
        Aujourd&rsquo;hui
      </Link>
      <Link
        href={`/dashboard?tab=${tab}&range=60d`}
        className={(active === "60d" ? PRIMARY_BUTTON : GHOST_BUTTON) + " text-[10px] sm:text-xs"}
      >
        60 derniers jours
      </Link>
    </div>
  );
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; range?: string }>;
}) {
  const authed = await isDashboardAuthed();
  if (!authed) return <LoginForm />;

  const { tab, range } = await searchParams;
  const activeTab: Tab =
    tab === "streak"
      ? "streak"
      : tab === "archive"
        ? "archive"
        : tab === "content"
          ? "content"
          : tab === "clues"
            ? "clues"
            : "daily";
  const activeRange: TierRange = range === "60d" ? "60d" : "today";

  return (
    <div className="min-h-dvh w-full px-4 py-6 text-white">
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <header className="flex items-center justify-between">
          <h1 className={"text-xl " + GAME_TITLE}>Dashboard</h1>
          <form action={logoutAction}>
            <button type="submit" className={GHOST_BUTTON}>
              Déconnexion
            </button>
          </form>
        </header>

        <Tabs active={activeTab} />

        {activeTab === "daily" ? (
          <DailyTab range={activeRange} />
        ) : activeTab === "streak" ? (
          <StreakTab />
        ) : activeTab === "archive" ? (
          <ArchiveTab range={activeRange} />
        ) : activeTab === "clues" ? (
          <CluesTab />
        ) : (
          <ContentTab />
        )}
      </div>
    </div>
  );
}

async function DailyTab({ range }: { range: TierRange }) {
  const [stats, tiers] = await Promise.all([loadDailyStats(), loadTierBreakdown("daily_scores", range)]);

  if (!stats) return <p className="text-white/50">Impossible de charger les statistiques.</p>;

  return (
    <>
      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
          Joueurs par jour ({HISTORY_DAYS}j)
        </h2>
        <LineChart points={stats.playersPerDay} />
      </section>

      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
          Score moyen par jour ({HISTORY_DAYS}j)
        </h2>
        <LineChart points={stats.avgScorePerDay} />
      </section>

      <section className={PANEL + " flex flex-col gap-3 px-4 py-4"}>
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Répartition par tier</h2>
          <RangeSelector tab="daily" active={range} />
        </div>
        {!tiers || tiers.total === 0 ? (
          <p className="text-sm text-white/40">Aucune partie sur cette période.</p>
        ) : (
          <TierBreakdown tierCounts={tiers.tierCounts} total={tiers.total} />
        )}
      </section>
    </>
  );
}

async function StreakTab() {
  const [retention, streak] = await Promise.all([loadRetentionStats(), loadStreakStats()]);

  return (
    <>
      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
          Rétention J+1 ({HISTORY_DAYS}j)
        </h2>
        {!retention || retention.length === 0 ? (
          <p className="text-sm text-white/40">Pas assez de données consécutives.</p>
        ) : (
          <LineChart points={retention} formatValue={(v) => `${v}%`} />
        )}
      </section>

      {!streak ? (
        <p className="text-white/50">Impossible de charger les statistiques de streak.</p>
      ) : (
        <>
          <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
            <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Streak actuel</h2>
            <StatRow label="Joueurs avec un streak actif" value={streak.activeCount} />
            <StatRow label="Streak moyen (actifs)" value={`${streak.avgActiveStreak}j`} />
            <StatRow label="Streak actif ≥ 7 jours" value={streak.loyalCount} />
            <StatRow label="Meilleur streak jamais atteint" value={`${streak.maxStreakEver}j`} />
          </section>

          <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
            <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
              Répartition des streaks actifs
            </h2>
            {streak.activeCount === 0 ? (
              <p className="text-sm text-white/40">Aucun streak actif.</p>
            ) : (
              <div className="flex flex-col gap-1.5">
                {streak.buckets.map((b) => {
                  const pct = Math.round((b.count / streak.activeCount) * 100);
                  return (
                    <div key={b.label} className="flex items-center gap-2">
                      <span className="w-16 shrink-0 text-xs font-semibold text-white/70">{b.label}</span>
                      <div className="h-3 flex-1 overflow-hidden rounded-sm bg-white/5">
                        <div className="h-full bg-amber-400/70" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-10 shrink-0 text-right text-xs text-amber-300">{b.count}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}

function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-sm text-white/60">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

// How many packs in the CURRENT plan still have every one of their ids
// unused, versus already served (in full or in part — a regeneration can
// remix a used id into a new grouping alongside fresh ones; api/session's
// assignFreshPack only ever hands out packs where every id is still fresh,
// so a partially-used pack counts the same as fully-used here). Real usage,
// read from daily_packs — see assignFreshPack in api/session/route.ts for
// the assignment logic this mirrors.
async function loadPackUsageStats() {
  const { data, error } = await supabase.from("daily_packs").select("played_at, event_ids").order("played_at", { ascending: true });
  if (error || !data) return null;

  const usedIds = new Set<string>();
  for (const row of data) for (const id of row.event_ids as string[]) usedIds.add(id);

  const totalPacks = DAILY_PACKS_PLAN.packs.length;
  const freshPacksRemaining = DAILY_PACKS_PLAN.packs.filter((p) => p.ids.every((id) => !usedIds.has(id))).length;

  return {
    daysRecorded: data.length,
    lastPlayedAt: data.length ? data[data.length - 1].played_at : null,
    freshPacksRemaining,
    totalPacks,
  };
}

// Pool + pack status. The pool/plan numbers are computed live from
// src/lib/poc-events.ts and data/daily-packs-plan.json (build-time content
// state, no query needed); pack usage below comes from Supabase's
// daily_packs — see docs/event-writing-guide-v2.md and
// scripts/build-final-daily-packs.mjs for how the plan itself is produced.
async function ContentTab() {
  const difficultyCounts = { easy: 0, medium: 0, hard: 0 } as Record<string, number>;
  for (const e of POC_EVENTS) {
    if (e.difficulty) difficultyCounts[e.difficulty] = (difficultyCounts[e.difficulty] ?? 0) + 1;
  }

  const totalPacks = DAILY_PACKS_PLAN.packs.length;
  const leftover = DAILY_PACKS_PLAN.summary.leftoverUnused;
  const leftoverTotal = leftover.easy + leftover.medium + leftover.hard;

  const activePool = process.env.NEXT_PUBLIC_EVENT_POOL === "v2" ? "v2 (poc-events)" : "v1 (legacy)";
  const usage = await loadPackUsageStats();

  return (
    <>
      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Pool actif en production</h2>
        <p className="text-sm text-white/80">{activePool}</p>
        <p className="text-xs text-white/40">
          Piloté par NEXT_PUBLIC_EVENT_POOL. Les stats ci-dessous décrivent toujours le pool v2 (poc-events.ts),
          qu&rsquo;il soit servi en prod ou non.
        </p>
      </section>

      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Pool de clues (v2)</h2>
        <StatRow label="Total" value={POC_EVENTS.length} />
        <StatRow label="Faciles" value={difficultyCounts.easy ?? 0} />
        <StatRow label="Moyennes" value={difficultyCounts.medium ?? 0} />
        <StatRow label="Difficiles" value={difficultyCounts.hard ?? 0} />
      </section>

      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Packs (5 cartes/jour)</h2>
        <StatRow label="Packs disponibles" value={totalPacks} />
        <StatRow label="Clues pas encore dans un pack" value={leftoverTotal} />
        <p className="text-xs text-white/40">
          Recalculé à chaque exécution de scripts/build-final-daily-packs.mjs (à relancer après tout ajout de
          clues) — voir data/daily-packs-plan.json.
        </p>
      </section>

      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Suivi des packs (usage réel)</h2>
        {!usage ? (
          <p className="text-sm text-white/40">
            Table daily_packs introuvable ou vide — rien n&rsquo;a encore été servi depuis sa création.
          </p>
        ) : (
          <>
            <StatRow label="Jours mémorisés" value={usage.daysRecorded} />
            <StatRow label="Dernier pack assigné" value={usage.lastPlayedAt ?? "—"} />
            <StatRow label="Packs neufs restants avant recyclage" value={`${usage.freshPacksRemaining} / ${usage.totalPacks}`} />
            <p className="text-xs text-white/40">
              {usage.freshPacksRemaining === 0
                ? "Cycle épuisé : le prochain défi du jour peut réutiliser un pack déjà servi."
                : "Tant que ce chiffre est > 0, un pack déjà servi ne peut pas ressortir en défi du jour."}
            </p>
          </>
        )}
      </section>
    </>
  );
}

async function ArchiveTab({ range }: { range: TierRange }) {
  const [stats, tiers] = await Promise.all([loadArchiveStats(), loadTierBreakdown("free_mode_plays", range)]);

  if (!stats) return <p className="text-white/50">Impossible de charger les statistiques.</p>;

  return (
    <>
      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
          Parties jouées par jour ({HISTORY_DAYS}j)
        </h2>
        <LineChart points={stats.playsPerDay} />
      </section>

      <section className={PANEL + " flex flex-col gap-2 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
          Score moyen par jour ({HISTORY_DAYS}j)
        </h2>
        <LineChart points={stats.avgScorePerDay} />
      </section>

      <section className={PANEL + " flex flex-col gap-3 px-4 py-4"}>
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Répartition par tier</h2>
          <RangeSelector tab="archive" active={range} />
        </div>
        {!tiers || tiers.total === 0 ? (
          <p className="text-sm text-white/40">Aucune partie sur cette période.</p>
        ) : (
          <TierBreakdown tierCounts={tiers.tierCounts} total={tiers.total} />
        )}
      </section>
    </>
  );
}

// Below this many first attempts, a clue's numbers are shown dimmed: a couple
// of lucky or lost players swing the average too much to act on.
const MIN_RELIABLE_GUESSES = 10;
const DIFFICULTY_LABEL: Record<string, string> = { easy: "Facile", medium: "Moyen", hard: "Difficile" };

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

// Per-clue difficulty from real players: api/guess logs each device's first
// attempt at an event (daily and archive alike), so every row is someone
// seeing the clue fresh. Paged because Supabase caps a select at 1000 rows.
async function loadClueStats() {
  const rows: { event_id: string; points: number; distance_km: number }[] = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from("guesses")
      .select("event_id, points, distance_km")
      .range(from, from + PAGE - 1);
    if (error) return null;
    rows.push(...data);
    if (data.length < PAGE) break;
  }

  const byEvent = new Map<string, { points: number[]; km: number[] }>();
  for (const r of rows) {
    const entry = byEvent.get(r.event_id) ?? { points: [], km: [] };
    entry.points.push(r.points);
    entry.km.push(r.distance_km);
    byEvent.set(r.event_id, entry);
  }

  const clues = [...byEvent].map(([id, { points, km }]) => {
    const event = ACTIVE_EVENTS.find((e) => e.id === id);
    const fr = event ? localizeEvent(event, "fr") : null;
    return {
      id,
      name: fr?.name ?? id,
      clue: fr?.clue ?? null,
      difficulty: event?.difficulty ?? null,
      count: points.length,
      avgPoints: Math.round(points.reduce((s, p) => s + p, 0) / points.length),
      medianKm: Math.round(median(km)),
    };
  });
  clues.sort((a, b) => a.avgPoints - b.avgPoints);

  const tiers = (["easy", "medium", "hard"] as const).map((difficulty) => {
    const inTier = clues.filter((c) => c.difficulty === difficulty);
    const count = inTier.reduce((s, c) => s + c.count, 0);
    const total = inTier.reduce((s, c) => s + c.avgPoints * c.count, 0);
    return { difficulty, clueCount: inTier.length, count, avgPoints: count ? Math.round(total / count) : null };
  });

  return { clues, tiers, totalGuesses: rows.length };
}

function PointsBar({ points }: { points: number }) {
  const pct = Math.round((points / MAX_LOCATION_POINTS) * 100);
  return (
    <div className="h-2 w-full overflow-hidden rounded-sm bg-white/5">
      <div className="h-full bg-amber-400/70" style={{ width: `${pct}%` }} />
    </div>
  );
}

async function CluesTab() {
  const stats = await loadClueStats();

  if (!stats) return <p className="text-white/50">Impossible de charger la table guesses.</p>;
  if (stats.totalGuesses === 0) return <p className="text-sm text-white/40">Aucune réponse enregistrée pour l&rsquo;instant.</p>;

  return (
    <>
      <section className={PANEL + " flex flex-col gap-3 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">Points moyens par niveau</h2>
        {stats.tiers.map((t) => (
          <div key={t.difficulty} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-white/70">
                {DIFFICULTY_LABEL[t.difficulty]}{" "}
                <span className="text-xs text-white/40">
                  ({t.clueCount} énigmes, {t.count} réponses)
                </span>
              </span>
              <span className="text-sm font-semibold text-white">
                {t.avgPoints === null ? "—" : `${t.avgPoints} / ${MAX_LOCATION_POINTS}`}
              </span>
            </div>
            {t.avgPoints !== null && <PointsBar points={t.avgPoints} />}
          </div>
        ))}
        <p className="text-xs text-white/40">
          Première tentative de chaque appareil uniquement (une partie rejouée connaît déjà la réponse).
        </p>
      </section>

      <section className={PANEL + " flex flex-col gap-3 px-4 py-4"}>
        <h2 className="text-xs font-bold uppercase tracking-wide text-white/50">
          Énigmes, des plus ratées aux mieux trouvées ({stats.clues.length})
        </h2>
        {stats.clues.map((c) => (
          <details
            key={c.id}
            className={"flex flex-col gap-1 " + (c.count < MIN_RELIABLE_GUESSES ? "opacity-50" : "")}
          >
            <summary className="flex cursor-pointer list-none flex-col gap-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-white">
                  {c.name}{" "}
                  <span className="text-xs font-normal text-white/40">
                    {c.difficulty ? DIFFICULTY_LABEL[c.difficulty] : "?"} · {c.count} rép. · méd. {c.medianKm} km
                  </span>
                </span>
                <span className="shrink-0 text-sm text-amber-300">{c.avgPoints}</span>
              </div>
              <PointsBar points={c.avgPoints} />
            </summary>
            {c.clue && <p className="mt-1 text-xs italic text-white/60">{c.clue}</p>}
            <p className="text-[10px] text-white/30">{c.id}</p>
          </details>
        ))}
        <p className="text-xs text-white/40">
          Grisé : moins de {MIN_RELIABLE_GUESSES} réponses, pas encore fiable. Cliquer une ligne affiche l&rsquo;indice.
        </p>
      </section>
    </>
  );
}
