import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// var Main = require('./Main');
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
