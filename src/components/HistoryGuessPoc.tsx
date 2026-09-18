"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import type { LatLng } from "./MapLibrePin";
import ChronologicalOrder from "./ChronologicalOrder";
import LaurelIcon from "./LaurelIcon";
import { useLanguage } from "./LanguageProvider";
import type { UiStrings } from "@/lib/i18n";
import { POC_EVENTS, pickRandomEvents, pickDailyEvents, type GameMode } from "@/lib/poc-events";
import { getRecentEventIds, addRecentEventIds } from "@/lib/recent-events";
import { localizeEvent } from "@/lib/localize";
import { distanceKm } from "@/lib/geo";
import { PRIMARY_BUTTON, FINAL_ROUND_BUTTON, PANEL, PIN_GUESS_COLOR, PIN_ANSWER_COLOR, GAME_TITLE } from "@/lib/theme";

// MapLibre touches `window` at import time, so it can only run on the client.
const MapPin = dynamic(() => import("./MapLibrePin"), { ssr: false });

const ROUNDS_PER_GAME = 5;
const MAX_LOCATION_POINTS = 700;
// Kept in sync with POINTS_PER_CORRECT_SLOT in ChronologicalOrder.tsx.
// 3500 (map) + 1500 (final round) = a clean 5,000-point total, with the
// final round at 30% of it.
const MAX_ORDER_POINTS = ROUNDS_PER_GAME * 300;
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

function locationPoints(distance: number): number {
  const beyondTolerance = Math.max(0, distance - FULL_CREDIT_RADIUS_KM);
  if (beyondTolerance <= NEAR_MISS_KM) {
    return Math.round(MAX_LOCATION_POINTS * Math.exp(-beyondTolerance / NEAR_DECAY_KM));
  }
  const atNearMiss = MAX_LOCATION_POINTS * Math.exp(-NEAR_MISS_KM / NEAR_DECAY_KM);
  const beyondNearMiss = beyondTolerance - NEAR_MISS_KM;
  return Math.round(atNearMiss * Math.exp(-beyondNearMiss / FAR_DECAY_KM));
}

// A quick emoji + one-word reaction to how close a guess was, from "way off"
// to "nailed it" — reinforces the score with a bit of personality instead of
// just a bare number. "Perfect" is reserved for full points (a guess within
// FULL_CREDIT_RADIUS_KM), not just a high-scoring guess.
function scoreFeedback(points: number, t: UiStrings): { emoji: string; label: string } {
  const ratio = points / MAX_LOCATION_POINTS;
  if (points >= MAX_LOCATION_POINTS) return { emoji: "🎯", label: t.scorePerfect };
  if (ratio >= 0.8) return { emoji: "🔥", label: t.scoreExcellent };
  if (ratio >= 0.6) return { emoji: "💪", label: t.scoreGreat };
  if (ratio >= 0.35) return { emoji: "👍", label: t.scoreGood };
  if (ratio >= 0.1) return { emoji: "😅", label: t.scoreMeh };
  return { emoji: "🤢", label: t.scoreOops };
}

type Phase = "playing" | "ordering" | "done";

function newSession(mode: GameMode) {
  if (mode === "daily") return pickDailyEvents(POC_EVENTS, ROUNDS_PER_GAME);
  return pickRandomEvents(POC_EVENTS, ROUNDS_PER_GAME, getRecentEventIds());
}

type Props = {
  mode: GameMode;
  onPlayAgain: () => void;
};

