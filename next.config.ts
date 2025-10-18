import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      new URL('https://cdn.simpleicons.org/typescript/3178C6'),
      new URL('https://cdn.simpleicons.org/nodedotjs/5FA04E'),
      new URL('https://cdn.simpleicons.org/postgresql/4169E1'),
      new URL('https://cdn.simpleicons.org/docker/2496ED'),
    ],
  },
};

export default nextConfig;
