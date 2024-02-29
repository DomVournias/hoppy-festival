const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { withNextVideo } = require("next-video/process");

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

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = withNextVideo(nextConfig);
