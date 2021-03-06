import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import queryString from 'query-string';
import { getDailyForecast } from '../utils/api';
import DayContainer from './DayContainer';

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props);
    // console.log('match', this.props.match);

    this.state = {
      days: [],
      loading: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }

  componentDidMount() {
    // console.log('Forecast component mounted');

    // parse the query string
    const parsed = queryString.parse(location.search);
    // console.log(parsed.city);
    this.city = parsed.city;

    this.makeRequest(this.city);
  }

  // invoked when a component's props are updated
  componentWillReceiveProps(nextProps) {
    
    // parse the query string
    const parsed = queryString.parse(location.search);
    // console.log(parsed.city);
    this.city = parsed.city;
    this.makeRequest(this.city);
  }

  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    });

    getDailyForecast(city)
      .then( function (forecast) {
        // console.log('Forecast', forecast);

        // update our state
        this.setState(function () {
          return {
            days: forecast.list,
            loading: false
          }
        });
      }.bind(this));

  }

  handleClick(data) {
    // console.log('handleClick!', data);
    // route to the details component
    data.city = this.city;
    // console.log(this.city);
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: data
    })
  }

  render() {
    return (
      this.state.loading === true ?
      <h1 className='forecast-header'> Loading </h1>
      :
      <div>
        <h1 className='forecast-header'>{this.city}</h1>
        <div className="forecast-container">
          {
            this.state.days.map(day => <DayContainer
              key={day.dt}
              data={day}
              onClick={this.handleClick.bind(this, day)}
                                       />)
          }

        </div>
      </div>
    )
  }
}

export default Forecast;
