import React from 'react';
import axios from 'axios'
import Users from './Users'
import GetSingleInfo from './GetSingleInfo'
import AdminOrders from './AdminOrders'
import './cssComponents/Admin.css'
import { Link } from 'react-router-dom'
import Home from './Home'
import DisplayOrder from './displayOrder'


class Admin extends React.Component {

  state = {
    admin: null,
    users: false,
    displaySingle: null,
    orders: false,
    orderSingle: null
  };

  async componentDidMount() {
  
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${localStorage.getItem('token')}`
      }
    }
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/profile/admins`, config)
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
      displaySingle: null,
      orders: false,
      orderSingle: null
    })
  }

  handleClick2 = () => {
    this.setState({
      users: false,
      displaySingle: null,
      orders: false,
      orderSingle: null
    })
  }

  handleClickSingleUser = (user) => {
    this.setState({
      users: false,
      displaySingle: user,
      orders: false,
      orderSingle: null
    })
  }

  handleClickSingleOrder = (order) => {
    this.setState({
      users: false,
      displaySingle: null,
      orders: false,
      orderSingle: order
    })
  }

  handleClickOrders = () => {
    this.setState({
      users: false,
      displaySingle: null,
      orders: true,
      orderSingle: null
    })
  }


  render() {
    return(
    <div className="adminContainer">
      <div className="adminNav">
        <div className="adminButtons">
          <button onClick={this.handleClick2}>Admin Home</button>
          <button onClick={this.handleClick}>Users</button>
          <button onClick={this.handleClickOrders}>Orders</button>
        </div>
      </div>
      <div className="adminTitle">
        <h2>Hello Admin</h2>
      </div>
      {this.state.users ?
      <Users displaySingle={this.handleClickSingleUser}/> : 
      this.state.orders === true ?
      <AdminOrders orders={this.handleClickOrders} orderSingle={this.handleClickSingleOrder}/> :
      this.state.displaySingle !== null ?
      <GetSingleInfo user={this.state.displaySingle} /> :
      this.state.orderSingle !== null ?
      <DisplayOrder order={this.state.orderSingle} /> :
      this.adminPage()
      }
    </div>
    )
  }
}

export default Admin;
