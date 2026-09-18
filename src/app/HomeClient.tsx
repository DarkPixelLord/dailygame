"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { GameMode } from "@/lib/poc-events";

// Both read localStorage (language, and inside the game, MapLibre touches
// `window`), so neither can be server-rendered.
const LandingClient = dynamic(() => import("@/components/LandingClient"), { ssr: false });
const HistoryGuessPoc = dynamic(() => import("@/components/HistoryGuessPoc"), { ssr: false });

export default function HomeClient() {
  const [mode, setMode] = useState<GameMode | null>(null);

  if (!mode) {
    return <LandingClient onStart={setMode} />;
  }

  return <HistoryGuessPoc mode={mode} onPlayAgain={() => setMode(null)} />;
}
