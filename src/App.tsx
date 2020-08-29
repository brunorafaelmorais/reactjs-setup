import React from 'react'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store'
import GlobalStyle from './styles/global'
import swrConfig from './config/swr'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyle />
      <SWRConfig value={swrConfig}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </SWRConfig>
    </Provider>
  )
}

export default App
