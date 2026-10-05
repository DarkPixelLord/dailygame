"use client";

import { useEffect, useState } from "react";
import { getDeviceId } from "./device-id";
import { isBrave, isIos, isPushSupported, isStandalone } from "./pwa";
import type { Lang } from "./i18n";

// Daily-challenge reminder (push) state and actions, shared by the
// end-of-game ReminderPrompt and the landing header bell.
// - "offer": push available (Android, desktop, iOS home-screen app).
// - "ios-install": iOS Safari tab, push only works once added to the home
//   screen, so the UI shows how to do that instead.
// - "subscribed": this browser already gets the reminder.
// - "hidden": no push at all here.
// Permission is only ever requested from a click: once refused, the browser
// never asks again, and `blocked` lets the UI explain how to re-allow it in
// the site settings.

export type ReminderState = "hidden" | "offer" | "ios-install" | "subscribed";

function isBlocked(): boolean {
  return Notification.permission === "denied";
}

function urlBase64ToUint8Array(base64: string): Uint8Array<ArrayBuffer> {
  const padded = (base64 + "=".repeat((4 - (base64.length % 4)) % 4)).replace(/-/g, "+").replace(/_/g, "/");
  const raw = window.atob(padded);
  const bytes = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

async function registerWorker(): Promise<ServiceWorkerRegistration> {
  return navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" });
}

export function useReminder(lang: Lang) {
  const [state, setState] = useState<ReminderState>("hidden");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blocked, setBlocked] = useState(false);
  const [braveBlocked, setBraveBlocked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function detect(): Promise<ReminderState> {
      if (!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY) return "hidden";
      if (isPushSupported()) {
        const registration = await registerWorker();
        if (await registration.pushManager.getSubscription()) return "subscribed";
        return "offer";
      }
      if (isIos() && !isStandalone()) return "ios-install";
      return "hidden";
    }
    detect()
      .catch(() => "hidden" as const)
      .then((next) => {
        if (!cancelled) setState(next);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function subscribe() {
    if (isBlocked()) {
      setBlocked(true);
      return;
    }
    setBusy(true);
    setError(null);
    setBlocked(false);
    setBraveBlocked(false);
    try {
      await registerWorker();
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!),
      });
      const res = await fetch("/api/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscription: subscription.toJSON(), lang, deviceId: getDeviceId() }),
      });
      if (!res.ok) {
        // Not saved server-side: undo so the offer stays.
        await subscription.unsubscribe();
        setError(`HTTP ${res.status}`);
        return;
      }
      setState("subscribed");
    } catch (err) {
      // Just refused at the prompt: their choice, no message.
      if (isBlocked()) return;
      if (isBrave()) {
        setBraveBlocked(true);
        return;
      }
      // Anything else (browser-specific push failure): say so instead of a
      // button that silently does nothing. The error name helps debugging.
      setError(err instanceof Error ? `${err.name}: ${err.message}` : String(err));
    } finally {
      setBusy(false);
    }
  }

  async function unsubscribe() {
    setBusy(true);
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        await fetch("/api/push", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: subscription.endpoint }),
        });
        await subscription.unsubscribe();
      }
      setState("offer");
    } catch {
      // leave as-is; the next cron run drops dead subscriptions anyway
    } finally {
      setBusy(false);
    }
  }

  return { state, busy, error, blocked, braveBlocked, subscribe, unsubscribe };
}
