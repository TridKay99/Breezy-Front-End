import React from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios'


class App extends React.Component {
  state = {
    auth: true
  }

  // async componentDidMount() {
  //   const config = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'x-auth-token': `${localStorage.getItem('token')}`
  //     }
  //   }
    
  //   // const response = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/profile/usersall`, config)
  //   // if (response.data[0]) {
  //   //   return this.setState({
  //   //     auth: true
  //   //   })
  //   // } else {
  //   //   return this.setState({
  //   //     auth: false
  //   //   })
  //   // }
  //   // hit the backend
  //   // check the token
  //   // get the response
  //   // if boolean is true in response set auth to be true
  //   // otherwise set auth to be false
  // }
  render () { 
    const { auth } = this.state
    // if (!this.state.auth) {
    //   return null
    // } else {
    return (
      <Routes auth={auth} />
    )
    // }
    // return <h1>hello</h1>
  }
}


export default App;