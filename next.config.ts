import type { NextConfig } from "next";

/** GitHub Pages project site: https://seal12.github.io/bio-sympo-boolet/ */
const repo = "bio-sympo-boolet";
const isGhPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGhPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: isGhPages ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
