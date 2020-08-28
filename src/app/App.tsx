import React from 'react'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'

import store from './store'
import GlobalStyle from '../styles/global'
import { swrConfig } from './config/swr'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <SWRConfig value={swrConfig}>
        <div />
      </SWRConfig>
    </Provider>
  )
}

export default App
