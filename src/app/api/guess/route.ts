import { after } from "next/server";
import { ACTIVE_EVENTS as POC_EVENTS } from "@/lib/event-pool";
import { supabase } from "@/lib/supabase";
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

  const { eventId, lat, lng, lang, deviceId, mode, record } = (body ?? {}) as Record<string, unknown>;

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

  // Per-clue difficulty data: one row per device per event, keeping only the
  // first attempt (a replay already knows the answer, so it says nothing
  // about how hard the clue is). Written after the response so it never
  // slows the reveal, and a failed write never fails the guess. Dev previews
  // send record: false.
  if (record === true && typeof deviceId === "string" && deviceId && (mode === "daily" || mode === "archive")) {
    after(async () => {
      const { error } = await supabase.from("guesses").upsert(
        {
          played_at: new Date().toISOString().slice(0, 10),
          device_id: deviceId,
          event_id: event.id,
          mode,
          lang: resolvedLang,
          distance_km: distance,
          points,
        },
        { onConflict: "device_id,event_id", ignoreDuplicates: true },
      );
      if (error) console.error("Failed to record guess:", error.message);
    });
  }

  return Response.json(result);
}
