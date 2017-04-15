import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
