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
var styles = require("./AsyncLoading.module.css");
var AsyncLoading = (function (_super) {
    __extends(AsyncLoading, _super);
    function AsyncLoading(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.lazyLoadingMomentJs = function () {
            // if we use moment inside System.import then we will use lazy loading
            System.import(/* webpackChunkName: "momentjs" */ "moment")
                .then(function (moment) {
                // lazyModule has all of the proper types, autocomplete works,
                // type checking works, code references work \o/
                var time = moment().format();
                console.log(time);
                _this.setState({ time: time });
            })
                .catch(function (err) {
                console.log("Failed to load moment", err);
            });
        };
        // Default State values
        _this.state = {
            time: "No time"
        };
        return _this;
    }
    AsyncLoading.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { className: styles.button, onClick: this.lazyLoadingMomentJs }, "Lazy Load momentjs"),
            React.createElement("div", { className: styles.time }, this.state.time),
            React.createElement("div", null,
                "Font-family: ",
                styles.fontFamily)));
    };
    AsyncLoading.prototype.loadingMomentJs = function () {
        // note, if we have at least one reference to moment in our code without lazyLoading
        // involved, then the module will be included in the bundle by webpack
        // moment().format();
    };
    return AsyncLoading;
}(React.Component));
exports.default = AsyncLoading;
//# sourceMappingURL=AsyncLoading.js.map