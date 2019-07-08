import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nomatch from './components/Nomatch';

class Routes extends React.Component {
    render () { 
      return (
         <Switch> 
            <Route path="/about" component= {About} />
            <Route path="/" exact component={Home} />
            <Route component={Nomatch} />
         </Switch>  
      );
    }
  }
  
export default Routes;
  