export default function HistoryGuessPoc({ mode, onPlayAgain }: Props) {
  const { lang, t } = useLanguage();
  const [sessionEvents] = useState(() => newSession(mode));

  useEffect(() => {
    if (mode === "free") addRecentEventIds(sessionEvents.map((e) => e.id));
    // sessionEvents is fixed for the lifetime of this component instance
    // (see the useState lazy initializer above) — only run once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [phase, setPhase] = useState<Phase>("playing");
  const [round, setRound] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [guess, setGuess] = useState<LatLng | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const event = sessionEvents[round];
  const localized = localizeEvent(event, lang);
  const isLastRound = round === sessionEvents.length - 1;
  const distance = submitted && guess ? distanceKm(guess, event) : null;
  const roundPoints = distance !== null ? locationPoints(distance) : null;
  const roundFeedback = roundPoints !== null ? scoreFeedback(roundPoints, t) : null;
  const maxTotalScore = sessionEvents.length * MAX_LOCATION_POINTS + MAX_ORDER_POINTS;

  // Memoized so toggling showExplanation (or any other unrelated re-render)
  // doesn't hand MapPin a new array reference — that would re-run its
  // marker-sync effect and replay the fitBounds fly-in animation.
  const pins = useMemo(
    () => [
      ...(guess ? [{ ...guess, color: PIN_GUESS_COLOR, label: "guess" }] : []),
      ...(submitted ? [{ lat: event.lat, lng: event.lng, color: PIN_ANSWER_COLOR, label: "answer" }] : []),
    ],
    [guess, submitted, event],
  );

  function submit() {
    if (!guess) return;
    setSubmitted(true);
    setTotalScore((s) => s + locationPoints(distanceKm(guess, event)));
  }

  function next() {
    setShowExplanation(false);
    if (isLastRound) {
      setPhase("ordering");
      return;
    }
    setRound((r) => r + 1);
    setGuess(null);
    setSubmitted(false);
  }

  // Unmounts this whole component (back to the landing screen) rather than
  // resetting state in place — a fresh mount already gets a new random
  // session via the newSession() lazy initializer above.
  function playAgain() {
    onPlayAgain();
  }

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

  if (phase === "ordering" || phase === "done") {
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
            <span className="rounded-md border-2 border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs font-bold text-amber-300 sm:px-3 sm:py-1 sm:text-sm">
              {totalScore} {t.pts}
            </span>
          </header>

          <ChronologicalOrder
            events={sessionEvents}
            onComplete={(orderScore) => {
              setTotalScore((s) => s + orderScore);
              setPhase("done");
            }}
          />

          {phase === "done" && (
            <div className={PANEL + " flex shrink-0 flex-col items-center gap-2 px-4 py-3 text-center sm:gap-3 sm:py-6"}>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300/80 sm:text-sm">{t.finalScore}</p>
              <p className="text-2xl font-black text-amber-400 sm:text-4xl">
                {totalScore} <span className="text-base font-bold text-white/50 sm:text-lg">/ {maxTotalScore}</span>
              </p>
              <div className="mt-1 flex w-full gap-2 sm:mt-2">
                <button type="button" onClick={playAgain} className={PRIMARY_BUTTON + " flex-1"}>
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
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="final-spotlight flex h-dvh w-full flex-col items-center">
      <div className="flex h-dvh w-full max-w-2xl flex-col gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-4 sm:py-6">
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
          <div className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
            <span className="rounded-md border-2 border-white/10 bg-white/5 px-2 py-0.5 font-bold text-white/70 sm:px-3 sm:py-1">
              {t.round} {round + 1}/{sessionEvents.length}
            </span>
            <span className="rounded-md border-2 border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-bold text-amber-300 sm:px-3 sm:py-1">
              {totalScore} {t.pts}
            </span>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          {!submitted ? (
            <div className={PANEL + " mb-2 flex shrink-0 overflow-hidden px-0 py-0 sm:mb-4"}>
              <span className="w-1.5 shrink-0 bg-amber-400" aria-hidden />
              <p className="px-4 py-3 italic text-slate-100 sm:py-4">{localized.clue}</p>
            </div>
          ) : (
            <div
              className={`relative mb-2 shrink-0 rounded-md border-2 border-emerald-400/50 bg-emerald-400/10 px-4 py-3 pr-12 text-center font-bold text-emerald-300 sm:mb-4 ${
                showExplanation ? "rounded-b-none" : ""
              }`}
            >
              {localized.name}
              <button
                type="button"
                onClick={() => setShowExplanation((v) => !v)}
                aria-label={showExplanation ? t.close : t.learnMore}
                title={showExplanation ? t.close : t.learnMore}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center"
              >
                {!showExplanation && <span className="absolute inset-0 animate-ping rounded-full bg-amber-400/40" />}
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-400/60 bg-amber-400/10 text-base font-black text-amber-300">
                  {showExplanation ? "✕" : "?"}
                </span>
              </button>
            </div>
          )}

          <div className="relative min-h-[200px] w-full flex-1">
            <MapPin disabled={submitted} onGuess={setGuess} pins={pins} />

            {/* Absolutely positioned so opening/closing never resizes the map
                container — that would retrigger its ResizeObserver and replay
                the fitBounds fly-in animation. The banner's mb-2/mb-4 margin
                stays constant either way (see above) so the map's height never
                changes; the fixed -top-2/-top-4 offset here just pulls the
                panel up over that constant gap so it reads as one continuous
                block with the banner instead of a floating card. */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -top-2 inset-x-0 z-20 overflow-hidden sm:-top-4"
                >
                  <div className="relative max-h-[50vh] overflow-y-auto rounded-b-md border-2 border-t-0 border-emerald-400/50 bg-slate-900 px-4 py-4 shadow-lg shadow-black/40">
                    <p className="mb-2 text-sm italic text-white/60">&ldquo;{localized.clue}&rdquo;</p>
                    <p className="text-sm leading-relaxed text-white/80">{localized.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {!submitted ? (
          <button type="button" onClick={submit} disabled={!guess} className={PRIMARY_BUTTON + " w-full shrink-0"}>
            {guess ? t.submitGuess : t.clickMapToPlaceYourPin}
          </button>
        ) : (
          <div className={PANEL + " flex w-full shrink-0 flex-col gap-2 px-4 py-3"}>
            <p className="flex items-center justify-between gap-2 text-sm font-bold text-white/70">
              <span>
                {t.distance}: {distance?.toLocaleString()} km ·{" "}
                <span className="text-amber-400">
                  {roundPoints} / {MAX_LOCATION_POINTS} {t.pts}
                </span>
              </span>
              {roundFeedback && (
                <span className="whitespace-nowrap text-amber-300">
                  {roundFeedback.emoji} {roundFeedback.label}
                </span>
              )}
            </p>
            {isLastRound ? (
              <div className="relative mt-1 w-full">
                <span className="absolute -inset-1.5 animate-pulse rounded-lg bg-orange-500/50 blur-md" />
                <button type="button" onClick={next} className={FINAL_ROUND_BUTTON + " relative w-full overflow-hidden"}>
                  <span className="shine-sweep" />
                  {t.continueToFinalRound}
                </button>
              </div>
            ) : (
              <button type="button" onClick={next} className={PRIMARY_BUTTON + " mt-1 w-full"}>
                {t.nextRound}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
