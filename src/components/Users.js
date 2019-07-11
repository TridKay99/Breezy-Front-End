import React from 'react'
import axios from 'axios'
// import GetUserInfo from './GetUsersInfo'
import GetSingleInfo from './GetSingleInfo'


class AllUsers extends React.Component {
  state = {
    users: null,
    selected: null
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/profile/users')
    // console.log(response.data)
    this.setState({
      users: response.data
    })
  }

  shouldComponentUpdate(newProps, newState) {
    // console.log('App is running shouldComponentUpdate');

    // console.log("THESE ARE PROPS")
    // console.log(newProps)
    // console.log("THIS IS THE STATE")
    // console.log(newState)
    return true;
  }

  handleUserInfo(user) {
    this.setState({
      selected: user
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
          <GetSingleInfo users={this.state.selected} />
          {users.map((user, index) => <p key={index} onClick={() => this.handleUserInfo(user)}>{user.user.email}</p>)}
        </div>
      )
      // return <GetUserInfo users={users} />
    }
  }
}

export default AllUsers