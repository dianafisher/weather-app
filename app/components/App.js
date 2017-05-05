import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Forecast from './Forecast';
import Header from './Header';
import Details from './Details';
import LocationInput from './LocationInput';

const styles = {
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

  render() {
    return (
      <BrowserRouter>
        <div style={styles.root}>
          <Route render={function (props) {
            return (
              <div style={styles.header}>
                <h2 style={styles.h2}>Clever Title</h2>
                <LocationInput
                  city='San Jose'
                  direction='row'
                  onSubmit={ function(city) {
                    props.history.push({
                        pathname: '/forecast',
                        search: '?city=' + city
                    });
                  }}
                ></LocationInput>
              </div>
            )
          }} />
          <Route exact path='/' component={Main} />
          <Route path='/forecast' component={Forecast} />
          <Route path='/details/:city' component={Details} />

        </div>
      </BrowserRouter>

    )
  }
}

export default App;
