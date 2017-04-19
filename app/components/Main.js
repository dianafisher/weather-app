import React, { Component } from 'react';
import LocationInput from './LocationInput';

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
  root: {
    width: '100%',
    height: '92%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fc8740',
    color: '#fff',
    padding: '5px'
  },
  h2: {
    margin: '0',
  }
}

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(location) {
    console.log('Main: handleSubmit for', location);
  }

  render() {
    return (

        <div className='main-container' style={styles.content}>
          <h1 style={styles.prompt}>Enter a City and State</h1>
          <LocationInput
            direction='column'
            onSubmit={this.handleSubmit}
          ></LocationInput>
        </div>


    )
  }
}

export default Main;
