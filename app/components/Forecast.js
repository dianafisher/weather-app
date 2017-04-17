import React from 'react';
import moment from 'moment';
import {getForecast} from '../utils/api';

class Forecast extends React.Component {

  componentDidMount() {
    console.log('Forecast component mounted');
    getForecast('Santa Cruz, CA')
      .then(function (data) {
        console.log(data);
        const list = data.list;

        list.forEach(item => {
          console.log(item);
          // console.log(item.dt_txt);
          // use momentjs to get the local date
          const date = moment.utc(item.dt_txt, 'YYYY-MM_DD HH:mm:ss').local();
          console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
          console.log(date.day());
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
