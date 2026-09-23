"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import LaurelIcon from "./LaurelIcon";
import { FlagGB, FlagFR } from "./FlagIcon";
import { PRIMARY_BUTTON, SECONDARY_BUTTON, SHARE_BUTTON, GAME_TITLE } from "@/lib/theme";
import { UI_STRINGS, type Lang } from "@/lib/i18n";
import type { GameMode } from "@/lib/poc-events";

const LANGS: Lang[] = ["en", "fr"];
const LANG_FLAGS: Record<Lang, typeof FlagGB> = { en: FlagGB, fr: FlagFR };

type Props = { onStart: (mode: GameMode) => void };

export default function LandingClient({ onStart }: Props) {
  const { lang, setLang, t } = useLanguage();
  const [linkCopied, setLinkCopied] = useState(false);

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
      <div className="flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-4 py-10 text-center">
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
          <button type="button" onClick={() => onStart("free")} className={SECONDARY_BUTTON + " w-full px-10"}>
            {t.freeMode}
          </button>
          <button type="button" onClick={share} className={SHARE_BUTTON + " w-full px-10"}>
            {linkCopied ? t.linkCopied : t.share}
          </button>
        </div>
      </div>
    </div>
  );
}
