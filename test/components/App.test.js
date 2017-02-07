/* eslint no-unused-expressions: 0 */
/* globals expect, describe, it, beforeEach, afterEach */

import { renderComponent, mountContainer } from '../test_helper'

import App from '../../src/components/App'

describe('App', () => {
  it('should exist', () => {
    expect(App).to.exist
  })
  describe('rendering', () => {
    it('should render a searchBar', () => {
      const wrapper = renderComponent(App)
      expect(wrapper.find('input')).to.have.length(1)
    })
    it('should render a table', () => {
      const wrapper = renderComponent(App)
      expect(wrapper.find('table')).to.have.length(1)
    })
  })
  describe('application state', () => {
    it('should have default state "{ weather: [] }"', () => {
      const appState = { weather: [] }
      const wrapper = mountContainer(App)
      expect(wrapper.props().store.getState()).to.eql(appState)
    })
  })
})
