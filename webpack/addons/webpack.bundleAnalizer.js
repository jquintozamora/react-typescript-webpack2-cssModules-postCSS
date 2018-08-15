const WebpackBundleAnalzyer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  plugins: [new WebpackBundleAnalzyer()]
};
