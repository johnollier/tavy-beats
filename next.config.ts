import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
};

export default nextConfig;
