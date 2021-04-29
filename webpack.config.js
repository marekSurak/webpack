const { resolve } = require("path");
const webpackValidator = require("webpack-validator");

module.exports = (env) => {
  return webpackValidator({
    context: resolve("src"),
    entry: "./bootstrap.js",
    output: {
      path: resolve("dist"),
      publicPath: "/dist/",
      filename: "bundle.js",
    },
    devtool: env.prod ? "source-map" : "eval",
  });
};
