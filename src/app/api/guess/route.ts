import { ACTIVE_EVENTS as POC_EVENTS } from "@/lib/event-pool";
import { localizeEvent } from "@/lib/localize";
import { distanceKm } from "@/lib/geo";
import { locationPoints } from "@/lib/scoring";
import type { Lang } from "@/lib/i18n";
import type { GuessResult } from "@/lib/game-types";

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

// Scores a guess entirely server-side and reveals the answer only after
// scoring it — the client never has this event's real lat/lng, name, or
// explanation before this call returns.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { eventId, lat, lng, lang } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof eventId !== "string" ||
    !isFiniteNumber(lat) ||
    !isFiniteNumber(lng) ||
    lat < -90 ||
    lat > 90 ||
    lng < -180 ||
    lng > 180
  ) {
    return Response.json({ error: "Invalid guess" }, { status: 400 });
  }

  const event = POC_EVENTS.find((e) => e.id === eventId);
  if (!event) {
    return Response.json({ error: "Unknown event" }, { status: 404 });
  }

  const resolvedLang: Lang = lang === "fr" ? "fr" : "en";
  const localized = localizeEvent(event, resolvedLang);
  const distance = distanceKm({ lat, lng }, event);
  const points = locationPoints(distance);

  const result: GuessResult = {
    distance,
    points,
    reveal: {
      name: localized.name,
      explanation: localized.explanation,
      year: event.year,
      lat: event.lat,
      lng: event.lng,
    },
  };

  return Response.json(result);
}
