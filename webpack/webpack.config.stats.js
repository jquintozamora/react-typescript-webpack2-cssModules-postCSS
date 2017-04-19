///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack 2 STATS Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blog.josequinto.com
//
// REMEMBER UPLOAD YOUR stats.json to http://webpack.github.io/analyse/
// IMPORTANT. If you use console.log in this file, the stats.json will not work...
// TODO. Include fileDateTime in stats.json as well.
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const Visualizer = require('webpack-visualizer-plugin');

////////////////////////////////////////////////
// File name for Visualizer
////////////////////////////////////////////////
const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString('en-GB').replace(/\//g, "-");
const currentTime = currentDateTime.toLocaleTimeString('en-GB', { hour12: false }).replace(/:/g, "-");
const fileDateTime = currentDate + "-" + currentTime;
const statisticsFileName = '../webpack/stats/statistics-' + fileDateTime + '.html';
const prodConfig = require('./webpack.config.prod.js');
console.log(prodConfig);
prodConfig.plugins = prodConfig.plugins.concat(
    new Visualizer({
        filename: statisticsFileName
    }));
module.exports = prodConfig;
