import axios from 'axios'

const API_KEY = '5925f0d6c913d137aa2b21f27a741475'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  return (dispatch) => {
    const url = `${ROOT_URL}&q=${city},us`
    return axios.get(url).then((request) => {
      dispatch({
        type: FETCH_WEATHER,
        payload: request
      })
    })
  }
}
