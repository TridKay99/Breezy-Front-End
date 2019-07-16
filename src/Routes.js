import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nomatch from './components/Nomatch';
import Faq from './components/Faq';
import Admin from './components/Admin';
import Profile from './components/Profile'
import Register from './components/Register'
import LoginForm from './components/LoginForm'
// import GetUsersInfo from './components/GetUsersInfo'
import Users from './components/Users'
// import SingleUser from './components/GetSingleInfo'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/about" component= {About} />
        <Route path="/faq" component= {Faq} />
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={Admin} />
        {/* conditional if admin to view this */}
        <Route path="/allusers" component={Users} />
        <Switch>
          <Route exact path='/register'component={Register}/>
          <Route path="/login" component={LoginForm} />
        </Switch>
        {/* <Route path='/user/:email' component={SingleUser} /> */}

        <Route component={Nomatch} />
      </Switch>
    );
  }
}

export default Routes;
  