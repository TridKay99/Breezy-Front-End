import React from 'react';
import { Link } from 'react-router-dom'

class GetUserInfo extends React.Component {
  render() {
    const { users } = this.props
    if (!users) {
      return null
    } else {
      return users.map((user, index) => {
        return <Link key={index} to={`user/${user.user.email}`}><p>{user.user.email}</p></Link>
      })
    }
  }
}

export default GetUserInfo