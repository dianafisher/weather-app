import React from 'react';
import LocationInput from './LocationInput';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

const styles = {
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

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(city) {
    console.log('Header handleSubmit for ', city);
    console.log(this.props);
    this.props.history.push({
      pathname: '/forecast',
      search: '?city=' + city
    });
  }

  render() {

    return (
      <div style={styles.header}>
        <h2 style={styles.h2}>Clever Title</h2>
        <LocationInput
          direction='row'
          onSubmit={ this.handleSubmit }
        ></LocationInput>
      </div>
    )
  }
}

export default Header;
