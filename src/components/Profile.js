// This page will be the userpage.
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Profile extends React.Component {
  state = {
    users: null
  };
  
  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/profile/users')
    this.setState({
      users: response.data
    })
    const {users} = this.state
    users.find((user) => {
      if (user._id === "5d23ea2b68a4d31daa40cbaf") {
        console.log(user)
      }
    })
  }



  // In this render we ideally want basic information(Name, DOB, Date create,(IMAGE?, if no image, default image?))
  // A link or a side box with the users pending/history of jobs thats been created. "DRY CLEANING COMING  UP"

  render() {
    return(
    <>
      <h1>profile page</h1>
      <button><Link to={'/orders'}>Make an Order</Link></button>
    </>
    )
  }
}


export default Profile