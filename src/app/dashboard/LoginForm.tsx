"use client";

import { useActionState, useState } from "react";
import { loginAction } from "./actions";
import { PRIMARY_BUTTON, PANEL, GAME_TITLE } from "@/lib/theme";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex min-h-dvh w-full items-center justify-center px-4">
      <form action={formAction} className={PANEL + " flex w-full max-w-xs flex-col gap-3 px-5 py-6"}>
        <h1 className={"text-lg " + GAME_TITLE}>Dashboard</h1>
        <div className="relative">
          <input
            type={visible ? "text" : "password"}
            name="password"
            autoFocus
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="Mot de passe"
            className="w-full rounded-md border-2 border-white/10 bg-black/30 py-2 pl-3 pr-11 text-white placeholder:text-white/30 focus:border-amber-400/50 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            aria-pressed={visible}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-white/50 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
              {visible && <path d="M3 3l18 18" />}
            </svg>
          </button>
        </div>
        {state?.error && <p className="text-sm font-semibold text-red-400">{state.error}</p>}
        <button type="submit" disabled={pending} className={PRIMARY_BUTTON}>
          {pending ? "..." : "Entrer"}
        </button>
      </form>
    </div>
  );
}
