// The deployment this server runs, inlined at build (see next.config.ts).
// Clients compare it to the version they loaded with, so a tab left open
// across a deploy (a daily game often is) can reload onto the new code.
export function GET() {
  return Response.json(
    { version: process.env.NEXT_PUBLIC_APP_VERSION },
    { headers: { "Cache-Control": "no-store" } },
  );
}
