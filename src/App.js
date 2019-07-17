import React from 'react';
import './App.css';
import Routes from './Routes';


class App extends React.Component {
  state = {
    auth: false
  }

  componentDidMount() {
    // hit the backend
    // check the token
    // get the response
    // if boolean is true in response set auth to be true
    this.setState({
      auth: true
    })
    // otherwise set auth to be false
  }
  render () { 
    const { auth } = this.state
    if (!this.state.auth) {
      return null
    } else {
      return (
        <Routes auth={auth} />
      )
    }
  }
}


export default App;