const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "localhost"],
    disableStaticImages: true,
  },
  basePath: `/dev`,
  assetPrefix: `/dev/`,
});
