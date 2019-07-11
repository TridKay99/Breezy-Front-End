import React from 'react';
import axios from 'axios'
import Users from './Users'
import './cssComponents/Admin.css'

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
      <>
        <h1>Hello Admin</h1>
        <p>{admin.date}</p>
        <p>{admin.email}</p>
      </>
      )
    }
  }

  handleClick = () => {
    this.setState({
      users: true
    })
  }

  handleClick2 = () => {
    this.setState({
      users: false
    })
  }

  render() {
    return(
    <div className="adminContainer">
      <div className="adminNav">
        <button onClick={this.handleClick}>Users</button>
        <button onClick={this.handleClick2}>Admin Home</button>
      </div>
      {this.state.users ?
      <Users /> :
      this.adminPage()
      }
    </div>
    )
  }
}

export default Admin;
