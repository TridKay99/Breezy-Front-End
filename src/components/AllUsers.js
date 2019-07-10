import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AllUsers extends React.Component {
  state = {
    users: null
  };
  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/profile/users')
    this.setState({
      users: response.data
    })
  }

  render() {
    const { users } = this.state
    if (!users) {
      return null
    } else {
      return users.map((user, index) => {
        return <Link key={index} to={`user/${user.user.email}`}><p>{user.user.email}</p></Link>
      })
    }
  }
}

export default AllUsers