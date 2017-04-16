import React from 'react';

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
        // force uppercase, just for fun
        location: value.toUpperCase()
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button pressed');
    // what has the user entered?
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <input
          className='form-control'
          placeholder='San Jose, CA'
          type='text'
          autoComplete='off'
          value={this.state.location}
          onChange={this.handleChange}
        />
        <button
          className='button'
          type='submit'
        >
          Get Weather
        </button>
      </form>
    )
  }
}

export default LocationInput;
