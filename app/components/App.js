import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Forecast from './Forecast';
import LocationInput from './LocationInput';

const styles = {
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

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(location) {
    console.log('App: handleSubmit for', location);
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.header}>
          <h2 style={styles.h2}>Clever Title</h2>
          <LocationInput
            direction='row'
            onSubmit={this.handleSubmit}
          ></LocationInput>
        </div>
        <BrowserRouter>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/forecast/:city' component={Forecast} />
            <Route render={ function () {
              return <p>Not Found</p>
            }} />
          </Switch>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;
