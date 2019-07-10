// This page will be the userpage.
import React from 'react'
import axios from 'axios'

class Profile extends React.Component {
  state = {
    user: null
  };
  
  async componentDidMount() {
    const response = await axios('FIND USER BY _ID URL')
    // Should be response.data
    // After confirming its the right pathway for the data
    this.setState({
      user: response.data
    })
  }

  // In this render we ideally want basic information(Name, DOB, Date create,(IMAGE?, if no image, default image?))
  // A link or a side box with the users pending/history of jobs thats been created. "DRY CLEANING COMING  UP"

  render() {
    // return(
    //   <h1>hello</h1>
    // )
    const { user } = this.state
    // Assume user doesnt exist in first render or render user profile. Other wise this will crash.
    if (!user) {
      return null
    } else {
      return // information for User profile page. 
      // name, age, dob - links to pending orders.
    }
  }
}


export default Profile