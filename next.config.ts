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
    ],
  },
};

export default nextConfig;
