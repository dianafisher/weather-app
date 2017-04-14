import React, { Component } from 'react';

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
  white: {
    color: 'white'
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className='main-container' style={styles.content}>
        <h1 style={styles.white}>Hello, Main!</h1>
      </div>

    )
  }
}

module.exports = Main;
