import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import GlobalStyle from '../styles/global'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
    </Provider>
  )
}

export default App
