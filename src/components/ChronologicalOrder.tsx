"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import type { OrderableEvent } from "@/lib/game-types";
import { useLanguage } from "./LanguageProvider";
import { PRIMARY_BUTTON } from "@/lib/theme";
import type { Lang } from "@/lib/i18n";

// Kept in sync with MAX_ORDER_POINTS in HistoryGuessPoc.tsx.
const POINTS_PER_CORRECT_SLOT = 300;
const REVEAL_DELAY_MS = 600;
// A short beat on the last revealed color before the list glues itself
// together and slides up — otherwise the final score panel below appears
// in the exact same instant as the last card's color, with no suspense.
const COLLAPSE_PAUSE_MS = 450;
const COLLAPSE_DURATION_MS = 300;
// The "X/5 bien placés" recap only starts fading in once the collapse has
// visually settled (not mid-slide), then holds for a beat before the final
// score panel below is allowed to appear.
const RECAP_FADE_MS = 300;
const RECAP_HOLD_MS = 500;

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
  events: OrderableEvent[];
  onComplete: (score: number) => void;
  onSubmit?: () => void;
};

export default function ChronologicalOrder({ events, onComplete, onSubmit }: Props) {
  const { lang, t } = useLanguage();
  const [order, setOrder] = useState(() => shuffle(events));
  const [submitted, setSubmitted] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
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
    setExpandedId(null);
    onSubmit?.();
  }

  // Reveal correct/incorrect one slot at a time, top (most recent) first,
  // for suspense — instead of colorizing every card the instant you submit.
  useEffect(() => {
    if (!submitted) return;
    if (fullyRevealed) {
      if (completedRef.current) return;
      completedRef.current = true;
      const collapseTimer = setTimeout(() => setCollapsed(true), COLLAPSE_PAUSE_MS);
      const completeTimer = setTimeout(
        () => onComplete(score),
        COLLAPSE_PAUSE_MS + COLLAPSE_DURATION_MS + RECAP_FADE_MS + RECAP_HOLD_MS,
      );
      return () => {
        clearTimeout(collapseTimer);
        clearTimeout(completeTimer);
      };
    }
    const timer = setTimeout(() => setRevealedCount((c) => c + 1), REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [submitted, revealedCount, fullyRevealed, score, onComplete]);

  return (
    <div className="flex min-h-0 w-full max-w-md flex-1 flex-col gap-2">
      <AnimatePresence>
        {expandedId !== null && (
          <>
            <motion.button
              key="explanation-backdrop"
              type="button"
              onClick={() => setExpandedId(null)}
              aria-label={t.close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 cursor-default bg-black/50"
            />
            <motion.div
              key="explanation-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-x-4 top-1/2 z-50 max-h-[60vh] -translate-y-1/2 overflow-y-auto rounded-md border-2 border-amber-600 bg-amber-400 p-4 shadow-lg shadow-black/40"
            >
              <button
                type="button"
                onClick={() => setExpandedId(null)}
                aria-label={t.close}
                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-black/20 text-sm font-black leading-none text-black"
              >
                ✕
              </button>
              <p className="pr-8 text-sm font-black leading-snug text-black">
                {order.find((ev) => ev.id === expandedId)?.name}
              </p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-black">
                {order.find((ev) => ev.id === expandedId)?.explanation}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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

      <motion.div
        layout
        transition={{ duration: COLLAPSE_DURATION_MS / 1000 }}
        className={`flex min-h-0 flex-col gap-2 overflow-y-auto overflow-x-hidden ${collapsed ? "flex-none justify-start" : "flex-1 justify-center"}`}
      >
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              key="most-recent-label"
              initial={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: COLLAPSE_DURATION_MS / 1000 }}
              className="block shrink-0 overflow-hidden text-left text-[10px] font-black uppercase tracking-wide text-blue-400"
            >
              {t.mostRecentLabel}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.div layout transition={{ duration: COLLAPSE_DURATION_MS / 1000 }} className="flex w-full gap-3">
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                key="timeline"
                initial={{ opacity: 1, width: 4 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: COLLAPSE_DURATION_MS / 1000 }}
                className="flex-shrink-0 self-stretch"
                style={{
                  backgroundImage: "radial-gradient(circle 2px at 2px 2px, #60a5fa 2px, transparent 2px)",
                  backgroundSize: "4px 10px",
                  backgroundRepeat: "repeat-y",
                }}
              />
            )}
          </AnimatePresence>

          <Reorder.Group
            as="ol"
            axis="y"
            values={order}
            onReorder={setOrder}
            layout
            transition={{ duration: COLLAPSE_DURATION_MS / 1000 }}
            className={`flex flex-1 flex-col transition-[gap] duration-300 ${collapsed ? "gap-0" : "gap-3"}`}
          >
            {order.map((ev, i) => {
              const revealed = submitted && i < revealedCount;
              return (
                <Reorder.Item
                  key={ev.id}
                  value={ev}
                  as="li"
                  layout
                  dragListener={!submitted}
                  whileDrag={{ scale: 1.05, zIndex: 1, boxShadow: "0 12px 24px rgba(0,0,0,0.5)" }}
                  className={`flex h-16 items-center gap-2 rounded-md border-2 px-2 py-2 shadow-lg shadow-black/30 transition-colors duration-500 ${
                    revealed
                      ? correctPositions[i]
                        ? "border-emerald-500/30 bg-emerald-950/80"
                        : "border-rose-600/30 bg-rose-950/80"
                      : submitted
                        ? "border-white/25 bg-slate-900/80"
                        : "cursor-grab border-white/25 bg-slate-900/80 active:cursor-grabbing"
                  }`}
                >
                  {!submitted && <span className="select-none px-1 text-amber-400/60">⠿</span>}
                  <p className="line-clamp-2 flex-1 text-xs font-bold leading-snug sm:text-sm">{ev.name}</p>
                  <button
                    type="button"
                    onClick={() => setExpandedId((cur) => (cur === ev.id ? null : ev.id))}
                    aria-label={t.learnMore}
                    title={t.learnMore}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-400/40 text-[10px] font-black leading-none text-amber-300 transition hover:bg-amber-400/10"
                  >
                    ?
                  </button>
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
                    <div className="flex shrink-0 flex-col gap-0.5">
                      <button
                        type="button"
                        disabled={i === 0}
                        onClick={() => moveTo(i, i - 1)}
                        className="flex h-5 w-6 items-center justify-center rounded-md border-2 border-amber-400/40 text-[10px] font-bold leading-none text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30"
                        aria-label="Move up"
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        disabled={i === order.length - 1}
                        onClick={() => moveTo(i, i + 1)}
                        className="flex h-5 w-6 items-center justify-center rounded-md border-2 border-amber-400/40 text-[10px] font-bold leading-none text-amber-300 transition hover:bg-amber-400/10 disabled:opacity-30"
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
        </motion.div>

        <AnimatePresence>
          {!collapsed && (
            <motion.span
              key="oldest-label"
              initial={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: COLLAPSE_DURATION_MS / 1000 }}
              className="block shrink-0 overflow-hidden text-left text-[10px] font-black uppercase tracking-wide text-blue-400"
            >
              {t.oldestLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {!submitted ? (
        <button type="button" onClick={submit} className={PRIMARY_BUTTON + " w-full shrink-0"}>
          {t.submitOrder}
        </button>
      ) : collapsed ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: RECAP_FADE_MS / 1000, delay: COLLAPSE_DURATION_MS / 1000 }}
          className="shrink-0 text-center font-bold"
        >
          {correctPositions.filter(Boolean).length}/{events.length} {t.inTheRightSpot} ·{" "}
          <span className="text-amber-400">{score}</span> / {events.length * POINTS_PER_CORRECT_SLOT} {t.pts}
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
