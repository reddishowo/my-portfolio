import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
  return [
    {
      source: "/v2/:path*",
      destination: "https://my-psvita-portfolio.vercel.app/v2/:path*",
    },
  ];
},
};

export default nextConfig;
