import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
