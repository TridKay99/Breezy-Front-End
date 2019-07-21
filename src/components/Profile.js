// This page will be the userpage.
import React, { Fragment} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';



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
         <div className="navbar-c" id="top">
          <ul className="navbar">
            <div className="title">
              <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
              <li><img src={Icon} alt="icon" className="icon"/></li>
              <li><i className="fa fas fa-spinner fa-spin"></i></li>
            </div>
            <div className="content">
              <li><Link className="Hiw" to={"/"}>HOW IT WORKS</Link></li>
              <li><Link className="Price" to={"/"}>PRICING</Link></li>
              <li><Link className="Faq" to={"/"}>FAQ</Link></li>
              <li><Link className="Contact" to={"/"}>CONTACT</Link></li>
              <li><Link className="Contact" to={"/orders"}>ORDERS</Link></li>
              <li><Link className="Contact" to={"/"}>SIGN OUT</Link></li>
            </div>
          </ul>
        </div>
      <div> <h1>hello {this.state.email}</h1> </div>
      <div> <h1>Your credit card stored in plain text is: {this.state.creditcard}</h1> </div>
      <div> <h1>Your date of birth is: {this.state.dob}</h1> </div>
      </React.Fragment>
    )
  }
}

export default Profile