/////////////////////////////////////////////////////////
//  WebPack dev settings
/////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
/////////////////////////////////////////////////////////

const commonPaths = require("./common-paths");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || 'localhost';

module.exports = {
    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    devtool: 'inline-source-map',
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
    },
    devServer: {
        // All options here: https://webpack.js.org/configuration/dev-server/

        hot: true, // enable HMR on the server
        contentBase: commonPaths.contentBasePath, // match the output path
        publicPath: '/', // match the output `publicPath`
        host: host,
        https: protocol === 'https',
        port: DEFAULT_PORT,
        disableHostCheck: true,
        historyApiFallback: true,
        // All the stats options here: https://webpack.js.org/configuration/stats/
        stats: {
            colors: true, // color is life
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    },
    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: commonPaths.contentBasePath + '/index.html',
        }),

        // ignore *.css.d.ts which cause problems integrated with HMR
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ]),

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        // loaders -> rules in webpack 2
        rules: [
            // Once TypeScript is configured to output source maps we need to tell webpack
            // to extract these source maps and pass them to the browser,
            // this way we will get the source file exactly as we see it in our code editor.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: '/node_modules/'
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader",
                exclude: '/node_modules/'
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.ts(x?)$/,
                use: [
                    { loader: 'react-hot-loader/webpack' },
                    {
                        loader: 'ts-loader',
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
                include: commonPaths.stylesheetsPath,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            minimize: true
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => ([
                                require("postcss-import")({
                                    //If you are using postcss-import v8.2.0 & postcss-loader v1.0.0 or later, this is unnecessary.
                                    //addDependencyTo: webpack // Must be first item in list
                                }),
                                require("postcss-nesting")(),  // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                                require("postcss-custom-properties")(),
                                require("autoprefixer")({
                                    browsers: ['last 2 versions', 'ie >= 9'] //https://github.com/ai/browserslist
                                })
                            ])
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: [/node_modules/],
                include: commonPaths.srcPath,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                            minimize: false,
                            namedExport: true
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => ([
                                require("postcss-import")(),
                                // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                                require("postcss-nesting")(),
                                require("postcss-custom-properties")(),
                                //https://github.com/ai/browserslist
                                require("autoprefixer")({
                                    browsers: ['last 2 versions', 'ie >= 9']
                                })
                            ])
                        }
                    }
                ]
            }
        ]
    }
};
