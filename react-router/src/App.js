import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink,Redirect, Switch} from 'react-router-dom';
import Profile from "./component/Profile";
import Signin from "./component/Signin";
import News from "./component/News";
import Contact from "./component/Contact";
import Error from "./component/Error";


class App extends Component {
    state={
      loggedIn: false
    };
    onClickButton = () => {
      this.setState(prevState => ({
          loggedIn: !prevState.loggedIn
      }))
    };

  render() {
    return (
        <Router>
          <div>
              <NavLink activeClassName="activelink"  exact to="/"> HomePage </NavLink> <br/>
              <NavLink activeClassName="activelink"  exact to="/Contact"> Contact </NavLink> <br/>
              <NavLink activeClassName="activelink"  exact to="/News/2"> News </NavLink> <br/>
              <NavLink activeClassName="activelink"  exact to="/Signin"> Sign in </NavLink> <br/>
              <NavLink activeClassName="activelink"  exact to="/Profile"> Profile </NavLink> <br/>
              <br/><br/>
              <input type="button" onClick={this.onClickButton}
                     value={this.state.loggedIn ? 'Logout' : 'Login'}/>

              <Switch>
            <Route path="/" exact render={
                () => {
                  return(<h1>Home page</h1>)
                }}
              />
              <Route path="/Contact"  exact component={Contact}/>
              <Route path="/news/:id" exact component={News}/>
              <Route path="/Signin"  exact component={Signin}/>
              <Route path="/profile"  exact render={ () =>
                  this.state.loggedIn ? (<Profile/>) : (<Redirect to="/Signin"/>)}/>
              <Route component={Error}/>
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
