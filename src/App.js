import React from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios'


class App extends React.Component {
  state = {
    auth: false
  }

  async componentDidMount() {
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${localStorage.getItem('token')}`
      }
    }
    const response = await axios('http://localhost:5000/api/profile/usersall', config)
    console.log(response.data)
    if (response.data[0]) {
      return this.setState({
        auth: true
      })
    } else {
      return this.setState({
        auth: false
      })
    }
    // hit the backend
    // check the token
    // get the response
    // if boolean is true in response set auth to be true
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