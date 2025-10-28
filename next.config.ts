import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static1.colliderimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.vercel-dns-017.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
