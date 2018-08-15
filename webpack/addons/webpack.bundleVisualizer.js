///////////////////////////////////////////////////////////
//  WebPack Bundler Visualizer addon
//      You can also upload your stats.json
//      to http://webpack.github.io/analyse/
///////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
///////////////////////////////////////////////////////////

const Visualizer = require("webpack-visualizer-plugin");
const path = require("path");
const commonPaths = require("../common-paths");

const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString("en-GB").replace(/\//g, "-");
const currentTime = currentDateTime
  .toLocaleTimeString("en-GB", { hour12: false })
  .replace(/:/g, "-");
const fileDateTime = currentDate + "-" + currentTime;
const filename = path.join(
  commonPaths.bundleVisualizerStatsPath,
  "statistics-" + fileDateTime + ".html"
);
console.log("Generating stats html file here: " + filename);
module.exports = {
  plugins: [new Visualizer({ filename })]
};
