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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/* tslint:disable-next-line:no-var-requires */
var styles = require("./Header.module.css");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("header", { className: styles.header },
            React.createElement("h1", null,
                "Hello, ",
                this.props.title),
            React.createElement("h3", null,
                "Header background Color from PostCSS => var(--headerBackground): ",
                styles.header_bg)));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=Header.js.map