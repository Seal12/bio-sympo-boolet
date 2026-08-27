import type { NextConfig } from "next";

/** GitHub Pages custom domain: https://bio-sympo.vividhouse.co.za/ */

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
