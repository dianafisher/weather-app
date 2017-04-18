import React, { Component } from 'react';
import LocationInput from './LocationInput';

const styles = {
  content: {
    backgroundImage: 'url(app/images/pattern.svg)',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
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
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.header}>
          <h2 style={styles.h2}>Clever Title</h2>
          <LocationInput direction='row'

          ></LocationInput>
        </div>
        <div className='main-container' style={styles.content}>
          <h1 style={styles.prompt}>Hello, I still work! 😀 🎈 🎉</h1>
          <h1 style={styles.prompt}>Enter a City and State</h1>
          <LocationInput direction='column'

          ></LocationInput>
        </div>
      </div>

    )
  }
}

export default Main;
