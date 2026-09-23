import { supabase } from "@/lib/supabase";
import type { RankTier } from "@/lib/scoring";

const TIERS: RankTier[] = ["novice", "amateur", "scholar", "historian", "expert", "master"];

// Percentage of today's (or a given day's) daily-challenge players in each
// rank tier — powers the "25% Scholar, 13% Historian..." breakdown on the
// final-round screen. Reads are server-side only (secret key), same as the
// write in api/finish — the browser never queries Supabase directly.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const date = url.searchParams.get("date") ?? new Date().toISOString().slice(0, 10);

  const { data, error } = await supabase.from("daily_scores").select("tier").eq("played_at", date);

  if (error) {
    return Response.json({ error: "Couldn't load stats" }, { status: 500 });
  }

  const total = data.length;
  const counts = Object.fromEntries(TIERS.map((tier) => [tier, 0])) as Record<RankTier, number>;
  for (const row of data) {
    if (row.tier in counts) counts[row.tier as RankTier] += 1;
  }

  const percentages = Object.fromEntries(
    TIERS.map((tier) => [tier, total === 0 ? 0 : Math.round((counts[tier] / total) * 100)]),
  ) as Record<RankTier, number>;

  return Response.json({ date, total, percentages });
}
