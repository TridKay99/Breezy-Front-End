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

  // Make sure the user can actually be delete. 
  // this. statement does not work
  deleteThisUser() {
    this.user.remove(this.props.user.user._id)
  }

  render() {
    console.log('HELLO')
    if (!this.props.user) {
    return null
    } else {
      return (
        <div className="outsideUserContainer">
          <div className="userContainer">
            <p>Name: {this.props.user.fullname}</p>
            <p>Email: {this.props.user.user.email}</p>
            <div className="userJobsContainer">
              <div className="userJobsBox">
              <p>THIS WILL BE JOBS  THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   
              THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   
              THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   
              THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS    </p>
              </div>
            </div>
          </div>
          <button onClick={this.deleteThisUser}>Delete</button>
        </div>
      )
    }
  }
}

export default GetSingleInfo

