"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import type { LatLng } from "./MapLibrePin";
import FinalRoundScreen from "./FinalRoundScreen";
import LaurelIcon from "./LaurelIcon";
import { useLanguage } from "./LanguageProvider";
import type { UiStrings } from "@/lib/i18n";
import type { GameMode } from "@/lib/poc-events";
import { saveTodaysProgress } from "@/lib/daily-progress";
import { MAX_LOCATION_POINTS, ROUNDS_PER_GAME } from "@/lib/scoring";
import type { EventPrompt, GuessResult, OrderableEvent } from "@/lib/game-types";
import { PRIMARY_BUTTON, FINAL_ROUND_BUTTON, PANEL, PIN_GUESS_COLOR, PIN_ANSWER_COLOR, GAME_TITLE } from "@/lib/theme";

// MapLibre touches `window` at import time, so it can only run on the client.
const MapPin = dynamic(() => import("./MapLibrePin"), { ssr: false });

// A quick emoji + one-word reaction to how close a guess was, from "way off"
// to "nailed it" — reinforces the score with a bit of personality instead of
// just a bare number. "Perfect" is reserved for full points (a guess within
// the server's full-credit radius), not just a high-scoring guess.
export function scoreFeedback(points: number, t: UiStrings): { emoji: string; label: string } {
  const ratio = points / MAX_LOCATION_POINTS;
  if (points >= MAX_LOCATION_POINTS) return { emoji: "🎯", label: t.scorePerfect };
  if (ratio >= 0.8) return { emoji: "⚡", label: t.scoreExcellent };
  if (ratio >= 0.6) return { emoji: "💪", label: t.scoreGreat };
  if (ratio >= 0.35) return { emoji: "👍", label: t.scoreGood };
  if (ratio >= 0.1) return { emoji: "😅", label: t.scoreMeh };
  return { emoji: "🤢", label: t.scoreOops };
}

type Phase = "loading" | "loadError" | "playing" | "ordering" | "done";

type Props = {
  mode: GameMode;
  onPlayAgain: () => void;
  // Resumes a daily run saved by daily-progress.ts (round already played up
  // to, score/reveals accumulated so far) instead of starting at round 0.
  initialRound?: number;
  initialScore?: number;
  initialRevealedEvents?: OrderableEvent[];
  // Which past day's pack to replay, for mode "archive".
  archiveDate?: string;
  // Dev-only: play these exact event ids instead of a normal pack.
  testIds?: string[];
  // Dev-only escape hatch, forwarded to FinalRoundScreen: skips every write
  // (no api/finish, no api/track-play, no localStorage) so local testing
  // never counts as a real play. See HomeClient.
  previewOnly?: boolean;
};

