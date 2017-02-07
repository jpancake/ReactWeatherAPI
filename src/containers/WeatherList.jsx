/* eslint "class-methods-use-this": 0 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMaps'


export class WeatherList extends Component {
  _renderWeather(cityData) {
    const { name, country } = cityData.city
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => (temp * (9 / 5)) - 459.67)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
        <tr key={name} className="city-row">
          <td><GoogleMap lon={lon} lat={lat} /> <h5>{name}, {country}</h5></td>
          <td><Chart data={temps} color="orange" units="°F" /></td>
          <td><Chart data={pressures} color="blue" units="hPa" /></td>
          <td><Chart data={humidities} color="green" units="%" /></td>
        </tr>
    )
  }
  render() {
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
          {this.props.weather.map(this._renderWeather)}
          </tbody>
        </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object)
}

WeatherList.defaultProps = {
  weather: []
}

export default connect(mapStateToProps)(WeatherList)

