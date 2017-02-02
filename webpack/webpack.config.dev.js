///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack PROD Config for Actions
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  More webpack examples: https://github.com/jquintozamora/react-es6-webpack-minimal-starter-template/tree/master/webpack
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const path = require('path');
const webpack = require('webpack');

module.exports = {
    // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-module-eval-source-map',
    target: 'web',
    entry: {
        'bundle': './app/src/index.tsx'
    },
    output: {
        path: path.join(__dirname, './../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
        new webpack.HotModuleReplacementPlugin()
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
                    /node_modules/
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader',
                include: path.resolve(__dirname, './../app/src')          // Use include instead exclude to improve the build performance
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, './../app/stylesheets'),  // Use include instead exclude to improve the build performance
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1 
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
                                require("postcss-simple-vars")(),
                                require("autoprefixer")({
                                    browsers: ['last 2 versions', 'ie >= 9'] //https://github.com/ai/browserslist
                                })
                            ])
                        }
                    }
                ]
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