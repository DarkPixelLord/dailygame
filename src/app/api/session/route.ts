import { POC_EVENTS, pickDailyEvents, pickRandomEvents, type GameMode } from "@/lib/poc-events";
import { localizeEvent } from "@/lib/localize";
import { ROUNDS_PER_GAME } from "@/lib/scoring";
import type { Lang } from "@/lib/i18n";
import type { EventPrompt } from "@/lib/game-types";

function parseMode(value: string | null): GameMode {
  return value === "free" ? "free" : "daily";
}

function parseLang(value: string | null): Lang {
  return value === "fr" ? "fr" : "en";
}

// Only ever sends { id, clue } for this session's rounds — never the
// coordinates, name, or explanation that would let a player read the
// answer out of the network tab before guessing. Those are only revealed
// per-round by POST /api/guess, once a round is actually scored.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = parseMode(url.searchParams.get("mode"));
  const lang = parseLang(url.searchParams.get("lang"));
  const excludeIds = (url.searchParams.get("exclude") ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  const events =
    mode === "daily" ? pickDailyEvents(POC_EVENTS, ROUNDS_PER_GAME) : pickRandomEvents(POC_EVENTS, ROUNDS_PER_GAME, excludeIds);

  const prompts: EventPrompt[] = events.map((event) => ({
    id: event.id,
    clue: localizeEvent(event, lang).clue,
  }));

  return Response.json({ prompts });
}
