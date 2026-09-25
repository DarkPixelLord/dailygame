import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only route badge, bottom-left by default — off so it doesn't show
  // up in local screen recordings/promo captures. No effect in production.
  devIndicators: false,
};

export default nextConfig;
