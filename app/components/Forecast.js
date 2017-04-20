import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import {getForecast} from '../utils/api';
import DayContainer from './DayContainer';

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    console.log('match', this.props.match);

    this.state = {
      city: null,
      days: []
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
        city: city,
      }
    });

    getForecast(city)
      .then( function (days) {
        console.log('Forecast', days);

        // update our state
        this.setState(function () {
          return {
            city: city,
            days: days
          }
        });
      }.bind(this));
/*
    getForecast(city)
      .then(function (data) {
        console.log(data);
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

        // // want to group the results by day
        // let days = [];
        // let current = list[0].dateStr;
        // console.log('current', current);
        // let day = {
        //   date: current,
        //   results: []
        // };
        // day.results.push(list[0]);
        //
        // console.log('day', day);
        // list.forEach(item => {
        //
        // });

        // // group the results by day
        // let groupedResults = _.groupBy(list, (item) => {
        //   const date = moment.utc(item.dt_txt, 'YYYY-MM_DD HH:mm:ss').local();
        //   item.date = date;
        //   const dateStr = date.format('dddd, MMMM Do YYYY');
        //   console.log('dateStr', dateStr);
        //   item.dateStr = dateStr;
        //   return date.day();
        // });
        //
        // console.log(groupedResults);



        // console.log(groupedResults[0]);
        // for (var r in groupedResults) {
        //   console.log(r + ' = ' + groupedResults[r]);
        //   let items = groupedResults[r];
        //   console.log(items);
        //
        //   items.forEach(item => {
        //     const date = item.date;
        //     console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
        //   })
        // }

        // this.setState(function (){
        //   return {
        //     day1: groupedResults[0]
        //   }
        // });

        // update our state
        this.setState(function () {
          return {
            city: city,
            days: days
          }
        });

      }.bind(this));
*/
  }

  render() {
    return (
      <div>
        <h1 className='forecast-header'>{this.state.city}</h1>
        <div className="forecast-container">
          {
            this.state.days.map(day => <DayContainer
              key={day.dateStr}
              data={day}
                                       />)
          }

        </div>
      </div>
    )
  }
}

export default Forecast;
