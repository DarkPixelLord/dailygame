"use client";

import { useLanguage } from "./LanguageProvider";
import { useReminder } from "@/lib/use-reminder";

// Opt-in daily-challenge reminder, shown under the end-of-game buttons (the
// landing header bell is the other entry point, see LandingHeader.tsx).
// No way to dismiss the offer: it stays as a quiet line under the buttons.
export default function ReminderPrompt() {
  const { t, lang } = useLanguage();
  const { state, busy, error, blocked, braveBlocked, subscribe, unsubscribe } = useReminder(lang);

  if (state === "hidden") return null;

  if (state === "subscribed") {
    return (
      <p className="text-center text-xs text-white/50">
        🔔 {t.reminderOn} ·{" "}
        <button type="button" onClick={unsubscribe} disabled={busy} className="underline hover:text-white/80">
          {t.reminderTurnOff}
        </button>
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {state === "offer" ? (
        <button
          type="button"
          onClick={subscribe}
          disabled={busy}
          className="rounded-md border-2 border-white/15 px-3 py-1.5 text-xs font-bold text-white/80 transition hover:bg-white/5 disabled:opacity-40 sm:text-sm"
        >
          🔔 {t.reminderOffer}
        </button>
      ) : (
        <p className="text-center text-xs text-white/60 sm:text-sm">🔔 {t.reminderIosInstall}</p>
      )}
      {blocked && <p className="text-center text-xs text-white/60">{t.reminderBlocked}</p>}
      {braveBlocked && <p className="text-center text-xs text-white/60">{t.reminderBrave}</p>}
      {error && (
        <p className="text-center text-xs text-red-300/80">
          {t.reminderFailed} ({error})
        </p>
      )}
    </div>
  );
}
