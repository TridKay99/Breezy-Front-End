// This page will be the userpage.
import React, { Fragment} from 'react'
import axios from 'axios'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: localStorage.getItem('token'),
      creditcard: '',
      email: '',
      dob: ''
    }
  }
  
  async componentWillMount() {
  try {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `${localStorage.getItem('token')}`
        }
    }
    // const body = JSON.stringify(order1)
    console.log('here')
    const res = await axios.get('/api/profile/me', config)
    console.log(res.data)
    this.setState({
      creditcard: res.data.creditcard,
      email: res.data.user.email,
      dob: res.data.dob,
    })
} catch (err) {
    console.error(err.response.data)
}
}

  // In this render we ideally want basic information(Name, DOB, Date create,(IMAGE?, if no image, default image?))
  // A link or a side box with the users pending/history of jobs thats been created. "DRY CLEANING COMING  UP"

  render() {
    return(
      <React.Fragment>
      <div> <h1>hello {this.state.email}</h1> </div>
      <div> <h1>Your credit card stored in plain text is: {this.state.creditcard}</h1> </div>
      <div> <h1>Your date of birth is: {this.state.dob}</h1> </div>
      </React.Fragment>
    )
  }
}

export default Profile