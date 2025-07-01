import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Create next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Handle async setup in an IIFE instead of using top-level await
if (process.env.NODE_ENV === 'development') {
  (async () => {
    try {
      await setupDevPlatform();
    } catch (error) {
      console.error('Error setting up dev platform:', error);
    }
  })();
}

// Export the configuration with next-intl applied
export default withNextIntl(nextConfig);
