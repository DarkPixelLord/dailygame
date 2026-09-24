"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import LaurelIcon from "./LaurelIcon";
import StreakBadge from "./StreakBadge";
import { FlagGB, FlagFR } from "./FlagIcon";
import { PRIMARY_BUTTON, SECONDARY_BUTTON, SHARE_BUTTON, GAME_TITLE } from "@/lib/theme";
import { UI_STRINGS, type Lang } from "@/lib/i18n";
import type { GameMode } from "@/lib/poc-events";
import { getCurrentStreak } from "@/lib/daily-streak";

const LANGS: Lang[] = ["en", "fr"];
const LANG_FLAGS: Record<Lang, typeof FlagGB> = { en: FlagGB, fr: FlagFR };

type Props = { onStart: (mode: GameMode, archiveDate?: string) => void };

// A plain list of past-day buttons instead of `<input type="date">` — the
// native calendar popup can't be restyled to match the app's theme, and it
// looks out of place next to it. Archive can't reach today's (or a future)
// pack — that's the live daily challenge, gated separately — so this starts
// at yesterday.
//
// First real day the daily challenge went live — pickDailyEvents(date) will
// happily compute a "pack" for any date, including ones before the game
// existed, so this is what keeps the archive from offering fake pre-launch
// days. Bump this only if the launch date genuinely changes, never to
// backfill more history.
const ARCHIVE_LAUNCH_DATE = "2026-09-23";
// Caps how far back the list scrolls once there's real history to show.
const ARCHIVE_MAX_DAYS = 10;

function pastDates(): string[] {
  const dates: string[] = [];
  const cursor = new Date();
  cursor.setUTCDate(cursor.getUTCDate() - 1); // start at yesterday
  while (dates.length < ARCHIVE_MAX_DAYS) {
    const iso = cursor.toISOString().slice(0, 10);
    if (iso < ARCHIVE_LAUNCH_DATE) break;
    dates.push(iso);
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return dates;
}

function formatArchiveDate(iso: string, lang: Lang): string {
  const date = new Date(`${iso}T00:00:00.000Z`);
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(date);
}

export default function LandingClient({ onStart }: Props) {
  const { lang, setLang, t } = useLanguage();
  const [linkCopied, setLinkCopied] = useState(false);
  const [streak] = useState(getCurrentStreak);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveDates] = useState(pastDates);
  const [archiveDate, setArchiveDate] = useState(archiveDates[0]);

  async function share() {
    const url = window.location.origin;
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
    <div className="final-spotlight flex w-full flex-1 flex-col items-center">
      <div className="relative flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-4 py-10 text-center">
        <StreakBadge streak={streak} className="absolute right-4 top-3 text-[10px] sm:top-4 sm:text-xs" />
        <h1 className="flex flex-col items-center gap-4">
          <LaurelIcon className="h-28 w-28 shrink-0 text-amber-400" />
          <span className={`${GAME_TITLE} text-4xl`}>{t.gameTitle}</span>
        </h1>

        <div className="-mt-3 flex gap-2">
          {LANGS.map((option) => {
            const Flag = LANG_FLAGS[option];
            const selected = lang === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setLang(option)}
                className={
                  (selected ? "text-blue-400" : "text-slate-500 hover:text-slate-300") +
                  " flex flex-col items-center gap-1 px-3 py-1 text-sm font-bold uppercase tracking-wide transition"
                }
              >
                <Flag className={`h-5 w-8 rounded-sm shadow-sm ${selected ? "" : "grayscale opacity-50"}`} />
                {option.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Both languages stacked in the same grid cell (one hidden via
            `invisible`, which still occupies layout space) so the row's
            auto height is always the taller of the two — switching
            language can't shrink/grow this block and shove everything
            else on the page up or down. */}
        <div className="grid w-full">
          {LANGS.map((l) => (
            <p
              key={l}
              aria-hidden={l !== lang}
              className={`col-start-1 row-start-1 italic text-white ${l === lang ? "" : "invisible"}`}
            >
              {UI_STRINGS[l].landingIntro}
            </p>
          ))}
        </div>

        <div className="flex w-full flex-col gap-2">
          <button type="button" onClick={() => onStart("daily")} className={PRIMARY_BUTTON + " w-full px-10"}>
            {t.dailyChallenge}
          </button>

          {archiveDates.length > 0 && (
            <button type="button" onClick={() => setArchiveOpen(true)} className={SECONDARY_BUTTON + " w-full px-10"}>
              {t.archiveMode}
            </button>
          )}

          <button type="button" onClick={share} className={SHARE_BUTTON + " w-full px-10"}>
            {linkCopied ? t.linkCopied : t.share}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {archiveOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setArchiveOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-lg border-2 border-amber-400/60 bg-slate-950 p-5 text-left shadow-xl shadow-black/60"
            >
              <button
                type="button"
                onClick={() => setArchiveOpen(false)}
                aria-label={t.close}
                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-amber-400/40 text-sm font-black text-amber-300 transition hover:bg-amber-400/10"
              >
                ✕
              </button>

              <h2 className="pr-8 text-sm font-black uppercase tracking-wide text-amber-400">{t.archiveMode}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-white/40">{t.archivePickDate}</p>

              <div className="themed-scroll mt-3 flex max-h-56 flex-col gap-1.5 overflow-y-auto pr-1">
                {archiveDates.map((iso) => {
                  const selected = iso === archiveDate;
                  return (
                    <button
                      key={iso}
                      type="button"
                      onClick={() => setArchiveDate(iso)}
                      className={
                        "shrink-0 rounded-md border-2 px-3 py-2 text-left text-sm font-bold capitalize transition " +
                        (selected
                          ? "border-amber-400 bg-amber-400/15 text-amber-300"
                          : "border-white/10 text-white/60 hover:border-amber-400/40 hover:text-white")
                      }
                    >
                      {formatArchiveDate(iso, lang)}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => onStart("archive", archiveDate)}
                className={PRIMARY_BUTTON + " mt-4 w-full"}
              >
                {t.start}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
