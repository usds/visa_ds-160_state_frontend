import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/site/[ownername]/[projectname]",
};

export default nextConfig;
