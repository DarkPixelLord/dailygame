// Service worker: only receives the daily-challenge reminder push (sent by
// api/cron/daily-reminder) and opens the game when it's tapped. No caching,
// no offline mode: every page still loads from the network.

// Take control of already-open tabs right away, so a notification tap can
// navigate them (clients.navigate only works on controlled tabs).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/app-icon/192",
      // Same tag every day: an unread reminder is replaced, never stacked.
      tag: "daily-reminder",
      data: { url: data.url || "/" },
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((windows) => {
      const open = windows.find((w) => new URL(w.url).origin === self.location.origin);
      // Reload an already-open tab onto the landing page, whatever screen it
      // was left on (e.g. yesterday's "already played"). navigate() can still
      // fail on a tab this worker doesn't control, so fall back to a new one.
      if (open) return open.focus().then((w) => w.navigate(url)).catch(() => self.clients.openWindow(url));
      return self.clients.openWindow(url);
    }),
  );
});
