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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ViewerItem_1 = require("../ViewerItem/ViewerItem");
/* tslint:disable:no-var-requires */
var styles = require("./Viewer.module.css");
// Since TypeScript 2.3 it doesn´t import ViewerItemCardType on this way we need to use require
// import {ViewerItemCardType} from "../ViewerItem/ViewerItemCardType";
var cardType = require("../ViewerItem/ViewerItemCardType");
var Viewer = (function (_super) {
    __extends(Viewer, _super);
    function Viewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Viewer.prototype.render = function () {
        var _a = this.props, id = _a.id, article = _a.article;
        return (React.createElement("section", { id: id, className: styles.container },
            React.createElement("div", { className: styles.big },
                React.createElement(ViewerItem_1.default, __assign({}, article, { typeSingleton: cardType.ViewerItemCardType.Big }))),
            React.createElement("div", { className: styles.medium },
                React.createElement(ViewerItem_1.default, __assign({}, article, { typeSingleton: cardType.ViewerItemCardType.Medium }))),
            React.createElement("div", { className: styles.small },
                React.createElement(ViewerItem_1.default, __assign({}, article, { typeSingleton: cardType.ViewerItemCardType.Small })))));
    };
    return Viewer;
}(React.Component));
exports.default = Viewer;
//# sourceMappingURL=Viewer.js.map