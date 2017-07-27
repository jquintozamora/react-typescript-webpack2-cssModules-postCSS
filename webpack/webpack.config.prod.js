///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 2 PROD Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blog.josequinto.com
//
//  WebPack 2 Migrating guide: https://webpack.js.org/guides/migrating/
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// `publicUrl` is just like `publicPath`, but we will provide it to our app
// The public URL is available as %PUBLIC_URL% in index.html, e.g.:
// In development, this will be an empty string.
const publicUrl = '.';

module.exports = {
    // Don't attempt to continue if there are any errors.
    bail: true,

    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: 'source-map',

    target: 'web',

    entry: {
        'bundle': './app/src/index.tsx'
    },

    context: resolve(__dirname, '../'),

    output: {
        // Next line is not used in dev but WebpackDevServer crashes without it
        path: resolve(__dirname, './../build'),
        // This does not produce a real file. It's just the virtual path that is
        // served by WebpackDevServer in development. This is the JS bundle
        // containing code from all our entry points, and the Webpack runtime.
        filename: 'static/js/bundle.js',
        // There are also additional JS chunk files if you use code splitting.
        chunkFilename: 'static/js/[name].chunk.js',
        // This is the URL that app is served from. We use "/" in development.
        publicPath: '/'
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    plugins: [
        // Makes some environment variables available in index.html.
        // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
        // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        new InterpolateHtmlPlugin({
            PUBLIC_URL: publicUrl
        }),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'public/index.html',
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
                minifyURLs: true,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
            },
            'DEBUG': false,                                 // Doesn´t have effect on my example
            '__DEVTOOLS__': false                           // Doesn´t have effect on my example
        }),
        new ExtractTextPlugin({
            filename: 'static/css/main.css',
            allChunks: true
        }),
        // Plugings for optimizing size and performance.
        // Here you have all the available by now:
        //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
        //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
        //    Webpack 3. uglify-js is not external (peer) dependency.
        //              We should install version <= 2.8 by now (19/06/2017) because version 3 is not supported by plugin
        new webpack.optimize.UglifyJsPlugin({
            // more info: http://lisperator.net/uglifyjs/compress
            compress: {
                sequences: true,  // join consecutive statemets with the “comma operator”
                properties: true,  // optimize property access: a["foo"] → a.foo
                dead_code: true,  // discard unreachable code
                drop_debugger: true,  // discard “debugger” statements
                unsafe: false, // some unsafe optimizations (see below)
                conditionals: true,  // optimize if-s and conditional expressions
                comparisons: true,  // optimize comparisons
                evaluate: true,  // evaluate constant expressions
                booleans: true,  // optimize boolean expressions
                loops: true,  // optimize loops
                unused: true,  // drop unused variables/functions
                hoist_funs: true,  // hoist function declarations
                hoist_vars: false, // hoist variable declarations
                if_return: true,  // optimize if-s followed by return/continue
                join_vars: true,  // join var declarations
                cascade: true,  // try to cascade `right` into `left` in sequences
                side_effects: true,  // drop side-effect-free statements
                warnings: false,  // warn about potentially dangerous optimizations/code
                global_defs: {
                    __REACT_HOT_LOADER__: undefined // eslint-disable-line no-undefined
                }
            },
            sourceMap: true,
            output: {
                comments: false
            }
            // more options: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
        }),
        // You can remove this if you don't use Moment.js:
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
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
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/i,
                include: resolve(__dirname, './../app/stylesheets'),  // Use include instead exclude to improve the build performance
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                                    require("postcss-import")(),
                                    // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                                    require("postcss-nesting")(),
                                    require("postcss-custom-properties")(),
                                    //https://github.com/ai/browserslist
                                    require("autoprefixer")({
                                        browsers: ['last 2 versions', 'ie >= 9']
                                    })
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/i,
                include: resolve(__dirname, './../app/src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
