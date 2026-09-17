"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import type { HistoricalEvent } from "@/lib/poc-events";
import { localizeEvent } from "@/lib/localize";
import { useLanguage } from "./LanguageProvider";
import { PRIMARY_BUTTON } from "@/lib/theme";
import type { Lang } from "@/lib/i18n";

const POINTS_PER_CORRECT_SLOT = 1000;
const REVEAL_DELAY_MS = 600;

// CE years stay bare (no suffix) in both languages to save space on the
// mobile-width reorder cards — only 9/100 events are BCE, so a full
// "BCE"/"apr. J.-C." treatment would cost width on every card just to
// disambiguate a rare case. For that rare case: FR readers are used to a
// bare "-" sign on a year, but a plain "-500" reads as unfamiliar/unclear
// to an English audience, so EN gets a small "BC" suffix instead.
function YearLabel({ year, lang }: { year: number; lang: Lang }) {
  if (year >= 0) return <>{year}</>;
  if (lang === "fr") return <>{`-${-year}`}</>;
  return (
    <>
      {-year} <span className="text-[0.7em]">BC</span>
    </>
  );
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type Props = {
  events: HistoricalEvent[];
  onComplete: (score: number) => void;
};

export default function ChronologicalOrder({ events, onComplete }: Props) {
  const { lang, t } = useLanguage();
  const [order, setOrder] = useState(() => shuffle(events));
  const [submitted, setSubmitted] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const completedRef = useRef(false);

  const correctOrder = [...events].sort((a, b) => b.year - a.year);
  const correctPositions = order.map((ev, i) => ev.year === correctOrder[i].year);
  const score = correctPositions.filter(Boolean).length * POINTS_PER_CORRECT_SLOT;
  const fullyRevealed = revealedCount >= order.length;

  function moveTo(from: number, to: number) {
    if (from === to || to < 0 || to >= order.length) return;
    setOrder((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }

  function submit() {
    setSubmitted(true);
  }

  // Reveal correct/incorrect one slot at a time, top (most recent) first,
  // for suspense — instead of colorizing every card the instant you submit.
  useEffect(() => {
    if (!submitted) return;
    if (fullyRevealed) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete(score);
      }
      return;
    }
    const timer = setTimeout(() => setRevealedCount((c) => c + 1), REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [submitted, revealedCount, fullyRevealed, score, onComplete]);

  return (
    <div className="flex min-h-0 w-full max-w-md flex-1 flex-col gap-2">
      <AnimatePresence>
        {!submitted && (
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, marginBottom: -16 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 overflow-hidden"
          >
            <h2 className="text-lg font-black uppercase tracking-tight text-amber-400">{t.finalRoundTitle}</h2>
            <p className="text-sm font-bold text-white">{t.finalRoundSubtitle}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-2 overflow-y-auto overflow-x-hidden">
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-400/60 bg-amber-400/10 text-amber-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </span>
          <span className="text-left text-[10px] font-black uppercase tracking-wide text-amber-400">
            {t.mostRecentLabel}
          </span>
        </div>

        <div className="flex w-full gap-3">
          <div
            className="w-1.5 flex-shrink-0 self-stretch rounded-full"
            style={{
              background: "linear-gradient(to bottom, #fbbf24, #6b7280)",
              maskImage: "repeating-linear-gradient(to bottom, black 0 6px, transparent 6px 11px)",
              WebkitMaskImage: "repeating-linear-gradient(to bottom, black 0 6px, transparent 6px 11px)",
            }}
          />

          <Reorder.Group as="ol" axis="y" values={order} onReorder={setOrder} className="flex flex-1 flex-col gap-3">
            {order.map((ev, i) => {
              const revealed = submitted && i < revealedCount;
              return (
                <Reorder.Item
                  key={ev.id}
                  value={ev}
                  as="li"
                  dragListener={!submitted}
                  whileDrag={{ scale: 1.05, zIndex: 1, boxShadow: "0 12px 24px rgba(0,0,0,0.5)" }}
                  className={`flex h-16 items-center gap-2 rounded-md border-2 px-2 py-2 transition-colors duration-500 ${
                    revealed
                      ? correctPositions[i]
                        ? "border-emerald-400/50 bg-emerald-400/10"
                        : "border-rose-500/50 bg-rose-500/10"
                      : submitted
                        ? "border-white/10 bg-white/5"
                        : "cursor-grab border-white/10 bg-white/5 active:cursor-grabbing"
                  }`}
                >
                  {!submitted && <span className="select-none px-1 text-amber-400/60">⠿</span>}
                  <p className="line-clamp-2 flex-1 text-xs font-bold leading-snug sm:text-sm">{localizeEvent(ev, lang).name}</p>
                  {revealed ? (
                    <span
                      className={`font-mono text-xs font-bold sm:text-sm ${correctPositions[i] ? "text-emerald-400" : "text-rose-400"}`}
                    >
                      <YearLabel year={ev.year} lang={lang} />
                    </span>
                  ) : submitted ? (
                    <div className="flex gap-1 px-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30 [animation-delay:200ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/30 [animation-delay:400ms]" />
                    </div>
                  ) : (
                    <div className="flex shrink-0 gap-1">
                      <button
                        type="button"
                        disabled={i === 0}
                        onClick={() => moveTo(i, i - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-amber-400/40 text-xs font-bold text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30"
                        aria-label="Move up"
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        disabled={i === order.length - 1}
                        onClick={() => moveTo(i, i + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-amber-400/40 text-xs font-bold text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30"
                        aria-label="Move down"
                      >
                        ▼
                      </button>
                    </div>
                  )}
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/5 text-white/40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M3 21h18" />
              <path d="M5 21V10" />
              <path d="M9 21V10" />
              <path d="M15 21V10" />
              <path d="M19 21V10" />
              <path d="M12 3 3 9h18Z" />
            </svg>
          </span>
          <span className="text-left text-[10px] font-black uppercase tracking-wide text-white/40">
            {t.oldestLabel}
          </span>
        </div>
      </div>

      {!submitted ? (
        <button type="button" onClick={submit} className={PRIMARY_BUTTON + " w-full shrink-0"}>
          {t.submitOrder}
        </button>
      ) : fullyRevealed ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="shrink-0 text-center font-bold"
        >
          {correctPositions.filter(Boolean).length}/{events.length} {t.inTheRightSpot} ·{" "}
          <span className="text-amber-400">
            {score} {t.pts}
          </span>
        </motion.p>
      ) : (
        <div className="flex shrink-0 items-center justify-center gap-1.5 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/60 [animation-delay:200ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/60 [animation-delay:400ms]" />
        </div>
      )}
    </div>
  );
}
