import React from 'react';
import { getIconPath, getDateString } from '../utils/api';

class Details extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    // console.log('match', this.props.match);
    this.data = this.props.location.state;
    const date = getDateString(this.data.dt);
    this.date = date;
    // console.log(date);
    this.icon = getIconPath(this.data.weather);
  }

  render() {
    return (
      <div>
        <div className='dayContainer'>
          <img className='weather' src={this.icon} alt='Weather'></img>
          <h2 className='subheader'>{this.date}</h2>
        </div>
        <div className="description-container">
          <p>{this.data.city}</p>
          <p>{this.data.weather[0].description}</p>
          <p>min temp: {this.data.temp.min} degrees </p>
          <p>max temp: {this.data.temp.max} degrees </p>
          <p>humidity: {this.data.humidity} %</p>
        </div>
      </div>

    )
  }
}

export default Details;
