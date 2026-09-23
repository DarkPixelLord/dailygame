"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import type { RankTier } from "@/lib/scoring";
import { RANK_ICON_COMPONENTS, RANK_LABEL_KEYS } from "@/lib/rank-icons";
import { GHOST_BUTTON } from "@/lib/theme";

// Display order for the today's-players breakdown: best tier first, since
// it's the one players scan for first ("am I Master-tier today?").
const TIER_DISPLAY_ORDER: RankTier[] = ["master", "expert", "historian", "scholar", "amateur", "novice"];

type Props = { tierPercentages: Record<RankTier, number> | null };

// A small "today's stats" button that opens a popup with the rank
// distribution, illustrated with each tier's badge. Shared between the
// fresh end-of-game reveal (FinalRoundScreen) and the "already played
// today" screen (DailyResultScreen).
export default function TodaysStatsPanel({ tierPercentages }: Props) {
  const { t } = useLanguage();
  const [statsOpen, setStatsOpen] = useState(false);

  if (!tierPercentages) return null;

  return (
    <>
      <button type="button" onClick={() => setStatsOpen(true)} className={GHOST_BUTTON + " text-[10px] sm:text-xs"}>
        {t.todaysStatsButton}
      </button>
      <AnimatePresence>
        {statsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setStatsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xs rounded-md border-2 border-white/10 bg-slate-900 px-4 py-4 shadow-lg shadow-black/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 sm:text-sm">
                  {t.todaysPlayers}
                </p>
                <button
                  type="button"
                  onClick={() => setStatsOpen(false)}
                  aria-label={t.close}
                  title={t.close}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-amber-400/40 text-sm font-black text-amber-300 transition hover:bg-amber-400/10"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col gap-2.5">
                {TIER_DISPLAY_ORDER.map((tier) => {
                  const TierIcon = RANK_ICON_COMPONENTS[tier];
                  return (
                    <div key={tier} className="flex items-center gap-3">
                      <TierIcon className="h-7 w-7 shrink-0 text-amber-300" />
                      <span className="flex-1 text-xs font-semibold text-white/80 sm:text-sm">
                        {t[RANK_LABEL_KEYS[tier]]}
                      </span>
                      <span className="text-sm font-black text-amber-300 sm:text-base">
                        {tierPercentages[tier]}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
