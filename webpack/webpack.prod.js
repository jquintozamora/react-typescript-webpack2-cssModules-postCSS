/////////////////////////////////////////////////////////
//  WebPack prod settings
/////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
/////////////////////////////////////////////////////////

const commonPaths = require("./common-paths");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // Don't attempt to continue if there are any errors.
  // bail: true,

  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: "source-map",

  optimization: {
    minimize: true,
    minimizer: [
      // Plugings for optimizing size and performance.
      // Here you have all the available by now:
      //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
      //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
      //    Webpack 3. uglify-js is not external (peer) dependency.
      //              We should install version <= 2.8 by now (19/06/2017) because version 3 is not supported by plugin
      //    Webpack 4. now uglify comes under optimization
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          // https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options
          compress: {
            global_defs: {
              __REACT_HOT_LOADER__: undefined // eslint-disable-line no-undefined
            }
          },
          beautify: false,
          ecma: 6,
          comments: false,
          mangle: false
        }
      })
    ]
  },

  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.contentBasePath + "/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production") // Reduces 78 kb on React library
      },
      DEBUG: false, // Doesn´t have effect on my example
      __DEVTOOLS__: false // Doesn´t have effect on my example
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
      allChunks: true
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
    // You can remove this if you don't use Moment.js:
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  module: {
    // loaders -> rules in webpack 2
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: ["/node_modules/"]
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
            }
          }
        ],
        include: commonPaths.srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        include: commonPaths.stylesheetsPath, // Use include instead exclude to improve the build performance
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                require("postcss-import")(),
                // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                require("postcss-nesting")(),
                require("postcss-custom-properties")(),
                //https://github.com/ai/browserslist
                require("autoprefixer")()
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        include: commonPaths.srcPath,
        use: [
          MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:5]"
              },
              localsConvention: 'camelCase',
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("postcss-import")(),
                // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                require("postcss-nesting")(),
                require("postcss-custom-properties")(),
                //https://github.com/ai/browserslist
                require("autoprefixer")()
              ]
            }
          }
        ]
      }
    ]
  }
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM"
  // }
};
