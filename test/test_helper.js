/* globals document, window */
import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import { jsdom } from 'jsdom'
import { render, mount, shallow } from 'enzyme'

import reducers from '../src/reducers'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = window.navigator
global.expect = chai.expect

chai.use(sinonChai)
chai.use(require('chai-enzyme')())

export function getProps(props) {
  return {
    ...props,
  }
}

export function renderComponent(Component, props, state = { weather: [] }) {
  return render(
      <Provider store={createStore(reducers, state)}>
        <Component {...getProps(props)} />
      </Provider>
  )
}

export function mountContainer(Container, props, state = { weather: [] }) {
  return mount(
      <Provider store={createStore(reducers, state)}>
        <Container {...getProps(props)} />
      </Provider>
  )
}

export function mountComponent(Component, props) {
  return mount(<Component {...getProps(props)} />)
}

export function shallowComponent(Component, props) {
  return shallow(<Component {...getProps(props)} />)
}
