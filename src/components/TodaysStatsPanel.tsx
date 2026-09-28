"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, ROUNDS_PER_GAME, rankTier, type RankTier } from "@/lib/scoring";
import { RANK_ICON_COMPONENTS, RANK_LABEL_KEYS } from "@/lib/rank-icons";
import { GHOST_BUTTON } from "@/lib/theme";
import type { DailyLeaderboard, LeaderboardEntry } from "@/lib/daily-leaderboard";

const MAX_TOTAL_SCORE = ROUNDS_PER_GAME * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

// Display order for the today's-achievements breakdown: best tier first,
// since it's the one players scan for first ("am I Master-tier today?").
const TIER_DISPLAY_ORDER: RankTier[] = ["master", "expert", "historian", "scholar", "amateur", "novice"];

const SECTION_TITLE = "text-xs font-bold uppercase tracking-widest text-amber-300 sm:text-sm";

type Props = {
  tierPercentages: Record<RankTier, number> | null;
  leaderboard?: DailyLeaderboard | null;
  // Lets callers swap the small top-right ghost button (FinalRoundScreen)
  // for a full-width button matching the other panel actions
  // (DailyResultScreen).
  buttonClassName?: string;
};

// A "today's stats" button that opens a popup with the day's top 5 scores
// (the player's own line in amber, or appended below the 5 with its rank),
// then the rank distribution illustrated with each tier's badge. Shared
// between the fresh end-of-game reveal (FinalRoundScreen) and the "already
// played today" screen (DailyResultScreen).
export default function TodaysStatsPanel({ tierPercentages, leaderboard, buttonClassName }: Props) {
  const { t } = useLanguage();

  function renderEntry(entry: LeaderboardEntry, key: string, showYou: boolean) {
    const TierIcon = RANK_ICON_COMPONENTS[rankTier(entry.score, MAX_TOTAL_SCORE)];
    return (
      <li
        key={key}
        className={`flex items-center gap-3 text-sm font-black sm:text-base ${entry.isPlayer ? "text-amber-300" : "text-white"}`}
      >
        <span className="w-7 shrink-0 text-right tabular-nums">{entry.rank}.</span>
        <span className="tabular-nums">
          {entry.score} {t.pts}
        </span>
        <TierIcon className="h-7 w-7 shrink-0" />
        {showYou && <span className="text-xs font-bold sm:text-sm">({t.you})</span>}
      </li>
    );
  }
  const [statsOpen, setStatsOpen] = useState(false);

  // The close button sits on the first section's title row: the top 5 when
  // there's at least one score today, otherwise the tier breakdown.
  const showTopScores = !!leaderboard && leaderboard.top.length > 0;
  // Only the player's own lines are amber: their top-5 row and their tier.
  const playerEntry = leaderboard?.player ?? leaderboard?.top.find((entry) => entry.isPlayer);
  const playerTier = playerEntry ? rankTier(playerEntry.score, MAX_TOTAL_SCORE) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setStatsOpen(true)}
        className={buttonClassName ?? GHOST_BUTTON + " text-[10px] sm:text-xs"}
      >
        {t.todaysStatsButton}
      </button>
      <AnimatePresence>
        {/* The button shows right away; if clicked before the stats fetch
            resolves, the popup opens as soon as the data lands. */}
        {statsOpen && tierPercentages && (
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
                <p className={SECTION_TITLE}>{showTopScores ? t.todaysTopScores : t.todaysAchievements}</p>
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
              {showTopScores && (
                <>
                  <ol className="flex flex-col gap-2.5">
                    {leaderboard.top.map((entry, i) => renderEntry(entry, String(i), false))}
                    {leaderboard.player && (
                      <>
                        <li aria-hidden className="w-7 text-right text-sm leading-none text-white/40">
                          …
                        </li>
                        {renderEntry(leaderboard.player, "player", true)}
                      </>
                    )}
                  </ol>
                  <p className={SECTION_TITLE + " mb-2 mt-4 border-t border-white/10 pt-3"}>{t.todaysAchievements}</p>
                </>
              )}
              <div className="flex flex-col gap-1">
                {TIER_DISPLAY_ORDER.map((tier) => {
                  const TierIcon = RANK_ICON_COMPONENTS[tier];
                  return (
                    <div
                      key={tier}
                      className={`flex items-center gap-2 ${tier === playerTier ? "text-amber-300" : "text-white"}`}
                    >
                      <TierIcon className="h-5 w-5 shrink-0" />
                      <span className="flex-1 text-[11px] font-semibold sm:text-xs">{t[RANK_LABEL_KEYS[tier]]}</span>
                      <span className="text-xs font-bold sm:text-sm">
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
