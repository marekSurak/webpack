const { resolve } = require("path");
const webpackValidator = require("webpack-validator");

module.exports = () => {
  return webpackValidator({
    context: resolve("src"),
    entry: "./bootstrap.js",
    output: {
      path: resolve("dist"),
      publicPath: "/dist/",
      filename: "bundle.js",
    },
    devtool: "source-map",
  });
};
