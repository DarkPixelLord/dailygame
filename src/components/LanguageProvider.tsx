"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { UI_STRINGS, type Lang, type UiStrings } from "@/lib/i18n";

const STORAGE_KEY = "dailygame-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: UiStrings;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "fr" || stored === "en" ? stored : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — ignore
    }
  }

  // layout.tsx's <html lang="en"> is static — without this, the tag never
  // reflects an actual French render, which mismatches the real page
  // content. Browsers use that mismatch as a signal to auto-offer/trigger
  // translation, which rewrites the DOM outside React's control and crashes
  // it (NotFoundError: removeChild — confirmed via remote debugging on
  // Chrome Android and an iPhone 12, both auto-translating French content
  // under an "en" tag). The game already has its own EN/FR switcher, so
  // browser translation is redundant anyway — see the notranslate meta/class
  // in layout.tsx, which blocks it outright rather than just relying on this
  // to reduce how often it misfires.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: UI_STRINGS[lang] }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
