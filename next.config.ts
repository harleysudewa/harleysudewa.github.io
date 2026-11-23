import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.2.154",
    "192.168.2.154:3001",
    "localhost",
    "localhost:3001",
  ],
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
