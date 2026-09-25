import { pickDailyEvents, dailySeed, seededRandom, type GameMode, type HistoricalEvent } from "@/lib/poc-events";
import { ACTIVE_EVENTS as POC_EVENTS } from "@/lib/event-pool";
import { localizeEvent } from "@/lib/localize";
import { ROUNDS_PER_GAME } from "@/lib/scoring";
import { supabase } from "@/lib/supabase";
import DAILY_PACKS_PLAN from "../../../../data/daily-packs-plan.json";
import type { Lang } from "@/lib/i18n";
import type { EventPrompt } from "@/lib/game-types";

function parseMode(value: string | null): GameMode {
  return value === "archive" ? "archive" : "daily";
}

function parseLang(value: string | null): Lang {
  return value === "fr" ? "fr" : "en";
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

// Archive replays a past day's pack via pickDailyEvents' own date param — but
// a requested date of today or later would just hand out today's still-live
// daily pack under a different mode, unlimited and outside the once-a-day
// gate. Clamp anything not strictly in the past to yesterday.
function parseArchiveDate(value: string | null): Date {
  const today = todayKey();
  const isPastDate = value !== null && /^\d{4}-\d{2}-\d{2}$/.test(value) && value < today;
  const key = isPastDate ? value : yesterdayKey();
  return new Date(`${key}T00:00:00.000Z`);
}

function yesterdayKey(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

// Dev-only escape hatch: play an exact set of events by id instead of
// whatever pack the mode/date would normally pick, so a specific event can be
// smoke-tested through the real round-by-round flow right after editing it —
// never reachable from a production build (NODE_ENV is inlined at build
// time, so this whole branch is dead code there).
function parseTestEvents(url: URL): HistoricalEvent[] | null {
  if (process.env.NODE_ENV !== "development") return null;
  const raw = url.searchParams.get("testIds");
  if (!raw) return null;
  const ids = raw
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  const byId = new Map(POC_EVENTS.map((e) => [e.id, e]));
  const events = ids.map((id) => byId.get(id)).filter((e): e is HistoricalEvent => Boolean(e));
  return events.length ? events : null;
}

// Picks a pack for a calendar day that's never been assigned one, tracking
// REAL usage (every event id that has ever gone out in any daily_packs row)
// instead of the date-arithmetic pickDailyEvents used to rely on. The plan's
// packs partition the pool (build-final-daily-packs.mjs slices the
// easy/medium/hard queues sequentially, no event in two packs), so "every id
// in this pack is still unused" is equivalent to "this exact pack hasn't
// been served" — and stays correct even after the plan is regenerated from
// scratch with new clues, since regeneration reshuffles groupings but reuses
// the same stable event ids. Once no pack is left with every id fresh, the
// whole pool has had a turn — that's exhaustion, so every pack becomes a
// candidate again for a new cycle.
async function assignFreshPack(date: Date, dateKey: string, byId: Map<string, HistoricalEvent>): Promise<HistoricalEvent[] | null> {
  const packs = DAILY_PACKS_PLAN.packs;
  if (packs.length === 0) return null;

  const { data: rows } = await supabase.from("daily_packs").select("event_ids");
  const usedIds = new Set<string>();
  for (const row of rows ?? []) for (const id of row.event_ids as string[]) usedIds.add(id);

  let candidates = packs.filter((p) => p.ids.every((id) => !usedIds.has(id)));
  if (candidates.length === 0) candidates = packs; // every pack's had a turn — new cycle

  const random = seededRandom(dailySeed(date));
  const chosen = candidates[Math.floor(random() * candidates.length)];

  // Upsert-then-read instead of trusting our own pick: if two requests raced
  // to assign this same never-seen date, this makes sure everyone ends up
  // agreeing on whichever one actually landed first.
  await supabase.from("daily_packs").upsert({ played_at: dateKey, event_ids: chosen.ids }, { onConflict: "played_at", ignoreDuplicates: true });
  const { data: settled } = await supabase.from("daily_packs").select("event_ids").eq("played_at", dateKey).maybeSingle();
  const ids = (settled?.event_ids as string[] | undefined) ?? chosen.ids;
  const events = ids.map((id) => byId.get(id)).filter((e): e is HistoricalEvent => Boolean(e));
  return events.length === ROUNDS_PER_GAME ? events : null;
}

// Once a calendar day's pack has actually been served, it's pinned in
// Supabase forever under that date — so archive keeps replaying exactly what
// went out that day, no matter how many times data/daily-packs-plan.json
// gets regenerated afterward. A date with no row yet (first time it's
// requested — normally "today") gets a pack assigned by assignFreshPack
// (real usage tracking, see above) and persisted right here so every later
// request, including tonight's archive lookup for it, sees the same pack.
async function getPackEvents(date: Date, dateKey: string): Promise<HistoricalEvent[]> {
  const byId = new Map(POC_EVENTS.map((e) => [e.id, e]));

  try {
    const { data } = await supabase.from("daily_packs").select("event_ids").eq("played_at", dateKey).maybeSingle();
    if (data?.event_ids) {
      const picked = (data.event_ids as string[]).map((id) => byId.get(id)).filter((e): e is HistoricalEvent => Boolean(e));
      // Only trust the recorded pack if every id it names still exists in
      // the current pool — an id renamed/removed since would otherwise serve
      // a short round. Falls through to a fresh assignment below, same as
      // the no-row case; that assignment isn't persisted over the existing
      // row, so a later id restore/fix recovers the original recorded pack.
      if (picked.length === ROUNDS_PER_GAME) return picked;
    }

    const assigned = await assignFreshPack(date, dateKey, byId);
    if (assigned) return assigned;
  } catch {
    // Supabase unreachable, or daily_packs doesn't exist yet — degrade to a
    // live-computed pack rather than failing the whole session request. Not
    // persisted (can't be, Supabase is what's unavailable), so this date
    // gets a real, usage-tracked assignment the next time it's reachable.
  }

  return pickDailyEvents(POC_EVENTS, ROUNDS_PER_GAME, date);
}

// Only ever sends { id, clue } for this session's rounds — never the
// coordinates, name, or explanation that would let a player read the
// answer out of the network tab before guessing. Those are only revealed
// per-round by POST /api/guess, once a round is actually scored.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = parseMode(url.searchParams.get("mode"));
  const lang = parseLang(url.searchParams.get("lang"));

  const testEvents = parseTestEvents(url);
  let events: HistoricalEvent[];
  if (testEvents) {
    events = testEvents;
  } else if (mode === "archive") {
    const date = parseArchiveDate(url.searchParams.get("date"));
    events = await getPackEvents(date, date.toISOString().slice(0, 10));
  } else {
    events = await getPackEvents(new Date(), todayKey());
  }

  const prompts: EventPrompt[] = events.map((event) => ({
    id: event.id,
    clue: localizeEvent(event, lang).clue,
  }));

  return Response.json({ prompts });
}
