import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      {
        pathname: "/logos/**",
        search: "",
      },
      {
        pathname: "/photography/**",
        search: "",
      },
      {
        pathname: "/headshot.jpg",
        search: "",
      },
    ],
  },
};

export default nextConfig;
