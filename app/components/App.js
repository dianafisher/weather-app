import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Forecast from './Forecast'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/forecast/:city' component={Forecast} />
          <Route render={ function () {
            return <p>Not Found</p>
          }} />
        </Switch>
        
      </BrowserRouter>
    )
  }
}

export default App;
