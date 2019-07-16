import React from 'react'

class GetSingleInfo extends React.Component {
  componentDidMount() {
    if (this.props.user) {
      const { user } = this.props.user;
      fetch(user)
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
      })
    }
  }
  render() {
    console.log('HELLO')
    if (!this.props.user) {
    return null
    } else {
      return (
        <div className="userContainer">
          <p>{this.props.user.fullname}</p>
          <p>Email: {this.props.user.user.email}</p>
          <p>THIS WILL BE JOBS</p>
        </div>
      )
    }
  }
}

export default GetSingleInfo

