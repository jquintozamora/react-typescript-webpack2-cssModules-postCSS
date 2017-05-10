"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * complex enum simple emulation
 *      kind of Factory with static singleton ViewerItemCardType constants
 *
 *  Resources:
 *  - TypeScript enums: https://github.com/Microsoft/TypeScript/issues/1206#issuecomment-296441490
 *  - Using real factory sample: https://github.com/torokmark/contact-me/issues/2
 *  - More about enums: https://basarat.gitbooks.io/typescript/content/docs/enums.html#enum-with-static-functions
 *  - Singleton: https://basarat.gitbooks.io/typescript/docs/tips/singleton.html
 *  - Similar sample: https://codepen.io/ImagineProgramming/pen/GZMXWe?editors=0010#0
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
ViewerItemCardType.All = [
    ViewerItemCardType.Big,
    ViewerItemCardType.Medium,
    ViewerItemCardType.Small
];
exports.ViewerItemCardType = ViewerItemCardType;
//# sourceMappingURL=ViewerItemCardType.js.map