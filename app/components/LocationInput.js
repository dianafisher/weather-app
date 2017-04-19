import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let styles = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    alignSelf: 'right',
  },
  button: {
    margin: '10px',
  }
}

/*
  LocationInput is a controlled component
*/
class LocationInput extends React.Component {

  constructor(props) {
    super(props);

    // initialize our state
    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const value = event.target.value;
    console.log(value);

    // update our state
    this.setState(function() {
      return {
        location: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button pressed');

    // pass the submit up via props
    this.props.onSubmit(
      this.state.location
    )
  }

  render() {
    // get the flex direction of the form from our props.
    styles.form.flexDirection = this.props.direction;

    return (
      <form className='column' style={styles.form} onSubmit={this.handleSubmit}>
        <input
          className='form-control'
          placeholder='San Jose, CA'
          type='text'
          autoComplete='off'
          value={this.state.location}
          onChange={this.handleChange}
        />
        {/* <button
          className='btn btn-success'
          style={styles.button}
          type='button'
          onClick={this.handleChange}
          >
          Get Weather
        </button> */}
        <Link
          className='btn btn-success'
          style={styles.button}
          to={{
            pathname: '/forecast',
            search: `?city=${this.state.location}`
          }}
        >Get Weather</Link>
      </form>
    )
  }
}

LocationInput.propTypes = {
  direction: PropTypes.string.isRequired,
}

LocationInput.defaultProps = {
  direction: 'row'
}

export default LocationInput;
