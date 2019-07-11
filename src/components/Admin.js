import React from 'react';
import axios from 'axios'
import Users from './Users'

class Admin extends React.Component {
  state = {
    admin: null,
    users: false
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/profile/admins')
    this.setState({
      admin: response.data[0].user
    })
  }

  adminPage = () => {
    const { admin } = this.state
    if (!admin) {
      return null
    } else {
      return(
      <div className="AdminContainer">
        <h1>Hello Admin</h1>
        <p>{admin.date}</p>
        <p>{admin.email}</p>
      </div>
      )
    }
  }

  handleClick = () => {
    this.setState({
      users: true
    })
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>Users</button>
      {this.state.users ?
      <Users /> :
      this.adminPage()
      }
      </div>
    )
  }
}

export default Admin;
