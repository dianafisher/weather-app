import React from 'react';

class DayContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    console.log('data', data);
    const date = data.dateStr;
    const icons = [
      {
        name: '01',
        desc: 'clear sky',
      },
      {
        name: '02',
        desc: 'few clouds',
      },
      {
        name: '03',
        desc: 'scattered clouds',
      },
      {
        name: '04',
        desc: 'broken clouds',
      },
      {
        name: '09',
        desc: 'shower rain',
      },
      {
        name: '10',
        desc: 'rain',
      },
      {
        name: '11',
        desc: 'thunderstorm',
      },
      {
        name: '13',
        desc: 'snow',
      },
      {
        name: '50',
        desc: 'low clouds',
      },
    ]
    return (
      <div className='dayContainer'>
        <img className='weather' src='/app/images/weather-icons/10d.svg' alt='Weather'></img>
        <h2 className='subheader'>{date}</h2>
      </div>
    )
  }
}

export default DayContainer;
