import React from 'react'
import axios from 'axios'

class AllUsers extends React.Component {
  state = {
    users: null,
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
      return (
        <div>
          <h2>{users.length} Users</h2>
          {users.map((user, index) => <p key={index}> {user.user.email}</p>)}
        </div>
      )
    }
  }
}

export default AllUsers