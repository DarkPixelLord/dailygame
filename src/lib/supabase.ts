import { createClient } from "@supabase/supabase-js";

// Server-only client, uses the secret key (bypasses RLS) — never import this
// from a "use client" component. Score writes/reads happen exclusively
// through our own API routes (api/finish, api/stats), the browser never
// talks to Supabase directly.
//
// IMPORTANT (Supabase change effective 2026-10-30): new tables in the public
// schema no longer get automatic Data API access. Even service_role calls go
// through the Data API, so any NEW table needs an explicit grant or this
// client gets "permission denied" on it:
//   grant select, insert, update, delete on public.your_table to service_role;
// Run this in the Supabase SQL editor right after creating the table.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
);
