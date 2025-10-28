import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // fallback images Google uses
      },
      {
        protocol: "https",
        hostname: "static1.colliderimages.com", // Tron placeholder sometimes uses this
      },
    ],
  },
};

export default nextConfig;
