var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Main = require('./Main');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Main} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
