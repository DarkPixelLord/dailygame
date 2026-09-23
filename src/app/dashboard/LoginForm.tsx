"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import { PRIMARY_BUTTON, PANEL, GAME_TITLE } from "@/lib/theme";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <div className="flex min-h-dvh w-full items-center justify-center px-4">
      <form action={formAction} className={PANEL + " flex w-full max-w-xs flex-col gap-3 px-5 py-6"}>
        <h1 className={"text-lg " + GAME_TITLE}>Dashboard</h1>
        <input
          type="password"
          name="password"
          autoFocus
          placeholder="Mot de passe"
          className="rounded-md border-2 border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-white/30 focus:border-amber-400/50 focus:outline-none"
        />
        {state?.error && <p className="text-sm font-semibold text-red-400">{state.error}</p>}
        <button type="submit" disabled={pending} className={PRIMARY_BUTTON}>
          {pending ? "..." : "Entrer"}
        </button>
      </form>
    </div>
  );
}
