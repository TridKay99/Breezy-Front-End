import React from 'react'
import axios from 'axios'

class Admin extends React.Component {
  state = {
    admin: null
  };

  async componentDidMount() {
    const response = await axios('URL FOR ADMIN')

    this.setState({
      admin: response.data
    })
  }

  render() {
    return(
      <h1>Admin Hello</h1>
    )
  }
}

export default Admin