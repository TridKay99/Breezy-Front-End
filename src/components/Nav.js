import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';

class Nav extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
  }

  ifloggedin = () => {
    if (!localStorage.hasOwnProperty('token')) {
      return null
} else {
return <li><Link className="Contact" onClick={this.logout} to={"/"}>LOG OUT</Link></li>
}
  }

  ifloggedin2 = () => {
    if (!localStorage.hasOwnProperty('token')) {
      return null
} else {
return <li><Link to={'/userorders'} className="Contact">ORDER HISTORY</Link></li>
}
  }

  ifloggedin3 = () => {
    if (!localStorage.hasOwnProperty('token')) {
      return null
} else {
return <li><Link to={'/profile'} className="Contact">PROFILE</Link></li>
}
  }

  ifloggedin4 = () => {
    if (!localStorage.hasOwnProperty('token')) {
      return null
} else {
return <li><Link to={'/orders'} className="Contact">ORDERS</Link></li>
}
  }

  render() {
    return (
    // <div className="navbar-c">
    //   <ul className="navbar">
    //     <div className="title">
    //       <li><Link to={"/"}>Name</Link></li>
    //       <li><i className="fa fas fa-spinner fa-spin"></i></li>
    //     </div>
    //     <div className="content">
    //       <li><Link to={"/about"}>How It Works</Link></li>
    //       <li><Link to={"/pricing"}>Pricing</Link></li>
    //       <li><Link to={"/Faq"}>FAQ</Link></li>
    //       <li><Link to={"/contact"}>Contact</Link></li>
    //     </div>
    //   </ul>
    // </div>
    <div className="navbar-c" id="top">
    <ul className="navbar">
      <div className="title">
        <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
        <li><img src={Icon} alt="icon" className="icon"/></li>
        <li><i className="fa fas fa-spinner fa-spin"></i></li>
      </div>
      <div className="content">
        {this.ifloggedin3()}
        {this.ifloggedin2()}
        {this.ifloggedin4()}

        <li><Link to={'/email'} className="Contact" >CONTACT</Link></li>
        {this.ifloggedin()}
      </div>
    </ul>
  </div>
    )
  }
}

export default Nav