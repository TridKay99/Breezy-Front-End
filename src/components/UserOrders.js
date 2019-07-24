import React from 'react';
import axios from 'axios'
import Users from './Users'
import GetSingleInfo from './GetSingleInfo'
import './cssComponents/Admin.css'
import { Link } from 'react-router-dom'
import Home from './Home'
import DisplayOrder from './displayOrder'
import UserOrders1 from './UserOrders1'
import Nav from './Nav';
import './UserOrders.css';

class UserOrders extends React.Component {

  state = {
    users: false,
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
      <Nav />
      <div className="adminNav">
      </div>
      <div className="adminTitle">
        <h2 className="order-history">Order History</h2>
        {this.state.orders}
      </div>
      <UserOrders1 orders={this.handleClickOrders} orderSingle={this.handleClickSingleOrder}/>
      <GetSingleInfo user={this.state.displaySingle} /> 
      <DisplayOrder order={this.state.orderSingle} />
      
    </div>
    )
  }
}

export default UserOrders;
