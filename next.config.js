const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "localhost"],
    disableStaticImages: true,
  },
  basePath:
    process.env.DEPLOY_DIR !== undefined ? `/${process.env.DEPLOY_DIR}` : "",
  assetPrefix:
    process.env.DEPLOY_DIR !== undefined ? `/${process.env.DEPLOY_DIR}/` : "",
});
