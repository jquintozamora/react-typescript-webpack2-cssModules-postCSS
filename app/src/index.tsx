import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers/App';

// Import the Hot Module Reloading App Container – more on why we use 'require' below
const { AppContainer } = require('react-hot-loader');

import './../stylesheets/main.css';

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };


// Get the root element from the HTML
const rootEl = document.getElementById('reactContainer');

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
ReactDOM.render(
  <AppContainer>
    <App name="Jose Quinto 2" />
  </AppContainer>,
  rootEl
);

console.log("before hot");
//Handle hot reloading requests from Webpack
if (module.hot) {
  console.log("hot");
  module.hot.accept('./containers/App', () => {
    //If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/App').default;
    console.log("do that");
    //And render it into the root element again
    ReactDOM.render(
      <AppContainer>
        <NextApp name='Jose Pepe' />
      </AppContainer>,
      rootEl
    );
  })
}