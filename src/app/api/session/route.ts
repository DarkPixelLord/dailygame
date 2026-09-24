import { pickDailyEvents, type GameMode, type HistoricalEvent } from "@/lib/poc-events";
import { ACTIVE_EVENTS as POC_EVENTS } from "@/lib/event-pool";
import { localizeEvent } from "@/lib/localize";
import { ROUNDS_PER_GAME } from "@/lib/scoring";
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

// Only ever sends { id, clue } for this session's rounds — never the
// coordinates, name, or explanation that would let a player read the
// answer out of the network tab before guessing. Those are only revealed
// per-round by POST /api/guess, once a round is actually scored.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = parseMode(url.searchParams.get("mode"));
  const lang = parseLang(url.searchParams.get("lang"));

  const events =
    parseTestEvents(url) ??
    (mode === "archive"
      ? pickDailyEvents(POC_EVENTS, ROUNDS_PER_GAME, parseArchiveDate(url.searchParams.get("date")))
      : pickDailyEvents(POC_EVENTS, ROUNDS_PER_GAME));

  const prompts: EventPrompt[] = events.map((event) => ({
    id: event.id,
    clue: localizeEvent(event, lang).clue,
  }));

  return Response.json({ prompts });
}
