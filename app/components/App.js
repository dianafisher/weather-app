import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// var React = require('react');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;
// var Switch = ReactRouter.Switch;

var Main = require('./Main');

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
