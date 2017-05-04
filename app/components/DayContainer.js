import React from 'react';
import { getIconPath, getDateString } from '../utils/api';

class DayContainer extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    const data = this.props.data;
    console.log('data', data);
    const date = getDateString(data.dt);
    console.log(date);
    const icon = getIconPath(data.weather);

    return (
      <div className='dayContainer'>
        <img className='weather' src={icon} alt='Weather'></img>
        <h2 className='subheader'>{date.dateStr}</h2>
      </div>
    )
  }
}

export default DayContainer;
