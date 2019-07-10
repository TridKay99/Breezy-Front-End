import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nomatch from './components/Nomatch';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Admin from './components/Admin';
import Profile from './components/Profile'

class Routes extends React.Component {
  render () {
    return (
        <Switch>
          <Route path="/about" component= {About} />
          <Route path="/contact" component= {Contact} />
          <Route path="/faq" component= {Faq} />
          <Route path="/pricing" component= {Pricing} />
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route component={Nomatch} />
        </Switch>
    );
  }
}

export default Routes;
  