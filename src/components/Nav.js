import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
    <div className="navbar-c">
      <ul className="navbar">
        <div className="title">
          <li><Link to={"/"}>Name</Link></li>
          <li><i className="fa fas fa-spinner fa-spin"></i></li>
        </div>
        <div className="content">
          <li><Link to={"/about"}>How It Works</Link></li>
          <li><Link to={"/pricing"}>Pricing</Link></li>
          <li><Link to={"/Faq"}>FAQ</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </div>
      </ul>
    </div>
    )
  }
}

export default Nav