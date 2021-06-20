const path = require("path");

module.exports = {
  devServer: {
    proxy: "http://localhost:8000",
  },
  outputDir: path.resolve("../laravel-application/public/dist"),
  publicPath: "/dist",
  indexPath: path.resolve("../laravel-application/resources/views/index.html"),
};
