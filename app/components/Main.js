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
  }

  render() {
    return (

        <div className='main-container' style={styles.content}>
          <h1 style={styles.prompt}>Enter a City and State</h1>
          <LocationInput
            direction='column'
          ></LocationInput>
        </div>


    )
  }
}

export default Main;
