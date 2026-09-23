import { supabase } from "@/lib/supabase";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, ROUNDS_PER_GAME, rankTier } from "@/lib/scoring";

const MAX_TOTAL_SCORE = ROUNDS_PER_GAME * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

// Records one completed free-mode game — unlike api/finish, there's no
// per-device-per-day dedupe here: free mode is meant to be replayed, and
// each play is its own row so the dashboard's "activity" chart reflects
// actual play volume, not just distinct players.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { score, deviceId, mode } = (body ?? {}) as Record<string, unknown>;

  if (mode !== "free") {
    return Response.json({ ok: false, reason: "not-free" });
  }
  if (!isFiniteNumber(score) || score < 0 || score > MAX_TOTAL_SCORE || typeof deviceId !== "string" || !deviceId) {
    return Response.json({ error: "Invalid play submission" }, { status: 400 });
  }

  const playedAt = new Date().toISOString().slice(0, 10);
  const tier = rankTier(score, MAX_TOTAL_SCORE);
  const { error } = await supabase
    .from("free_mode_plays")
    .insert({ played_at: playedAt, device_id: deviceId, score, tier });

  if (error) {
    return Response.json({ error: "Couldn't save play" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
