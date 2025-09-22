import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [new URL("https://www.freetogame.com/**")],
    },
};

export default nextConfig;
