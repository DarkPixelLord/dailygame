import { supabase } from "@/lib/supabase";
import { getWebPush } from "@/lib/push";

// Called once a day by Vercel Cron (schedule in vercel.json). Vercel sends
// "Authorization: Bearer $CRON_SECRET" when that env var is set; without it
// the route refuses to run, so nobody else can trigger a mass send.

const MESSAGES = {
  fr: { title: "Le défi du jour est en ligne", body: "5 nouveaux événements à situer. Garde ta série !" },
  en: { title: "Today's challenge is live", body: "5 new events to place. Keep your streak going!" },
} as const;

// Sends in batches so a large list doesn't open thousands of sockets at once.
const BATCH_SIZE = 50;

type SubscriptionRow = { endpoint: string; p256dh: string; auth: string; lang: string };

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase.from("push_subscriptions").select("endpoint, p256dh, auth, lang");
  if (error) return Response.json({ error: "Couldn't load subscriptions" }, { status: 500 });

  const webpush = getWebPush();
  const rows = (data ?? []) as SubscriptionRow[];
  const expired: string[] = [];
  let sent = 0;
  let failed = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const results = await Promise.allSettled(
      batch.map((row) =>
        webpush.sendNotification(
          { endpoint: row.endpoint, keys: { p256dh: row.p256dh, auth: row.auth } },
          JSON.stringify({ ...(row.lang === "fr" ? MESSAGES.fr : MESSAGES.en), url: "/" }),
          { TTL: 12 * 60 * 60 },
        ),
      ),
    );
    results.forEach((result, j) => {
      if (result.status === "fulfilled") {
        sent++;
        return;
      }
      failed++;
      // 404/410: the player revoked permission or uninstalled, the
      // subscription is dead for good.
      const status = (result.reason as { statusCode?: number })?.statusCode;
      if (status === 404 || status === 410) expired.push(batch[j].endpoint);
    });
  }

  if (expired.length > 0) {
    await supabase.from("push_subscriptions").delete().in("endpoint", expired);
  }

  return Response.json({ total: rows.length, sent, failed, expired: expired.length });
}
