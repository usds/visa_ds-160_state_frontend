import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
