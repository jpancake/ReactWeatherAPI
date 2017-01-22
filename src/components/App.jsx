import React from 'react'

import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center flex-column">
        <h1 className="text-center text-uppercase">Weather API</h1>
        <div className="col col-lg-8 align-self-center">
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    </div>
  )
}

export default App
