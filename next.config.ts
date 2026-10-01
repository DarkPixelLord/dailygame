import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only route badge, bottom-left by default — off so it doesn't show
  // up in local screen recordings/promo captures. No effect in production.
  devIndicators: false,
  // Per-deploy version, read by api/version and useReloadOnNewVersion so
  // tabs left open across a deploy reload onto the new code. The deployment
  // id (not the commit sha): deploys go out via `vercel --prod`, which can
  // ship uncommitted changes under an unchanged sha.
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.VERCEL_DEPLOYMENT_ID ?? process.env.VERCEL_GIT_COMMIT_SHA ?? "dev",
  },
};

export default nextConfig;
