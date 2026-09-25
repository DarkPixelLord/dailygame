import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Roman inscription-style serif for the "Laurus" wordmark — the one
// deliberately "historic" accent against the rest of the arcade-bold UI.
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const DESCRIPTION = "Guess where five real historical events happened, then put them in order in the final round.";

// VERCEL_URL is this specific deployment's own hashed URL (e.g.
// dailygame-fb4mz2ct1-x.vercel.app), which is protected and unreachable by
// link-preview crawlers — VERCEL_PROJECT_PRODUCTION_URL is the stable public
// production domain (e.g. dailygame-x.vercel.app) and is what OG image URLs
// must resolve against.
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Laurus",
  description: DESCRIPTION,
  openGraph: {
    title: "Laurus",
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laurus",
    description: DESCRIPTION,
  },
  // Domain-ownership proof for the Alldle directory listing (docs/promotion.md).
  // "google": "notranslate" tells Chrome/Google Translate not to offer
  // translation for this page at all — the game already has its own EN/FR
  // switcher (LanguageProvider), and browser auto-translate rewrites the DOM
  // outside React's control, which crashes the app (see LanguageProvider.tsx
  // for the confirmed removeChild crash this caused on mobile).
  other: {
    "alldle-verify": "Oom0I4WiKSySO08DFb9TfYaLNBMMsAkK",
    google: "notranslate",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      translate="no"
      className={`notranslate ${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
