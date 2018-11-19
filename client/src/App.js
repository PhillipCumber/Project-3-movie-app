import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Movies from './components/Movies';
import Nav from './components/Nav';
import Login from './components/Login';
import Splash from './components/Splash';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Nav />
              <Switch> 

                  <Route exact path="/movies" component={Movies}></Route>
                  <Route exact path="/members" component={Movies}></Route>
                  <Route exact path="/mypage" component={Splash}></Route>
                  <Route path="/" component={Login}></Route>

              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
