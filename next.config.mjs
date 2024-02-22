import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kidzfest.healthmore.gr",
        pathname: "**",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
