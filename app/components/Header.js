import React from 'react';
import LocationInput from './LocationInput';

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

  handleSubmit(location) {
    console.log('Header: handleSubmit for', location);
  }

  render() {
    return (
      <div style={styles.header}>
        <h2 style={styles.h2}>Clever Title</h2>
        <LocationInput
          direction='row'
          onSubmit={this.handleSubmit}
        ></LocationInput>
      </div>
    )
  }
}

export default Header;
