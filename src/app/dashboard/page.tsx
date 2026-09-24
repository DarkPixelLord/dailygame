import Link from "next/link";
import { isDashboardAuthed } from "@/lib/dashboard-auth";
import { supabase } from "@/lib/supabase";
import type { RankTier } from "@/lib/scoring";
import { POC_EVENTS } from "@/lib/poc-events";
import DAILY_PACKS_PLAN from "../../../data/daily-packs-plan.json";
import LoginForm from "./LoginForm";
import LineChart from "./LineChart";
import TierBreakdown, { TIER_ORDER } from "./TierBreakdown";
import { logoutAction } from "./actions";
import { PANEL, GHOST_BUTTON, PRIMARY_BUTTON, GAME_TITLE } from "@/lib/theme";

export const dynamic = "force-dynamic";

type Tab = "daily" | "archive" | "content";
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
      <Link href="/dashboard?tab=archive" className={active === "archive" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Archive
      </Link>
      <Link href="/dashboard?tab=content" className={active === "content" ? PRIMARY_BUTTON : GHOST_BUTTON}>
        Contenu
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
  const activeTab: Tab = tab === "archive" ? "archive" : tab === "content" ? "content" : "daily";
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
        ) : activeTab === "archive" ? (
          <ArchiveTab range={activeRange} />
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

function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-sm text-white/60">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

// Pool + pack status, computed live from src/lib/poc-events.ts and
// data/daily-packs-plan.json — no Supabase query, this is build-time content
// state, not player activity. See docs/event-writing-guide-v2.md and
// scripts/build-final-daily-packs.mjs for how these numbers are produced.
//
// Deliberately doesn't show anything derived from pickDailyEvents()'s
// rotation math (days-since-epoch modulo total packs): that quotient isn't
// stable across regenerations — build-final-daily-packs.mjs rebuilds every
// pack from scratch each time (not an append), and the modulo's divisor
// changes the moment totalPacks does. Any "already played / remaining in
// cycle" figure would only be a snapshot valid until the next regeneration,
// not a real running count, so it doesn't belong on a status dashboard.
function ContentTab() {
  const difficultyCounts = { easy: 0, medium: 0, hard: 0 } as Record<string, number>;
  for (const e of POC_EVENTS) {
    if (e.difficulty) difficultyCounts[e.difficulty] = (difficultyCounts[e.difficulty] ?? 0) + 1;
  }

  const totalPacks = DAILY_PACKS_PLAN.packs.length;
  const leftover = DAILY_PACKS_PLAN.summary.leftoverUnused;
  const leftoverTotal = leftover.easy + leftover.medium + leftover.hard;

  const activePool = process.env.NEXT_PUBLIC_EVENT_POOL === "v2" ? "v2 (poc-events)" : "v1 (legacy)";

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
