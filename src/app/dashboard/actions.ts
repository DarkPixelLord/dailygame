"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DASHBOARD_COOKIE } from "@/lib/dashboard-auth";

export async function loginAction(_prevState: { error?: string } | undefined, formData: FormData) {
  const password = formData.get("password");
  const expected = process.env.DASHBOARD_PASSWORD;

  if (!expected || password !== expected) {
    return { error: "Mot de passe incorrect." };
  }

  const cookieStore = await cookies();
  cookieStore.set(DASHBOARD_COOKIE, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(DASHBOARD_COOKIE);
  redirect("/dashboard");
}
