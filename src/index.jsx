/* globals $ */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import configure from './store/configureStore'
import './styles'

const store = configure()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $('#app')[0])

if (module.hot) {
  module.hot.accept()
}
