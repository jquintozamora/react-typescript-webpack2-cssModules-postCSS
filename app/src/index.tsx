import * as React from 'react';
import * as ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
// We use require because TypeScript type warning
const { AppContainer } = require('react-hot-loader');


/* 
  Main App Container
 */
import App from './containers/App';

/* 
  Main App CSS
    - Used for introduce CSS in webpack workflow
    - In webpack Dev it will be injected as /**
    - In webpack prod it will be extracted as a separate bundled file
 */
import './../stylesheets/main.css';

// Render function containing the HMR AppContainer
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    // HTML root element for React app
    document.getElementById('reactContainer')
  );
};

render(App);

// TypeScript declaration for module.hot
declare var module: { hot: any };
// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}