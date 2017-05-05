import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

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
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const value = event.target.value;

    // update our state
    this.setState(function() {
      return {
        city: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button pressed');

    console.log(this.props);

    // pass the submit up via props
    this.props.onSubmit(
      this.state.city
    )

    // clear the state
    this.setState( function() {
      return {
        city: ''
      }
    })
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
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button
          className='btn btn-success'
          style={styles.button}
          type='button'
          onClick={this.handleSubmit}
        >
          Get Weather
        </button>
        {/* <Link
          className='btn btn-success'
          style={styles.button}
          to={{
            pathname: '/forecast',
            search: `?city=${this.state.city}`
          }}
        >Get Weather</Link> */}
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
