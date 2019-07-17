// This page will be the userpage.
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './cssComponents/Profile.css'
import Home from './Home'

class Profile extends React.Component {
  state = {
    users: null
  };

   async getUsers() {
    const response = await axios('http://localhost:5000/api/profile/users')
    this.setState({
      users: response.data
    })
  }

  render() {
    this.getUsers();
    const {users} = this.state
    if (!users) {
      return <div class="spinner"></div>                 
    } else {
      const myuser = users.find((user) =>{
        if (user._id === "5d2c13b9700c640b08924761") {
          return user;
        } else {
          return null;
        }
      });
      if(myuser) {
        return (
        <React.Fragment>
        {/* <Nav /> */}
        <div className="subNav">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="profileContainer">
          <div className="userTitle">
            <h1>{myuser.fullname}'s Profile</h1>
          </div>
          <div className="profileInfoContainer">
            <div className="profileInfo">
              <p>Delivery Address:</p><h4>{myuser.address}</h4> 
              <p>Email:</p><h4>{myuser.user.email}</h4> 
              <p>User id:</p><h4>{myuser.user._id}</h4>
              <p>Current Orders:</p>
            </div>
            <div class="profileOrdersContainer">
              <div className="profileOrders">
                  <p>ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE 
                  ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE ORDERS GO HERE 
                  </p>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
        )
      } else {
        return <h1>comes here</h1> 
      }
    }
  }
}



export default Profile