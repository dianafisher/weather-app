import React from 'react';

class DayContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    console.log('data', data);
    const date = data.dateStr;
    const results = data.results;
    const icon = results[0].icon;
    return (
      <div className='dayContainer'>
        <img className='weather' src={icon} alt='Weather'></img>
        <h2 className='subheader'>{date}</h2>
      </div>
    )
  }
}

export default DayContainer;
