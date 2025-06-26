import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Enable standalone build for Docker
  images: {
    domains: ['images.unsplash.com'], // Allow Unsplash images
  },
};

export default nextConfig;
