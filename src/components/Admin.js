import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Admin extends React.Component {
  state = {
    admin: null
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/profile/admins')
    console.log(response)
    this.setState({
      admin: response.data[0].user
    })
  }

  render() {
    const { admin } = this.state
    if (!admin) {
      return null
    } else {
      return(
        <div className="AdminContainer">
          <h1>Hello Admin</h1>
          <p>{admin.date}</p>
          <p>{admin.email}</p>
          <div className="linkTo">
            <Link to='/allusers'><p>Users</p></Link>
          </div>
        </div>
      )
    }
  }
}

export default Admin