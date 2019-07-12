import React from 'react';
import Maps from './MapContainer';
import '../App.css';
import Clothes from './Clothes';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'


const Home = () => {
return (
  
  <div className="MainContainer">
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
    {/* <div class="parallax"></div> */}
    <div className="home-section ">
      <div className="section-content">
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</h4> 
        <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
        <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea commodo consequat. </h4>
        <div className="button-container">
          <button>Login</button>
          <button>Sign up</button>
        </div>
     </div>
    </div>
      <div class="parallax"></div>
      <div className="hiw-section ">
      <div className="hiw-content">
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</h4> 
        <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h4>
        <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ex ea commodo consequat. </h4>
        <div className="button-container">
          <button><Link to={"/about"}>How It Works</Link></button>
        </div>
     </div>
    </div>
      <div class="parallax"></div>






      <div class="parallax"></div>
      <div className="map-container">
      <>
        <Maps />
        {/* <Clothes /> */}
      </>
      </div>
      <div class="parallax"></div>
  </div>
  )
}

export default Home;