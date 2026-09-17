"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import type { LatLng } from "./MapLibrePin";
import ChronologicalOrder from "./ChronologicalOrder";
import { useLanguage } from "./LanguageProvider";
import { POC_EVENTS, pickRandomEvents } from "@/lib/poc-events";
import { localizeEvent } from "@/lib/localize";
import { distanceKm } from "@/lib/geo";
import { PRIMARY_BUTTON, FINAL_ROUND_BUTTON, PANEL, PIN_GUESS_COLOR, PIN_ANSWER_COLOR } from "@/lib/theme";

// MapLibre touches `window` at import time, so it can only run on the client.
const MapPin = dynamic(() => import("./MapLibrePin"), { ssr: false });

const MAX_DISTANCE_KM = 20015;
const ROUNDS_PER_GAME = 5;
const MAX_LOCATION_POINTS = 1000;
const MAX_ORDER_POINTS = ROUNDS_PER_GAME * 1000;

function locationPoints(distance: number): number {
  return Math.max(0, Math.round(MAX_LOCATION_POINTS * (1 - distance / MAX_DISTANCE_KM)));
}

type Phase = "playing" | "ordering" | "done";

function newSession() {
  return pickRandomEvents(POC_EVENTS, ROUNDS_PER_GAME);
}

export default function HistoryGuessPoc() {
  const { lang, t } = useLanguage();
  const [sessionEvents, setSessionEvents] = useState(newSession);
  const [phase, setPhase] = useState<Phase>("playing");
  const [round, setRound] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [guess, setGuess] = useState<LatLng | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const event = sessionEvents[round];
  const localized = localizeEvent(event, lang);
  const isLastRound = round === sessionEvents.length - 1;
  const distance = submitted && guess ? distanceKm(guess, event) : null;
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

  function playAgain() {
    setSessionEvents(newSession());
    setPhase("playing");
    setRound(0);
    setTotalScore(0);
    setGuess(null);
    setSubmitted(false);
    setShowExplanation(false);
  }

  if (phase === "ordering" || phase === "done") {
    return (
      <div className="flex h-dvh w-full max-w-md flex-col gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-4 sm:py-6">
        <header className="flex w-full shrink-0 items-center justify-between gap-2">
          <h1 className="text-base font-black uppercase tracking-tight sm:text-2xl">
            🗺️ {t.gameTitle} <span className="hidden text-amber-400 sm:inline">(POC)</span>
          </h1>
          <div className="rounded-md border-2 border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-xs font-bold text-amber-300 sm:px-3 sm:py-1 sm:text-sm">
            {totalScore} {t.pts}
          </div>
        </header>

        <ChronologicalOrder
          events={sessionEvents}
          onComplete={(orderScore) => {
            setTotalScore((s) => s + orderScore);
            setPhase("done");
          }}
        />

        {phase === "done" && (
          <div className="flex shrink-0 flex-col items-center gap-2 rounded-md border-2 border-amber-400 bg-amber-400/10 px-4 py-3 text-center shadow-lg shadow-amber-400/10 sm:gap-3 sm:py-6">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300 sm:text-sm">{t.finalScore}</p>
            <p className="text-2xl font-black sm:text-4xl">
              {totalScore} <span className="text-base font-bold text-white/50 sm:text-lg">/ {maxTotalScore}</span>
            </p>
            <button type="button" onClick={playAgain} className={PRIMARY_BUTTON + " mt-1 sm:mt-2"}>
              {t.playAgain}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full max-w-2xl flex-col gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-4 sm:py-6">
      <header className="flex w-full shrink-0 items-center justify-between gap-2">
        <h1 className="text-base font-black uppercase tracking-tight sm:text-2xl">
          🗺️ {t.gameTitle} <span className="hidden text-amber-400 sm:inline">(POC)</span>
        </h1>
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
          <p className="parchment mb-2 shrink-0 rounded-md border-2 border-[#4a3820]/60 px-4 py-3 italic sm:mb-4 sm:py-4">
            &ldquo;{localized.clue}&rdquo;
          </p>
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
                <div className="relative max-h-[50vh] overflow-y-auto rounded-b-md border-2 border-t-0 border-emerald-400/50 bg-slate-900 py-4 pl-14 pr-4 shadow-lg shadow-black/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-4 top-4 h-7 w-7 text-amber-400"
                  >
                    <path d="M12 6c-2-1.5-4.5-2-7-2v14c2.5 0 5 .5 7 2 2-1.5 4.5-2 7-2V4c-2.5 0-5 .5-7 2z" />
                    <path d="M12 6v14" />
                  </svg>
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
          <p className="text-sm font-bold text-white/70">
            {t.distance}: {distance?.toLocaleString()} km ·{" "}
            <span className="text-amber-400">
              {locationPoints(distance!)} {t.pts}
            </span>
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
  );
}
