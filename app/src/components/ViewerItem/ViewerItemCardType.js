"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * defines the Factory ViewerItemCardType singleton constants
 * TODO:
 *  Check: https://codepen.io/ImagineProgramming/pen/GZMXWe?editors=0010#0
 *  Singleton: https://basarat.gitbooks.io/typescript/docs/tips/singleton.html
 */
var ViewerItemCardType = (function () {
    function ViewerItemCardType(id, name, imageHeight, imageWidth, titleMaxWords, summaryMaxWords, titleFontSize, summaryFontSize, titleMinHeight, dateMinHeight, summaryMinHeight) {
        this.id = id;
        this.name = name;
        this.imageHeight = imageHeight;
        this.imageWidth = imageWidth;
        this.titleMaxWords = titleMaxWords;
        this.summaryMaxWords = summaryMaxWords;
        this.titleFontSize = titleFontSize;
        this.summaryFontSize = summaryFontSize;
        this.titleMinHeight = titleMinHeight;
        this.dateMinHeight = dateMinHeight;
        this.summaryMinHeight = summaryMinHeight;
    }
    return ViewerItemCardType;
}());
ViewerItemCardType.Big = new ViewerItemCardType(1, "FeaturedBig", 330, 660, 110, 160, 21, 16, 68, 18, 58);
ViewerItemCardType.Medium = new ViewerItemCardType(2, "FeaturedSmall", 155, 310, 50, 125, 20, 14, 66, 16, 68);
ViewerItemCardType.Small = new ViewerItemCardType(3, "NormalArticle", 100, 200, 35, 115, 18, 12, 62, 14, 75);
exports.ViewerItemCardType = ViewerItemCardType;
//# sourceMappingURL=ViewerItemCardType.js.map