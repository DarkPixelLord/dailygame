"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChronologicalOrder from "./ChronologicalOrder";
import LaurelIcon from "./LaurelIcon";
import { useLanguage } from "./LanguageProvider";
import type { UiStrings } from "@/lib/i18n";
import type { GameMode } from "@/lib/poc-events";
import { MAX_LOCATION_POINTS, MAX_ORDER_POINTS, rankTier } from "@/lib/scoring";
import { RANK_ICON_COMPONENTS, RANK_LABEL_KEYS } from "@/lib/rank-icons";
import type { OrderableEvent } from "@/lib/game-types";
import { PRIMARY_BUTTON, PANEL, GAME_TITLE } from "@/lib/theme";

// The final-score rank, shown once at the end of the game — a coarser,
// higher-stakes tier list than the per-round scoreFeedback in HistoryGuessPoc.
function finalRank(totalScore: number, maxTotalScore: number, t: UiStrings) {
  const tier = rankTier(totalScore, maxTotalScore);
  return { icon: RANK_ICON_COMPONENTS[tier], label: t[RANK_LABEL_KEYS[tier]] };
}

type Props = {
  mode: GameMode;
  // Score accumulated from the 5 map rounds, before the ordering round adds
  // its own points.
  initialScore: number;
  events: OrderableEvent[];
  onPlayAgain: () => void;
};

export default function FinalRoundScreen({ mode, initialScore, events, onPlayAgain }: Props) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<"ordering" | "done">("ordering");
  const [totalScore, setTotalScore] = useState(initialScore);
  const [linkCopied, setLinkCopied] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const maxTotalScore = events.length * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;
  const rank = phase === "done" ? finalRank(totalScore, maxTotalScore, t) : null;

  async function share() {
    const url = `${window.location.origin}/share/${totalScore}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: t.gameTitle, text: t.landingIntro, url });
      } catch {
        // user cancelled the share sheet — nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing we can do without a visible fallback UI
    }
  }

  return (
    <div className="final-spotlight flex h-dvh w-full flex-col items-center">
      <div className="flex h-dvh w-full max-w-md flex-col gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-4 sm:py-6">
        <header className="flex w-full shrink-0 items-center justify-between gap-2">
          <div className="flex flex-col">
            <h1 className={`flex items-center gap-1.5 text-base sm:gap-2 sm:text-2xl ${GAME_TITLE}`}>
              <LaurelIcon className="h-5 w-5 shrink-0 text-amber-400 sm:h-7 sm:w-7" />
              {t.gameTitle} <span className="hidden sm:inline">(POC)</span>
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-wide text-white/40 sm:text-xs">
              {mode === "daily" ? t.dailyChallenge : t.freeMode}
            </span>
          </div>
          <AnimatePresence>
            {!orderSubmitted && (
              <motion.span
                key="score-badge"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-md border-2 border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs font-bold text-amber-300 sm:px-3 sm:py-1 sm:text-sm"
              >
                {totalScore} {t.pts}
              </motion.span>
            )}
          </AnimatePresence>
        </header>

        <ChronologicalOrder
          events={events}
          onSubmit={() => setOrderSubmitted(true)}
          onComplete={(orderScore) => {
            setTotalScore((s) => s + orderScore);
            setPhase("done");
          }}
        />

        {phase === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={PANEL + " flex shrink-0 flex-col items-center gap-2 px-4 py-3 text-center sm:gap-3 sm:py-6"}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300/80 sm:text-sm">{t.finalScore}</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {rank?.icon && <rank.icon className="h-10 w-10 shrink-0 text-amber-300 sm:h-14 sm:w-14" />}
              <div className="flex flex-col items-start">
                <p className="text-2xl font-black text-amber-400 sm:text-4xl">
                  {totalScore} <span className="text-base font-bold text-white/50 sm:text-lg">/ {maxTotalScore}</span>
                </p>
                {rank && (
                  <span className="text-xs font-extrabold uppercase tracking-wide text-amber-300 sm:text-sm">
                    {rank.label}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-1 flex w-full gap-2 sm:mt-2">
              <button type="button" onClick={onPlayAgain} className={PRIMARY_BUTTON + " flex-1"}>
                {t.playAgain}
              </button>
              <button
                type="button"
                onClick={share}
                className="flex-1 rounded-md border-2 border-amber-400/50 px-5 py-2.5 font-extrabold uppercase tracking-wide text-amber-300 transition hover:bg-amber-400/10"
              >
                {linkCopied ? t.linkCopied : t.share}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
