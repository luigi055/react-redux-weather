import axios from 'axios';

const API_KEY = 'c5a708598d4aab87ebd961ccbd8e24b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ve`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request //if the payload is a promise redux-promise stop the action and after promise resolves, create a new action and send it to reducers as an object since reducers can only accept actions (Objects)
  };
}
