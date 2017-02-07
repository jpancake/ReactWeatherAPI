import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/index'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this._onInputChange = this._onInputChange.bind(this)
    this._onFormSubmit = this._onFormSubmit.bind(this)
  }

  _onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  _onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
        <form onSubmit={this._onFormSubmit} className="input-group">
          <input
            placeholder="Get a five-day forecase in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this._onInputChange}
            type="search"
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    )
  }
}

SearchBar.propTypes = {
  fetchWeather: PropTypes.func
}

SearchBar.defaultProps = {
  fetchWeather: ''
}

// Connect the fetchWeather action as an prop to SearchBar
export default connect(null, { fetchWeather })(SearchBar)
