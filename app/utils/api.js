import axios from 'axios';

var appID = 'APP_ID';

export function getForecast (city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&APPID=${appID}`)
    .then( function (response) {
      return response.data;
    });
}
