// This page will be the userpage.
import React, { Fragment} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';
import Nav from './Nav';
import '../components/cssComponents/Profile.css';

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
      <Nav />
      <div className="profile-container"> 
        <div className="profile-c-box"> 
          <h1 className="profile-email">Hello and Welcome, <h1 className="email-title">{this.state.email}</h1></h1>
          <h2 className="profile-credit-card">Your credit card stored in plain text is: {this.state.creditcard}</h2>
          <h2 className="profile-dob">Your date of birth is: {this.state.dob}</h2> 
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Profile