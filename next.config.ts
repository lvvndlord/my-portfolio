import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/https://github.com/lvvndlord/my-portfolio',
};

export default nextConfig;