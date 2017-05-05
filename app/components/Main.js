import React, { Component } from 'react';
import LocationInput from './LocationInput';
import { Link } from 'react-router-dom';

const styles = {
  content: {
    backgroundImage: 'url(app/images/pattern.svg)',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  prompt: {
    color: '#fff',
    fontSize: '45px',
    fontWeight: '100',
  },
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(city) {
    console.log('Main handleSubmit for ', city);
    console.log(this.props);
    this.props.history.push({
      pathname: '/forecast',
      search: '?city=' + city
    });
  }

  render() {
    return (

        <div className='main-container' style={styles.content}>
          <h1 style={styles.prompt}>Enter a City and State</h1>
          <LocationInput
            direction='column'
            onSubmit= { this.handleSubmit }
          ></LocationInput>
        </div>


    )
  }
}

export default Main;
