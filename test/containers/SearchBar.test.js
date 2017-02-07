/* globals expect, describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0 */
import sinon from 'sinon'

import { renderComponent, mountComponent } from '../test_helper'
import { SearchBar } from '../../src/containers/SearchBar'

describe('SearchBar', () => {
  it('should exist', () => {
    expect(SearchBar).to.exist
  })
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = renderComponent(SearchBar)
    })
    it('should render a form with class input-group', () => {
      const form = wrapper.find('form')
      expect(form).to.have.length(1)
      expect(form).to.have.className('input-group')
    })
    it('should render a btn', () => {
      const button = wrapper.find('button')
      expect(button).to.have.length(1)
    })
  })
  describe('component', () => {
    let wrapper
    let input
    let spy
    let spy2
    let actionSpy
    beforeEach(() => {
      spy = sinon.spy(SearchBar.prototype, '_onInputChange')
      spy2 = sinon.spy(SearchBar.prototype, '_onFormSubmit')
      actionSpy = sinon.spy()
      wrapper = mountComponent(SearchBar, { fetchWeather: actionSpy })
      input = wrapper.find('input')
      input.simulate('change', { target: { value: 'Duarte' } })
    })
    afterEach(() => {
      SearchBar.prototype._onInputChange.restore()
      SearchBar.prototype._onFormSubmit.restore()
    })
    it('should have prop fetchWeather', () => {
      expect(wrapper.props().fetchWeather).to.exist
      expect(wrapper.props().fetchWeather).to.be.a('function')
    })
    it('should call onInputChange', () => {
      expect(spy).to.have.been.calledOnce
    })
    it('shows text input on input change', () => {
      expect(input).to.have.value('Duarte')
    })
    it('changes state on input change', () => {
      expect(wrapper).to.have.state('term').to.equal('Duarte')
    })
    it('empties state and value on submit', () => {
      input.simulate('submit')
      expect(wrapper.state().term).to.equal('')
    })
    it('calls _onFormSubmit on submit', () => {
      expect(spy2).to.have.not.been.called
      input.simulate('submit')
      expect(spy2).to.have.been.calledOnce
    })
    it('calls action fetchWeather on submit', () => {
      input.simulate('submit')
      expect(actionSpy).to.have.been.calledOnce
    })
  })
})
