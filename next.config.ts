import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The deploy wipes .next/cache to keep the VM disk from filling up, so
    // a persisted Turbopack build cache is never reused. Skip writing it.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
