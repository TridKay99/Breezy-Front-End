import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Admin from './Admin'

class ProtectedRoutes extends React.Component {
  state = {isAuthSet: false}

  componentDidMount() {
    this.setState({
      isAuthSet: true,
      access: this.props.auth
    })
  }

  render() {
    if (!this.state.isAuthSet) {
      return null
    } else if (this.state.access) {
      return (
        <>
          <Route path="/protected/admin" component={Admin} />  
        </>
      )
    } else {
      return (
        <Redirect to='/' />
      )
    }
  }
}

export default ProtectedRoutes;