"use client";

import { useState, type ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";
import JourneyBadge from "./journey/JourneyBadge";
import { useReminder } from "@/lib/use-reminder";
import { chromeIntentUrl, isIos, isSamsungInternet, isStandalone, promptInstall, useCanPromptInstall } from "@/lib/pwa";

// Top bar of the landing: daily-reminder bell and "add to home screen" on
// the left, streak/journey badge on the right. The two left controls are the
// permanent place to manage both (the end-of-game ReminderPrompt only offers
// the reminder); each one disappears where it can't do anything.

// Same pill shape as JourneyBadge, so the three header controls read as one set.
const PILL_BUTTON =
  "flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-black/30 px-2.5 py-1 text-[10px] font-bold transition hover:border-amber-400/70 hover:bg-amber-400/10 disabled:opacity-40 sm:text-xs";

// svgrepo.com #535206 (bell) and #514110 (download-cloud), solid, in the
// the game's amber accent, like JourneyBadge's streak count and chevron;
// orange stays reserved for the streak flame.
function BellIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-amber-300" aria-hidden>
      <path d="M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5V8L15 10V12H1V10L3 8V5Z" />
      <path d="M7.99999 16C6.69378 16 5.58254 15.1652 5.1707 14H10.8293C10.4175 15.1652 9.30621 16 7.99999 16Z" />
    </svg>
  );
}

function InstallIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className="h-3.5 w-3.5 text-amber-300" aria-hidden>
      <path d="M0 16q0 2.912 1.824 5.088t4.576 2.752q0.032 0 0.032-0.032v-0.064t0.032-0.032q0.544-1.344 1.344-2.176t2.208-1.184v-2.336q0-2.496 1.728-4.256t4.256-1.76 4.256 1.76 1.76 4.256v2.336q1.376 0.384 2.176 1.216t1.344 2.144l0.096 0.288h0.384q2.464 0 4.224-1.76t1.76-4.224v-2.016q0-2.464-1.760-4.224t-4.224-1.76q-0.096 0-0.32 0.032 0.32-1.152 0.32-2.048 0-3.296-2.368-5.632t-5.632-2.368q-2.88 0-5.056 1.824t-2.784 4.544q-1.152-0.352-2.176-0.352-3.296 0-5.664 2.336t-2.336 5.664v1.984zM10.016 25.824q-0.096 0.928 0.576 1.6l4 4q0.576 0.576 1.408 0.576t1.408-0.576l4-4q0.672-0.672 0.608-1.6-0.064-0.32-0.16-0.576-0.224-0.576-0.736-0.896t-1.12-0.352h-1.984v-5.984q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v5.984h-2.016q-0.608 0-1.12 0.352t-0.736 0.896q-0.096 0.288-0.128 0.576z" />
    </svg>
  );
}

// Small panel under a header button; tapping anywhere else closes it.
function Popover({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  return (
    <>
      <button type="button" aria-hidden tabIndex={-1} onClick={onClose} className="fixed inset-0 z-10 cursor-default" />
      <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-md border-2 border-white/10 bg-slate-900 px-3 py-2 text-left text-xs text-white/80 shadow-lg shadow-black/40">
        {children}
      </div>
    </>
  );
}

function ReminderBell() {
  const { t, lang } = useLanguage();
  const { state, busy, error, blocked, braveBlocked, subscribe, unsubscribe } = useReminder(lang);
  const [open, setOpen] = useState(false);

  if (state === "hidden") return null;

  function click() {
    if (state === "offer") {
      // One tap goes straight to the browser's permission prompt; the panel
      // only opens if there's something to explain.
      setOpen(true);
      void subscribe();
      return;
    }
    setOpen((value) => !value);
  }

  let content: ReactNode = null;
  if (state === "subscribed") {
    content = (
      <p>
        {t.reminderOn} ·{" "}
        <button type="button" onClick={unsubscribe} disabled={busy} className="underline hover:text-white">
          {t.reminderTurnOff}
        </button>
      </p>
    );
  } else if (state === "ios-install") {
    content = <p>{t.reminderIosInstall}</p>;
  } else if (blocked) {
    content = <p>{t.reminderBlocked}</p>;
  } else if (braveBlocked) {
    content = <p>{t.reminderBrave}</p>;
  } else if (error) {
    content = (
      <p className="text-red-300/80">
        {t.reminderFailed} ({error})
      </p>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={click}
        disabled={busy}
        aria-label={state === "subscribed" ? t.reminderOn : t.reminderOffer}
        title={state === "subscribed" ? t.reminderOn : t.reminderOffer}
        className={`${PILL_BUTTON} text-white/80`}
      >
        <BellIcon />
        {t.headerReminder}
        {state === "subscribed" && <span className="text-amber-300">✓</span>}
      </button>
      {open && content && <Popover onClose={() => setOpen(false)}>{content}</Popover>}
    </div>
  );
}

function InstallButton() {
  const { t } = useLanguage();
  const canPromptInstall = useCanPromptInstall();
  const [ios] = useState(() => isIos() && !isStandalone());
  const [samsung] = useState(isSamsungInternet);
  const [installed] = useState(isStandalone);
  const [open, setOpen] = useState(false);
  // Never trigger Samsung's install: it ends on a Play Protect "unsafe app"
  // warning with our name on it. Explain and offer Chrome instead.
  const canPrompt = canPromptInstall && !samsung;

  if (installed || (!canPrompt && !ios && !samsung)) return null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => (canPrompt ? void promptInstall() : setOpen((value) => !value))}
        aria-label={t.installTitle}
        title={t.installTitle}
        className={`${PILL_BUTTON} text-white/80`}
      >
        <InstallIcon />
        {t.headerApp}
      </button>
      {open && (
        <Popover onClose={() => setOpen(false)}>
          {samsung ? (
            <div className="flex flex-col gap-2">
              <p>{t.installSamsungHint}</p>
              <a href={chromeIntentUrl()} className="self-start font-bold text-amber-300 underline">
                {t.openInChrome}
              </a>
            </div>
          ) : (
            <p>{t.installIosHint}</p>
          )}
        </Popover>
      )}
    </div>
  );
}

export default function LandingHeader({ streak }: { streak: number }) {
  return (
    <div className="absolute inset-x-4 top-3 flex items-center justify-between sm:top-4">
      <div className="flex items-center gap-2">
        <ReminderBell />
        <InstallButton />
      </div>
      <JourneyBadge streak={streak} className="text-[10px] sm:text-xs" />
    </div>
  );
}
