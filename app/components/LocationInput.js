import React from 'react';

class LocationInput extends React.Component {

  constructor(props) {
    super(props);

    // initialize our state
    this.state = {
      location: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    var value = event.target.value;
    console.log(value);

    // update our state
    this.setState({location: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button pressed');
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <input
          className='form-control'
          id='location'
          placeholder='San Jose, CA'
          type='text'
          autoComplete='off'
          onChange={this.handleInputChange}
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
