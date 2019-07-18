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
        <>
        <div className="userTitle">
          <p>{this.props.user.fullname}'s Information</p>
        </div>
        <div className="outsideUserContainer">
          <div className="userContainer">
            <p>Name:</p><h4>{this.props.user.fullname}</h4>
            <p>Email:</p><h4>{this.props.user.user.email}</h4> 
            <p>Address:</p><h4>{this.props.user.address}</h4>
            <p>Last Login:</p><h4>{this.props.user.date}</h4>
            <div className="userJobsContainer">
              <h4>Current Jobs:</h4>
              <div className="userJobsBox">
                {/* {this.props.user.jobs.map((job) => {
                  return<p>{job}</p>
                })} */}
              <p className="jobsPText">THIS WILL BE JOBS  THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   
              THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   
              THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   
              THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS   THIS WILL BE JOBS    </p>
              </div>
            </div>
          </div>
          <button onClick={this.deleteThisUser}>Delete</button>
        </div>
        </>
      )
    }
  }
}

export default GetSingleInfo

