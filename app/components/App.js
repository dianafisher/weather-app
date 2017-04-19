import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import Forecast from './Forecast';
import Header from './Header';

const styles = {
  root: {
    width: '100%',
    height: '92%',
  },
}

function Bubblegum (props) {
  return (
    <div className="bubblegum">
      <p>Tasty bubblegum 🍬 </p>
    </div>
  )
}

class App extends React.Component {

  render() {
    return (
      <div style={styles.root}>
        <Header />
        <BrowserRouter>

          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/bubblegum' component={Bubblegum} />
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
