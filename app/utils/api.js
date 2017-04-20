import axios from 'axios';
import moment from 'moment';

var appID = 'API_KEY';

export function getForecast (city) {
  // return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&APPID=${appID}`)
  //   .then( function (response) {
  //     return response.data;
  //   });

  // axios.all() takes in an array of promises and calls a function once they have all resolved.
  return axios.all([getWeather(city)
    .then(function (data) {
      return groupDays(data);
    })
  ]).then(function (results) {
    return results[0]
  });
}

function groupDays (data) {
  console.log(data);
  let days = [];
  const list = data.list;

  // Group the results by day
  let current = {
    dateStr: null,
    results: []
  }

  list.forEach(item => {
    // use momentjs to get the local date
    const date = moment.utc(item.dt_txt, 'YYYY-MM_DD HH:mm:ss').local();
    // console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    item.date = date;
    const dateStr = date.format('dddd, MMMM Do YYYY');
    const timeStr = date.format('h:mm:ss a');
    // console.log('dateStr', dateStr);
    // console.log('timeStr', timeStr);
    item.dateStr = dateStr;
    item.timeStr = timeStr;

    if (item.dateStr === current.dateStr) {
      current.results.push(item);
    } else {
      if (current.dateStr){
        days.push(current);
      }
      current = {
        dateStr: dateStr,
        results: [item]
      }
    }
  });
  // push the last day onto the days array.
  days.push(current);
  // console.log(list);
  console.log(days);

  return days;
}

/* Returns a Promise */
function getWeather (city) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&APPID=${appID}`)
    .then( function (response) {
      return response.data;
    });
}
