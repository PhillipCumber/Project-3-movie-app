import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Switch> 

                  <Route path="/movies" component={Home}></Route>


              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
