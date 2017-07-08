"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom";
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
import "./../stylesheets/main.css";
/*
  Main App Container
 */
import App from "./containers/App/App";
// Render function containing the HMR AppContainer
var render = function (Component) {
    ReactDOM.render(React.createElement(AppContainer, null,
        React.createElement(Component, null)), 
    // HTML root element for React app
    document.getElementById("reactContainer"));
};
// Call render function with App
render(App);
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