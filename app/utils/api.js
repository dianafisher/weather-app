// var axios = require('axios');
import axios from 'axios';

var key = '';

export function getForecast (city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&APPID=${key}`)
    .then( function (result) {
      console.log(result);
    });
}
