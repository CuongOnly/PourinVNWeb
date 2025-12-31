import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arman-borkhani.github.io',
        pathname: '/**',
        port: '',
      },
      
    ],
    unoptimized: true,
    domains: ['images.unsplash.com', 'omo-oss-image.thefastimg.com'],
  },
};

export default nextConfig;
