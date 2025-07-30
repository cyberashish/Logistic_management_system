import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.pixelstrap.net',
        pathname: '/mofi/assets/images/**',
      },
    ],

  },
};

export default nextConfig;
