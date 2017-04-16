import React from 'react';
import {getForecast} from '../utils/api';

class Forecast extends React.Component {

  componentDidMount() {
    console.log('Forecast component mounted');
    getForecast('London');
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
