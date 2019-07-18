import React from 'react';
import axios from 'axios'
import Users from './Users'
import GetSingleInfo from './GetSingleInfo'
import './cssComponents/Admin.css'
import { Link } from 'react-router-dom'
import Home from './Home'

class Admin extends React.Component {

  state = {
    admin: null,
    users: false,
    displaySingle: null
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/profile/admins')
    this.setState({
      admin: response.data[0].user
    })
  }

  adminPage = () => {
    const { admin } = this.state
    console.log('admin page')
    if (!admin) {
      return null
    } else {
      return(
      <div className="adminInfo">
        <p>{admin.date}</p>
        <p>{admin.email}</p>
      </div>
      )
    }
  }

  handleClick = () => {
    this.setState({
      users: true,
      displaySingle: null
    })
  }

  handleClick2 = () => {
    this.setState({
      users: false,
      displaySingle: null
    })
  }

  handleClickSingleUser = (user) => {
    this.setState({
      users: false,
      displaySingle: user
    })
  }

  render() {
    console.log(this.state)
    return(
    <div className="adminContainer">
      <div className="adminNav">
        <div className="adminButtons">
          <button onClick={this.handleClick}>Users</button>
          <button onClick={this.handleClick2}>Admin Home</button>
        </div>
      </div>
      <div className="adminTitle">
        <h2>Hello Admin</h2>
      </div>
      {this.state.users ?
      <Users displaySingle={this.handleClickSingleUser}/> : 
      this.state.displaySingle === null ?
      this.adminPage() :
      <GetSingleInfo user={this.state.displaySingle} /> 
      }
    </div>
    )
  }
}

export default Admin;
