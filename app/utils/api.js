import axios from 'axios';
import moment from 'moment';

var appID = 'API_KEY';

export function getIconPath (weather) {
  if (weather.length === 0) {
    // return a default icon if weather array is empty
    return '/app/images/weather-icons/01d.svg';
  }
  const data = weather[0];
  let path = `/app/images/weather-icons/${data.icon}.svg`;

  return path;
}

export function getDateString (timestamp) {
  let date = moment.utc(timestamp * 1000).local();

  return date.format('dddd, MMMM Do YYYY');

}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    units: 'imperial',
    APPID: appID,
    cnt: 5
  }
}

/*
  To avoid unexpected requests to the server, you should call
  encodeURIComponent on any user-entered parameters that will be
  passed as part of a URI
*/

function encodedQueryString (queryStringData) {
  return Object.keys(queryStringData)
    .map(key => {
      return `${key}=${encodeURIComponent(queryStringData[key])}`;
    }).join('&');
}

function getEncodedURI (type, queryStringData) {
  return `http://api.openweathermap.org/data/2.5/${type}?${encodedQueryString(queryStringData)}`
}

function getDescription (weather) {
  if (weather.length === 0) {
    return 'Not Available';
  }
  return weather[0].description;
}

/* Returns a Promise */
export function getDailyForecast (city) {
  let queryString = getQueryStringData(city);
  let url = getEncodedURI('forecast/daily', queryString);
  return axios.get(url)
    .then( function (response) {
      return response.data;
    });
}

export function getCurrentWeather (city) {
  let queryString = getQueryStringData(city);
  let url = getEncodedURI('weather', queryString);
  return axios.get(url)
    .then( function (response) {
      return response.data;
    });
}