export default function HistoryGuessPoc({
  mode,
  onPlayAgain,
  initialRound = 0,
  initialScore = 0,
  initialRevealedEvents = [],
  archiveDate,
  testIds,
  previewOnly = false,
}: Props) {
  const { lang, t } = useLanguage();
  const [phase, setPhase] = useState<Phase>("loading");
  const [prompts, setPrompts] = useState<EventPrompt[]>([]);
  const [round, setRound] = useState(initialRound);
  const [totalScore, setTotalScore] = useState(initialScore);
  const [guess, setGuess] = useState<LatLng | null>(null);
  const [result, setResult] = useState<GuessResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [revealedEvents, setRevealedEvents] = useState<OrderableEvent[]>(initialRevealedEvents);
  const [showExplanation, setShowExplanation] = useState(false);

  // Fetches this session's rounds from the server — only a clue and an id
  // per round, never the answer's coordinates — so nothing about unplayed
  // rounds is ever sitting in the client's JS. Runs once per mount; the
  // session (which rounds, in which order) is fixed for the component's
  // lifetime same as the old client-side random pick was.
  useEffect(() => {
    let cancelled = false;

    async function load() {
      const params = new URLSearchParams({ mode, lang });
      if (mode === "archive" && archiveDate) params.set("date", archiveDate);
      if (testIds?.length) params.set("testIds", testIds.join(","));
      try {
        const res = await fetch(`/api/session?${params}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { prompts: EventPrompt[] };
        if (cancelled) return;
        setPrompts(data.prompts);
        setPhase("playing");
      } catch (err) {
        console.error("Failed to load game session:", err);
        if (!cancelled) setPhase("loadError");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // mode/lang are fixed for the lifetime of this component instance (a
    // language change sends the player back to the landing screen first).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prompt = prompts[round];
  const submitted = result !== null;
  const isLastRound = round === prompts.length - 1;
  const roundFeedback = result ? scoreFeedback(result.points, t) : null;

  // Memoized so toggling showExplanation (or any other unrelated re-render)
  // doesn't hand MapPin a new array reference — that would re-run its
  // marker-sync effect and replay the fitBounds fly-in animation.
  const pins = useMemo(
    () => [
      ...(guess ? [{ ...guess, color: PIN_GUESS_COLOR, label: "guess" }] : []),
      ...(result ? [{ lat: result.reveal.lat, lng: result.reveal.lng, color: PIN_ANSWER_COLOR, label: "answer" }] : []),
    ],
    [guess, result],
  );

  async function submit() {
    if (!guess || !prompt || submitting) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/guess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId: prompt.id, lat: guess.lat, lng: guess.lng, lang }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as GuessResult;
      setResult(data);
      setTotalScore((s) => s + data.points);
      setRevealedEvents((prev) => [
        ...prev,
        { id: prompt.id, name: data.reveal.name, year: data.reveal.year, explanation: data.reveal.explanation },
      ]);
    } catch (err) {
      console.error("Failed to submit guess:", err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    setShowExplanation(false);
    if (mode === "daily" && !previewOnly) {
      saveTodaysProgress({ round: isLastRound ? ROUNDS_PER_GAME : round + 1, totalScore, revealedEvents });
    }
    if (isLastRound) {
      setPhase("ordering");
      return;
    }
    setRound((r) => r + 1);
    setGuess(null);
    setResult(null);
  }

  // Unmounts this whole component (back to the landing screen) rather than
  // resetting state in place — a fresh mount already gets a new random
  // session via the session fetch above.
  function playAgain() {
    onPlayAgain();
  }

  if (phase === "loading" || phase === "loadError") {
    return (
      <div className="final-spotlight flex h-dvh w-full flex-col items-center justify-center gap-3 px-4 text-center">
        {phase === "loadError" ? (
          <>
            <p className="text-sm text-white/60">{t.couldntLoadGame}</p>
            <button type="button" onClick={() => window.location.reload()} className={PRIMARY_BUTTON}>
              {t.retry}
            </button>
          </>
        ) : (
          <div className="flex gap-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/60" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/60 [animation-delay:200ms]" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400/60 [animation-delay:400ms]" />
          </div>
        )}
      </div>
    );
  }

  if (phase === "ordering" || phase === "done") {
    return (
      <FinalRoundScreen
        mode={mode}
        initialScore={totalScore}
        events={revealedEvents}
        onPlayAgain={playAgain}
        previewOnly={previewOnly}
      />
    );
  }

  return (
    <div className="final-spotlight flex h-dvh w-full flex-col items-center">
      <div className="flex h-dvh w-full max-w-2xl flex-col gap-2 overflow-hidden px-3 py-2 sm:gap-4 sm:px-4 sm:py-6">
        <header className="flex w-full shrink-0 items-center justify-between gap-2">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={playAgain}
              className={`flex items-center gap-1.5 text-base sm:gap-2 sm:text-2xl ${GAME_TITLE}`}
            >
              <LaurelIcon className="h-5 w-5 shrink-0 text-amber-400 sm:h-7 sm:w-7" />
              {t.gameTitle}
            </button>
            <span className="text-[10px] font-bold uppercase tracking-wide text-white/40 sm:text-xs">
              {mode === "daily" ? t.dailyChallenge : t.archiveMode}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
            <span className="rounded-md border-2 border-white/10 bg-white/5 px-2 py-0.5 font-bold text-white/70 sm:px-3 sm:py-1">
              {t.round} {round + 1}/{prompts.length || ROUNDS_PER_GAME}
            </span>
            <span className="rounded-md border-2 border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-bold text-amber-300 sm:px-3 sm:py-1">
              {totalScore} {t.pts}
            </span>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          {/* Fixed height (not just min-height), shared by both branches —
              DIAGNOSTIC: the clue banner (often 2-3 lines) and the result
              banner (one short name) used to have different natural
              heights, resizing the map container right as fitBounds/flyTo
              fires on submit/next — same resize-retriggers-camera-move risk
              already called out below for the explanation panel, just never
              applied here. Testing whether that's what's crashing the tab
              on some mobile browsers (Chrome Android, iPhone 12). */}
          {!result ? (
            <div className={PANEL + " mb-2 flex h-24 shrink-0 items-center overflow-hidden px-0 py-0 sm:mb-4 sm:h-28"}>
              <span className="w-1.5 shrink-0 self-stretch bg-amber-400" aria-hidden />
              <p className="max-h-full overflow-y-auto px-4 py-3 italic text-slate-100 sm:py-4">{prompt?.clue}</p>
            </div>
          ) : (
            <div
              className={`relative mb-2 flex h-24 shrink-0 items-center justify-center rounded-md border-2 border-emerald-400/50 bg-emerald-400/10 px-4 py-3 pr-12 text-center font-bold text-emerald-300 sm:mb-4 sm:h-28 ${
                showExplanation ? "rounded-b-none" : ""
              }`}
            >
              {result.reveal.name}
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
              {showExplanation && result && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute -top-2 inset-x-0 z-20 overflow-hidden sm:-top-4"
                >
                  <div className="relative max-h-[50vh] overflow-y-auto rounded-b-md border-2 border-t-0 border-emerald-400/50 bg-slate-900 px-4 py-4 shadow-lg shadow-black/40">
                    <p className="mb-2 text-sm italic text-white/60">&ldquo;{prompt?.clue}&rdquo;</p>
                    <p className="text-sm leading-relaxed text-white/80">{result.reveal.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {!result ? (
          <div className="flex shrink-0 flex-col gap-1.5">
            {submitError && <p className="text-center text-xs font-bold text-rose-400">{t.couldntSubmitGuess}</p>}
            <button type="button" onClick={submit} disabled={!guess || submitting} className={PRIMARY_BUTTON + " w-full"}>
              {guess ? t.submitGuess : t.clickMapToPlaceYourPin}
            </button>
          </div>
        ) : (
          <div className={PANEL + " flex w-full shrink-0 flex-col gap-2 px-4 py-3"}>
            <p className="flex items-center justify-between gap-1.5 text-[11px] font-bold text-white/70 sm:text-sm">
              <span className="whitespace-nowrap">
                {t.distance}: {result.distance.toLocaleString()} km ·{" "}
                <span className="text-amber-400">{result.points}</span> / {MAX_LOCATION_POINTS} {t.pts}
              </span>
              {roundFeedback && (
                <span className="whitespace-nowrap">
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
