import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nomatch from './components/Nomatch';
import Faq from './components/Faq';
import Admin from './components/Admin';
import Profile from './components/Profile'
import Register from './components/Register'
import Login from './components/Login'
import Order from './components/orders'
import LoginForm from './components/LoginForm'
import ProtectedRoutes from './components/ProtectedRoutes'
// import GetUsersInfo from './components/GetUsersInfo'
import Users from './components/Users'
import Email from './components/email'
// import SingleUser from './components/GetSingleInfo'

class Routes extends React.Component {
  render () {
    const { auth } = this.props
    return (
      <Switch>
        {/* Protected Routes */}
        <ProtectedRoutes path="/protected" component={Admin} auth={auth} />
        {/* Unprotected Routes */}
        <Route path="/about" component= {About} />
        <Route path="/faq" component= {Faq} />
        <Route exact path="/" component={Home} />
        <Route path="/orders" exact component={Order} />
        <Route path="/profile" component={Profile} />
        {/* conditional if admin to view this */}
        <Switch>
          <Route exact path='/register'component={Register}/>
          <Route path="/login" component={LoginForm} />
          <Route path="/email" component={Email} />
        </Switch>
        {/* <Route path='/user/:email' component={SingleUser} /> */}

        <Route component={Nomatch} />
      </Switch>
    );
  }
}

export default Routes;
  