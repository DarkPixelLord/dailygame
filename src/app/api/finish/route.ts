import { supabase } from "@/lib/supabase";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, ROUNDS_PER_GAME, rankTier } from "@/lib/scoring";

const MAX_TOTAL_SCORE = ROUNDS_PER_GAME * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

// Records this device's daily-challenge score, once per device per UTC day
// (matches the UTC day pickDailyEvents seeds off in poc-events.ts). Free-mode
// runs aren't recorded — the end-of-game percentages are about today's daily
// challenge specifically, not every game played.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { score, deviceId, mode } = (body ?? {}) as Record<string, unknown>;

  if (mode !== "daily") {
    return Response.json({ ok: false, reason: "not-daily" });
  }
  if (!isFiniteNumber(score) || score < 0 || score > MAX_TOTAL_SCORE || typeof deviceId !== "string" || !deviceId) {
    return Response.json({ error: "Invalid score submission" }, { status: 400 });
  }

  const tier = rankTier(score, MAX_TOTAL_SCORE);
  const playedAt = new Date().toISOString().slice(0, 10);

  const { error } = await supabase
    .from("daily_scores")
    .upsert({ played_at: playedAt, device_id: deviceId, score, tier }, { onConflict: "device_id,played_at" });

  if (error) {
    return Response.json({ error: "Couldn't save score" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
