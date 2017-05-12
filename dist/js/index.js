"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
// AppContainer is a necessary wrapper component for HMR
// We use require because TypeScript type warning,
// tslint:disable
var AppContainer = require("react-hot-loader").AppContainer;
// tslint:enable
/*
  Main App CSS
    - Used for introduce CSS in webpack workflow
    - In webpack Dev it will be injected as /**
    - In webpack prod it will be extracted as a separate bundled file
 */
require("./../stylesheets/main.css");
/*
  Main App Container
 */
var App_1 = require("./containers/App/App");
// Render function containing the HMR AppContainer
var render = function (Component) {
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(Component, null)), 
    // HTML root element for React app
    document.getElementById("reactContainer"));
};
render(App_1.default);
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./containers/App/App", function () {
        // If we receive a HMR request for our App container,
        // then reload it using require (we can't do this dynamically with import)
        var NextApp = require("./containers/App/App").default;
        render(NextApp);
    });
}
//# sourceMappingURL=index.js.map