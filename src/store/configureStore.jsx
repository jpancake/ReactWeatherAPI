/* globals window */
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import ReduxPromise from 'redux-promise'

import WeatherReducer from '../reducers/reducer_weather'

const configure = (initialState = {}) => {
  const reducer = combineReducers({
    weather: WeatherReducer
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(reducer, initialState, composeEnhancers(
      applyMiddleware(ReduxPromise)
  ))

  return store
}

export default configure
