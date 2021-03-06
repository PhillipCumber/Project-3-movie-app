import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Movies from './components/Movies';
import Nav from './components/Nav';
import Login from './components/Login';
import Splash from './components/Splash';
import User from './components/User';
import Mypage from './components/Mypage';
import NewMovie from './components/NewMovie';


class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Nav />
              <Switch> 

                  <Route exact path="/movies" component={Movies}></Route>
                  <Route exact path="/members" component={User}></Route>
                  <Route exact path="/mypage" component={Mypage}></Route>
                  <Route exact path="/newmovie" component={NewMovie}></Route>
                  <Route exact path="/login" component={Login}></Route>
                  <Route path="/" component={Splash}></Route>

              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
