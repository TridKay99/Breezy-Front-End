import React from 'react'
import axios from 'axios'
// import GetSingleInfo from './GetSingleInfo';
import './cssComponents/Users.css'

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

  handleUserInfo(user) {
    this.props.displaySingle(user)
  }

  userPage = () => {
    const { users } = this.state
    if (!users) {
      return null
    } else {
      return (
      <React.Fragment>
      <h2>{users.length} Users</h2>
      {users.map((user, index) => <button className="userButtons" key={index} onClick={() => this.handleUserInfo(user)}>{user.user.email}</button>)}
      </React.Fragment>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.userPage()}
      </React.Fragment>
    )
  }
}

export default AllUsers