import type { RankTier } from "@/lib/scoring";

const TIER_LABELS: Record<RankTier, string> = {
  novice: "Néophyte",
  amateur: "Amateur",
  scholar: "Érudit",
  historian: "Historien",
  expert: "Expert",
  master: "Maître",
};
export const TIER_ORDER: RankTier[] = ["master", "expert", "historian", "scholar", "amateur", "novice"];

export default function TierBreakdown({ tierCounts, total }: { tierCounts: Record<RankTier, number>; total: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      {TIER_ORDER.map((tier) => {
        const pct = Math.round((tierCounts[tier] / total) * 100);
        return (
          <div key={tier} className="flex items-center gap-2">
            <span className="w-20 shrink-0 text-xs font-semibold text-white/70">{TIER_LABELS[tier]}</span>
            <div className="h-3 flex-1 overflow-hidden rounded-sm bg-white/5">
              <div className="h-full bg-amber-400/70" style={{ width: `${pct}%` }} />
            </div>
            <span className="w-10 shrink-0 text-right text-xs text-amber-300">{pct}%</span>
          </div>
        );
      })}
    </div>
  );
}
