/* globals expect, describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0 */

import Thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { fetchWeather, FETCH_WEATHER } from '../../src/actions'

const mockStore = configureStore([Thunk])

describe('actions', () => {
  it('should exist', () => {
    expect(fetchWeather).to.exist
  })
  it('has the correct type and payload', (done) => {
    const store = mockStore()
    store.dispatch(fetchWeather('Duarte')).then(() => {
      const mockActions = store.getActions()
      expect(mockActions[0].type).to.equal(FETCH_WEATHER)
      expect(mockActions[0].payload).to.have.any.keys('city', 'status', 'config')
    }, done())
  })
})
