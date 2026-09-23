import { cookies } from "next/headers";

// Single shared password for the internal stats dashboard — no accounts,
// just a cookie gate. Good enough for a solo-admin tool; not meant to hold
// up against a determined attacker with access to the browser's cookie jar.
export const DASHBOARD_COOKIE = "dailygame_dashboard_auth";

export async function isDashboardAuthed(): Promise<boolean> {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return false;
  const cookieStore = await cookies();
  return cookieStore.get(DASHBOARD_COOKIE)?.value === password;
}
