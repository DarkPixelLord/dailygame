import { supabase } from "@/lib/supabase";
import { isPushServiceEndpoint } from "@/lib/push";

const MAX_KEY_LENGTH = 256;

function isShortString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= MAX_KEY_LENGTH;
}

async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  try {
    return ((await request.json()) ?? {}) as Record<string, unknown>;
  } catch {
    return null;
  }
}

// Subscribes this browser to the daily-challenge reminder. Body: the
// browser's PushSubscription (JSON-serialized) plus the UI language, so the
// reminder is sent in the language the player plays in.
export async function POST(request: Request) {
  const body = await readBody(request);
  if (!body) return Response.json({ error: "Invalid JSON body" }, { status: 400 });

  const { subscription, lang, deviceId } = body;
  const { endpoint, keys } = (subscription ?? {}) as { endpoint?: unknown; keys?: { p256dh?: unknown; auth?: unknown } };

  if (
    typeof endpoint !== "string" ||
    endpoint.length > 1024 ||
    !isPushServiceEndpoint(endpoint) ||
    !isShortString(keys?.p256dh) ||
    !isShortString(keys?.auth) ||
    (lang !== "en" && lang !== "fr")
  ) {
    return Response.json({ error: "Invalid subscription" }, { status: 400 });
  }

  const device = isShortString(deviceId) ? deviceId : null;
  const { error } = await supabase.from("push_subscriptions").upsert(
    { endpoint, p256dh: keys.p256dh, auth: keys.auth, lang, device_id: device },
    { onConflict: "endpoint" },
  );

  if (error) return Response.json({ error: "Couldn't save subscription" }, { status: 500 });

  // One reminder per device: an Android app installed from Chrome shares
  // Chrome's storage (same device id) but gets its own push endpoint, so
  // subscribing in both would send two notifications every morning. Keep
  // only the newest. Best-effort: a leftover duplicate isn't worth a 500.
  if (device) {
    await supabase.from("push_subscriptions").delete().eq("device_id", device).neq("endpoint", endpoint);
  }
  return Response.json({ ok: true });
}

// Unsubscribes: body { endpoint }.
export async function DELETE(request: Request) {
  const body = await readBody(request);
  const endpoint = body?.endpoint;
  if (typeof endpoint !== "string" || !endpoint) {
    return Response.json({ error: "Invalid endpoint" }, { status: 400 });
  }

  const { error } = await supabase.from("push_subscriptions").delete().eq("endpoint", endpoint);
  if (error) return Response.json({ error: "Couldn't delete subscription" }, { status: 500 });
  return Response.json({ ok: true });
}
