import type { NextConfig } from "next";

/** GitHub Pages project site: https://seal12.github.io/bio-sympo-boolet/ */
const repo = "bio-sympo-boolet";
const isGhPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
