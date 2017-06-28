"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { ViewerItemCardTypeStyles } from "./ViewerItem.inlined.css";
var ViewerItem = (function (_super) {
    __extends(ViewerItem, _super);
    function ViewerItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewerItem.prototype.render = function () {
        var _a = this.props, date = _a.date, imageSrc = _a.imageSrc, linkUrl = _a.linkUrl, summary = _a.summary, title = _a.title, typeSingleton = _a.typeSingleton;
        var summaryMaxWords = typeSingleton.summaryMaxWords;
        var finalSummary = (summary.length > summaryMaxWords) ? summary.substring(0, summaryMaxWords).concat("...") : summary;
        var titleMaxWords = typeSingleton.titleMaxWords;
        var finalTitle = (title.length > titleMaxWords) ? title.substring(0, titleMaxWords).concat("...") : title;
        // Get JS Styles
        var InlineStyles = ViewerItemCardTypeStyles(typeSingleton);
        return (React.createElement("table", { role: "presentation", "aria-hidden": "true", cellSpacing: 0, cellPadding: 0, width: "100%", style: InlineStyles.table },
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("img", { src: imageSrc, "aria-hidden": "true", width: InlineStyles.img.maxWidth, height: InlineStyles.img.height, alt: "alt_text", className: "center-on-narrow", style: InlineStyles.img }))),
                React.createElement("tr", null,
                    React.createElement("td", { style: InlineStyles.title.td },
                        React.createElement("a", { target: "_blank", style: InlineStyles.title.a, href: linkUrl }, finalTitle))),
                React.createElement("tr", null,
                    React.createElement("td", { style: InlineStyles.date }, date)),
                React.createElement("tr", null,
                    React.createElement("td", { style: InlineStyles.summary }, finalSummary)))));
    };
    return ViewerItem;
}(React.Component));
export default ViewerItem;
//# sourceMappingURL=ViewerItem.js.map