import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/githubpages",
  assetPrefix: "/githubpages/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
