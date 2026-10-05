import type { MetadataRoute } from "next";
import { APP_ICON_BACKGROUND } from "@/lib/app-icon";

// Makes the site installable ("Add to Home Screen"): opens full-screen from
// its own icon. On iOS, installing is also what unlocks push notifications
// (see ReminderPrompt.tsx).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Laurus",
    short_name: "Laurus",
    description: "Guess where five real historical events happened, then put them in order in the final round.",
    start_url: "/",
    display: "standalone",
    background_color: APP_ICON_BACKGROUND,
    theme_color: APP_ICON_BACKGROUND,
    icons: [
      { src: "/app-icon/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/app-icon/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/app-icon/512", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
