require("dotenv").config();

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  },
  assetPrefix: process.env.SERVER_ROOT,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
};
