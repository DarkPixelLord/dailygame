"use client";

import { useSyncExternalStore } from "react";

// Browser-side PWA helpers: platform checks shared by the reminder and the
// "add to home screen" controls, plus the captured install prompt.

export function isIos(): boolean {
  // iPadOS reports itself as a Mac; touch support gives it away.
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
}

// Opened from the home-screen icon rather than a browser tab.
export function isStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

// Samsung Internet builds its own home-screen app, which Google Play Protect
// blocks as "unsafe" (targets an old Android version). Not fixable on our
// side, so the install button sends these players to Chrome instead.
export function isSamsungInternet(): boolean {
  return /SamsungBrowser/.test(navigator.userAgent);
}

// Android intent link that opens the current page in Chrome.
export function chromeIntentUrl(): string {
  const { host, pathname } = window.location;
  return `intent://${host}${pathname}#Intent;scheme=https;package=com.android.chrome;end`;
}

// Brave turns off the Google push service by default, so subscribing fails
// with "push service error" until the player enables it in its settings.
export function isBrave(): boolean {
  return "brave" in navigator;
}

export function isPushSupported(): boolean {
  return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
}

// Chromium browsers (Chrome, Samsung Internet, Edge on Android) fire
// beforeinstallprompt once the site is installable; keeping the event lets
// our own button trigger the native install dialog later. Safari never fires
// it, hence the manual "Share → Add to Home Screen" hint on iOS. The event
// arrives early, often before the landing renders, so it's captured at
// module load (imported from HomeClient) rather than inside a component.

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

let deferredPrompt: BeforeInstallPromptEvent | null = null;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Replaces Chrome's own mini-infobar with our header button.
    event.preventDefault();
    deferredPrompt = event as BeforeInstallPromptEvent;
    notify();
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    notify();
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// True when a native install dialog can be shown right now.
export function useCanPromptInstall(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => deferredPrompt !== null,
    () => false,
  );
}

export async function promptInstall(): Promise<void> {
  const prompt = deferredPrompt;
  if (!prompt) return;
  // A prompt event can only be used once, whatever the player answers.
  deferredPrompt = null;
  notify();
  await prompt.prompt();
  await prompt.userChoice;
}
