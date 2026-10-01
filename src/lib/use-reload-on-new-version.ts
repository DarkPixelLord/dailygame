"use client";

import { useEffect } from "react";

// The version this tab's code was built from. "dev" locally, where there's
// nothing to compare against.
const LOADED_VERSION = process.env.NEXT_PUBLIC_APP_VERSION;

// Throttle, so flipping between apps doesn't hit the API every time. Starts
// at load time: a freshly loaded tab is already up to date.
const MIN_CHECK_INTERVAL = 60_000;
let lastCheck = Date.now();

// Some mobile browsers (Samsung Internet notably) restore a tab from memory
// for days without reloading it, and the game never navigates, so a player
// can keep running an old deploy. While `enabled` (only on screens where a
// reload loses nothing), check whenever the tab comes back into view, and
// reload if the server now runs a newer version.
export function useReloadOnNewVersion(enabled: boolean) {
  useEffect(() => {
    if (!enabled || !LOADED_VERSION || LOADED_VERSION === "dev") return;

    async function check() {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - lastCheck < MIN_CHECK_INTERVAL) return;
      lastCheck = Date.now();
      try {
        const res = await fetch("/api/version", { cache: "no-store" });
        if (!res.ok) return;
        const { version } = (await res.json()) as { version?: string };
        if (version && version !== LOADED_VERSION) window.location.reload();
      } catch {
        // Offline or flaky network: try again next time.
      }
    }

    check();
    document.addEventListener("visibilitychange", check);
    window.addEventListener("pageshow", check);
    return () => {
      document.removeEventListener("visibilitychange", check);
      window.removeEventListener("pageshow", check);
    };
  }, [enabled]);
}
