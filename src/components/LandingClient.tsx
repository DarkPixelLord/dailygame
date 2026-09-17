"use client";

import { useLanguage } from "./LanguageProvider";
import { PRIMARY_BUTTON, GHOST_BUTTON } from "@/lib/theme";
import type { Lang } from "@/lib/i18n";

type Props = { onStart: () => void };

export default function LandingClient({ onStart }: Props) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-4 py-10 text-center">
      <div className="flex gap-1">
        {(["en", "fr"] as Lang[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            className={lang === option ? GHOST_BUTTON + " bg-amber-400/20" : GHOST_BUTTON}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>

      <h1 className="text-3xl font-black uppercase tracking-tight">
        🗺️ {t.gameTitle}
      </h1>

      <p className="text-white/70">{t.landingIntro}</p>

      <button type="button" onClick={onStart} className={PRIMARY_BUTTON + " px-10"}>
        {t.start}
      </button>
    </div>
  );
}
