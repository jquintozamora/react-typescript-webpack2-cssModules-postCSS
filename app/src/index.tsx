import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers/App';

import './../stylesheets/main.css';

ReactDOM.render(
    <App name="Jose Quinto" />
    , document.getElementById('reactContainer')
  );