import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements } from '@ionic/pwa-elements/loader'

import App from './app/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

defineCustomElements(window)

serviceWorker.unregister()
