import { createClient } from "@supabase/supabase-js";

// Server-only client, uses the secret key (bypasses RLS) — never import this
// from a "use client" component. Score writes/reads happen exclusively
// through our own API routes (api/finish, api/stats), the browser never
// talks to Supabase directly.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
);
