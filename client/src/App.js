import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Movies from './components/Movies';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Nav />
              <Switch> 

                  <Route path="/movies" component={Movies}></Route>


              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
