///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 2 PROD Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  WebPack 2 Migrating guide: https://webpack.js.org/guides/migrating/
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    target: 'web',
    entry: {
        'bundle': './app/src/index.tsx'
    },
    context: resolve(__dirname, '../'),
    output: {
        path: resolve(__dirname, './../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
            },
            'DEBUG': false,                                 // Doesn´t have effect on my example
            '__DEVTOOLS__': false                           // Doesn´t have effect on my example
        }),
        new ExtractTextPlugin({
            filename: '../dist/main.css',
            allChunks: true
        }),
        // Plugings for optimizing size and performance.
        // Here you have all the available by now:
        //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
        //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                drop_debugger: true,
                global_defs: {
                    __REACT_HOT_LOADER__: undefined // eslint-disable-line no-undefined
                }
            },
            minimize: true,
            debug: false,
            sourceMap: true,
            output: {
                comments: false
            },

        }),
        // Included by default in webpack 2
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
        // loaders -> rules in webpack 2
        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    '/node_modules/'
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/i,
                include: resolve(__dirname, './../app/stylesheets'),  // Use include instead exclude to improve the build performance
                loader: ExtractTextPlugin.extract({
                    //fallback: 'style-loader',
                    fallbackLoader: 'style-loader',
                    //use: [
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                minimize: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [
                                    require("postcss-import")({
                                        //If you are using postcss-import v8.2.0 & postcss-loader v1.0.0 or later, this is unnecessary.
                                        //addDependencyTo: webpack // Must be first item in list
                                    }),
                                    require("postcss-nesting")(),  // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                                    require("postcss-simple-vars")(),
                                    require("autoprefixer")({
                                        browsers: ['last 2 versions', 'ie >= 9'] //https://github.com/ai/browserslist
                                    })
                                ],
                            },
                        }
                    ]
                })
            }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }
};
