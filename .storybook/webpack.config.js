const config = require("../webpack/webpack.config");
module.exports = (_, __, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("ts-loader")
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  return defaultConfig;
};
