module.exports = {
  defaultLocale: "de-DE",
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "localhost",
      "zhnniwbcigufqckcxrob.supabase.co",
    ],
    disableStaticImages: true,
  },
  basePath:
    process.env.RELEASE_BRANCH !== undefined
      ? `/${process.env.RELEASE_BRANCH}`
      : "",
  assetPrefix:
    process.env.RELEASE_BRANCH !== undefined
      ? `/${process.env.RELEASE_BRANCH}/`
      : "",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/resource",
      generator: {
        filename: "static/[hash][ext]",
      },
    });
    return config;
  },
};
