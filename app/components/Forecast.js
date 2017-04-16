import React from 'react';
import moment from 'moment';
import {getForecast} from '../utils/api';

class Forecast extends React.Component {

  componentDidMount() {
    console.log('Forecast component mounted');
    getForecast('Orlando')
      .then(function (data) {
        console.log(data);
        const list = data.list;

        list.forEach(item => {
          console.log(item.dt_txt);
          // split each item into date and time
          let parts = item.dt_txt.split(' ');
          console.log(parts);
          let date = new Date(parts[0]);
          console.log(date.getUTCDay());
          let day = moment(item.dt_txt).format('dddd, MMMM Do YYYY, h:mm:ss a');
          console.log(day);
        })

      });
  }

  render() {
    return (
      <div>
        <h2>Forecast</h2>
      </div>
    )
  }
}

export default Forecast;
