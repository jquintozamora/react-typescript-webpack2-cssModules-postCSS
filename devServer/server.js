const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opener = require('opener');
const config = require('../webpack/webpack.config.dev');
const host = 'localhost';
const port = 3000;

new WebpackDevServer(webpack(config), {
    // All the options for webpack-dev-server here: https://webpack.js.org/configuration/devtool/
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    // All the stats options here: https://webpack.js.org/configuration/stats/
    stats: {
        colors: true, // color is life
        chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
        'errors-only': true
    },
    hot: true,
    inline: false,
    historyApiFallback: true
})
.listen(port, host, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at ${host}:${port}`);
    opener(`http://${host}:${port}`);
});