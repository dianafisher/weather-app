import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import { getDailyForecast } from '../utils/api';
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

    getDailyForecast(city)
      .then( function (forecast) {
        console.log('Forecast', forecast);

        // update our state
        this.setState(function () {
          return {
            city: city,
            days: forecast.list
          }
        });
      }.bind(this));
  }

  render() {
    return (
      <div>
        <h1 className='forecast-header'>{this.state.city}</h1>
        <div className="forecast-container">
          {
            this.state.days.map(day => <DayContainer
              key={day.dt}
              data={day}
                                       />)
          }

        </div>
      </div>
    )
  }
}

export default Forecast;
