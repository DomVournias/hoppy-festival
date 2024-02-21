import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

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

export default {
  ...nextConfig,
  ...withVideos(),
};
// export default withNextVideo(nextConfig);
