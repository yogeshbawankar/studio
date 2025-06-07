import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // ✅ Enable static export mode
  output: 'export',

  // ✅ Base path setup for GitHub Pages (since your repo is `/studio`)
  basePath: isProd ? '/studio' : '',
  assetPrefix: isProd ? '/studio/' : '',

  // ✅ Existing config retained
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // ✅ Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
