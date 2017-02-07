/* globals expect, describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0 */
import _ from 'lodash'

import { renderComponent } from '../test_helper'
import Chart, { average } from '../../src/components/Chart'
import data from '../testData'

const datas = _.map(data.list.map(weather => weather.main.temp), temp => (temp * (9 / 5)) - 459.67)

const props = {
  color: 'blue',
  units: '°F',
  data: datas
}

const number = average(_.map(datas))

describe('Chart', () => {
  it('should exist', () => {
    expect(Chart).to.exist
  })
  describe('rendering', () => {
    let wrapper
    beforeEach(() => {
      wrapper = renderComponent(Chart, { ...props })
    })
    it('renders Chart and has the correct class', () => {
      expect(wrapper).to.have.length(1)
      expect(wrapper).to.have.className('chart')
    })
    it('displays the average', () => {
      expect(wrapper).to.include.text(`${number} °F`)
    })
  })
})
