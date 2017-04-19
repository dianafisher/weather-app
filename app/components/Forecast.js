import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import {getForecast} from '../utils/api';

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    console.log('match', this.props.match);

    this.state = {
      city: null,
    }
  }

  componentDidMount() {
    console.log('Forecast component mounted');

    // parse the query string
    const parsed = queryString.parse(location.search);
    console.log(parsed.city);
    const city = parsed.city;

    // update our state
    this.setState(function () {
      return {
        city: city
      }
    });

    getForecast(city)
      .then(function (data) {
        console.log(data);
        const list = data.list;

        // list.forEach(item => {
        //   console.log(item);
        //   // console.log(item.dt_txt);
        //   // use momentjs to get the local date
        //   const date = moment.utc(item.dt_txt, 'YYYY-MM_DD HH:mm:ss').local();
        //   console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
        //   item.date = date;
        //   console.log(date.day());
        // });
        //
        // console.log(list);

        // group the results by day
        let groupedResults = _.groupBy(list, (item) => {
          const date = moment.utc(item.dt_txt, 'YYYY-MM_DD HH:mm:ss').local();
          item.date = date;
          return date.day();
        });

        console.log(groupedResults);
        console.log(groupedResults[0]);
        for (var r in groupedResults) {
          console.log(r + ' = ' + groupedResults[r]);
          let items = groupedResults[r];
          console.log(items);

          items.forEach(item => {
            const date = item.date;
            console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
          })
        }

      });
  }

  render() {
    return (
      <div>
        <h1 className='forecast-header'>{this.state.city}</h1>
      </div>
    )
  }
}

export default Forecast;
