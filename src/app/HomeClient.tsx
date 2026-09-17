"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Both read localStorage (language, and inside the game, MapLibre touches
// `window`), so neither can be server-rendered.
const LandingClient = dynamic(() => import("@/components/LandingClient"), { ssr: false });
const HistoryGuessPoc = dynamic(() => import("@/components/HistoryGuessPoc"), { ssr: false });

export default function HomeClient() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <LandingClient onStart={() => setStarted(true)} />;
  }

  return <HistoryGuessPoc />;
}
