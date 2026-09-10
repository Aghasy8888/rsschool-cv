import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rsschool-cv",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
