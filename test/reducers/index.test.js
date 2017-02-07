/* globals expect, describe, it, beforeEach, afterEach */

import weatherReducer from '../../src/reducers/reducer_weather'
import { FETCH_WEATHER } from '../../src/actions'

describe('weatherReducer', () => {
  it('should exist', () => {
    expect(weatherReducer).to.exist
  })
  it('handles action with unknown type', () => {
    expect(weatherReducer(undefined, {})).to.eql([])
  })
  it('handles action of type FETCH_WEATHER', () => {
    const action = {
      type: FETCH_WEATHER,
      payload: { data: 'new weather' }
    }
    expect(weatherReducer(['testing'], action)).to.eql(['new weather', 'testing'])
  })
})
