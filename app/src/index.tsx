import 'react-hot-loader/patch'

import * as React from 'react'
import { render } from 'react-dom'

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader'

/*
  Main App CSS
    - Used for introduce CSS in webpack workflow
    - In webpack Dev it will be injected as /**
    - In webpack prod it will be extracted as a separate bundled file
 */
import './../stylesheets/main.css'

/*
  Main App Container
 */
import App from './containers/App/App'

const reactContainer = document.getElementById('reactContainer')

render(
  <AppContainer>
    <App />
  </AppContainer>,
  reactContainer
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    const NextApp = require<{default: typeof App}>('./containers/App/App').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      reactContainer
    )
  })
}
