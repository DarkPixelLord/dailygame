import webpush from "web-push";

// Server-only. Daily-reminder push notifications: subscriptions are stored in
// push_subscriptions (schema in docs/push-reminders.md) by api/push and sent
// once a day by api/cron/daily-reminder.

// Browser push services only. Rejecting any other endpoint host stops
// api/push from being used to make the daily cron POST to arbitrary URLs.
const PUSH_SERVICE_HOSTS = [
  /^fcm\.googleapis\.com$/, // Chrome, Edge, Android
  /\.push\.services\.mozilla\.com$/, // Firefox
  /\.notify\.windows\.com$/, // legacy Edge
  /(^|\.)push\.apple\.com$/, // Safari, iOS home-screen apps
];

export function isPushServiceEndpoint(endpoint: string): boolean {
  try {
    const url = new URL(endpoint);
    return url.protocol === "https:" && PUSH_SERVICE_HOSTS.some((host) => host.test(url.hostname));
  } catch {
    return false;
  }
}

let configured = false;

// Lazy so a missing key fails the request that needs it, not the build.
export function getWebPush() {
  if (!configured) {
    webpush.setVapidDetails(
      "https://laurus.vercel.app",
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
      process.env.VAPID_PRIVATE_KEY!,
    );
    configured = true;
  }
  return webpush;
}
