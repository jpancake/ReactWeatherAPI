/* globals expect, describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0 */
import { renderComponent, mountComponent } from '../test_helper'
import { WeatherList } from '../../src/containers/WeatherList'
import data from '../testData'


describe('WeatherList', () => {
  it('should exist', () => {
    expect(WeatherList).to.exist
  })
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = renderComponent(WeatherList)
    })
    it('should render table with a class table', () => {
      expect(wrapper.find('table')).to.have.className('table')
    })
  })
  describe('Application State', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mountComponent(WeatherList, { weather: [data] })
    })
    it('should render row with class city-row', () => {
      expect(wrapper.find('tr.city-row')).to.have.length(1)
    })
  })
})
