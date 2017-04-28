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
var Viewer_1 = require("../../components/Viewer/Viewer");
/* tslint:disable:no-var-requires */
var styles = require("./App.module.css");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var article = {
            date: new Date().toLocaleDateString("en-GB").replace(/\//g, "."),
            imageSrc: "http://pipsum.com/900x450.jpg",
            linkUrl: "https://blog.josequinto.com/",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac, fermentum vitae tellus. Donec sed aliquam nisl. Sed eu leo id est pretium euismod. Nulla id justo at mi venenatis volutpat. Fusce nisi leo, placerat id condimentum a, accumsan vitae tortor. Nunc magna nunc, venenatis nec elementum eu, ultrices in sem. Maecenas tincidunt semper molestie. Nulla nec neque sit amet libero molestie feugiat. Cras id metus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis arcu non leo porta ut euismod ante luctus. Praesent elementum sodales dolor id scelerisque.</p><p>Nam vitae cursus massa. Nunc ut arcu a mi convallis feugiat. Sed ante sem, sollicitudin sed porta et, molestie in turpis. Nulla lacinia lacus nec ligula feugiat eget sagittis metus lobortis. Aenean eget velit leo, et euismod risus. Pellentesque molestie hendrerit velit at gravida. Integer nec mauris urna, vel gravida est.</p><p>Etiam sed velit tellus, eget aliquam nisi. Suspendisse potenti. Duis at augue purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper sapien congue lorem tristique nec bibendum velit tincidunt. Maecenas faucibus sollicitudin arcu, sed tincidunt nunc fermentum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis turpis, rutrum nec tincidunt nec, imperdiet quis tortor. Sed sit amet arcu vel orci porttitor elementum.</p><p>Vivamus eu elit augue. Donec viverra vehicula fermentum. Curabitur vitae tellus id mi sodales posuere vel cursus ligula. Proin quis risus arcu. Etiam purus dui, laoreet at mattis non, pretium et orci. Ut nec rhoncus neque. Aenean id risus ac neque congue suscipit. Sed bibendum quam nec felis aliquet in tempus enim adipiscing.</p><p>Aenean libero sem, ornare sed adipiscing quis, blandit a nibh. Proin quis sem urna. Vivamus id neque turpis. Aliquam erat volutpat. Curabitur magna nisl, mollis imperdiet interdum in, fringilla id urna. Phasellus vel blandit lacus. Proin lacus lacus, sodales in sodales id, tincidunt ac metus. Nunc rutrum risus id enim varius luctus sagittis lectus porta. Nunc eu imperdiet nibh. Etiam sit amet mi ac quam facilisis pharetra ac eget ligula. Maecenas pretium, est sed tincidunt tincidunt, dolor tortor tristique justo, in placerat enim est eu ante.</p><p>Ut at lorem ut diam molestie laoreet. Donec ut nibh ac risus euismod semper a ut metus. Phasellus faucibus dapibus felis, viverra tincidunt felis pellentesque posuere. Nunc tristique, quam ut mattis commodo, dolor eros commodo orci, sit amet mattis metus augue ut neque. Sed vehicula scelerisque tincidunt. Nulla lobortis",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at purus nibh. Cras metus nulla, vestibulum in auctor ac Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
        };
        return (React.createElement("div", null,
            React.createElement("h1", { className: styles.title },
                "Hello, ",
                this.props.name),
            React.createElement(Viewer_1.default, { id: "1", article: article })));
    };
    return App;
}(React.Component));
App.defaultProps = {
    name: "TypeScript Card Types demo"
};
exports.default = App;
//# sourceMappingURL=App.js.map