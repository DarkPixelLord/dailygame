// Scoring constants shared between the client (for display/max-score math)
// and the guess API route (for the actual points calculation). Keeping this
// isomorphic — rather than duplicating it in both places — is what let the
// map-guessing scoring move server-side without the client and server
// drifting out of sync.
export const ROUNDS_PER_GAME = 5;
export const MAX_LOCATION_POINTS = 700;
// Kept in sync with POINTS_PER_CORRECT_SLOT in ChronologicalOrder.tsx.
// 3500 (map) + 1500 (final round) = a clean 5,000-point total, with the
// final round at 30% of it.
export const MAX_ORDER_POINTS = ROUNDS_PER_GAME * 300;

// The event's own lat/lng is itself only accurate to city/landmark scale
// (e.g. a capital used as a stand-in, or a canal/palace that's several km
// across) — don't require pixel-perfect precision to hit max points. Full
// marks anywhere within this radius, decay only kicks in past it.
const FULL_CREDIT_RADIUS_KM = 30;
// Two-stage exponential falloff instead of a single curve: a single decay
// rate can't be both forgiving on "right region, imprecise pin" guesses
// (common on huge countries like the US, Russia, Brazil) AND punishing on
// genuinely wrong guesses — loosen it enough for the former and the tail
// drags out too long for the latter. So: gentle decay up to NEAR_MISS_KM
// (same country/region-scale errors barely cost points), then a much
// steeper decay beyond it (a wrong-region guess craters fast).
const NEAR_DECAY_KM = 1800;
const NEAR_MISS_KM = 1000;
const FAR_DECAY_KM = 400;

export function locationPoints(distance: number): number {
  const beyondTolerance = Math.max(0, distance - FULL_CREDIT_RADIUS_KM);
  if (beyondTolerance <= NEAR_MISS_KM) {
    return Math.round(MAX_LOCATION_POINTS * Math.exp(-beyondTolerance / NEAR_DECAY_KM));
  }
  const atNearMiss = MAX_LOCATION_POINTS * Math.exp(-NEAR_MISS_KM / NEAR_DECAY_KM);
  const beyondNearMiss = beyondTolerance - NEAR_MISS_KM;
  return Math.round(atNearMiss * Math.exp(-beyondNearMiss / FAR_DECAY_KM));
}

// The end-of-game rank tier, from a final totalScore/maxTotalScore ratio —
// shared between the in-game final round screen and the share-link
// opengraph-image (both need the same tier boundaries, without either one
// depending on React).
export type RankTier = "novice" | "amateur" | "scholar" | "historian" | "expert" | "master";

export function rankTier(totalScore: number, maxTotalScore: number): RankTier {
  const ratio = totalScore / maxTotalScore;
  if (ratio > 0.95) return "master";
  if (ratio >= 0.8) return "expert";
  if (ratio >= 0.6) return "historian";
  if (ratio >= 0.4) return "scholar";
  if (ratio >= 0.2) return "amateur";
  return "novice";
}
