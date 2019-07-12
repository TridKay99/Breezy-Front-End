import React from 'react';
import Maps from './MapContainer';
import '../App.css';
import Clothes from './Clothes';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'
import Laundry from '../laundry2.jpg'


const Home = () => {
return (
  
  <div className="MainContainer">
    <div className="navbar-c">
      <ul className="navbar">
        <div className="title">
          <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
          <li><i className="fa fas fa-spinner fa-spin"></i></li>
        </div>
        <div className="content">
          <li><Link className="Hiw" to={"/about"}>HOW IT WORKS</Link></li>
          <li><Link className="Price" to={"/pricing"}>PRICING</Link></li>
          <li><Link className="Faq" to={"/Faq"}>FAQ</Link></li>
          <li><Link className="Contact" to={"/contact"}>CONTACT</Link></li>
        </div>
      </ul>
    </div>
    {/* <div class="parallax"></div> */}
    <div className="home">
      <img src={Laundry} alt="laundry" className="laundry"/>
      <div className="home-section ">
        <div className="section-content">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, t labore et dolore magna aliqua </h4>
          <h4>sed do eiusmod temporincididunt ut labore et dolore magna aliqua  et dolore magna aliqua .</h4> 
          <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. </h4>
          <h4>Ut enim ad minim veniam, quis nostrud exercitation . </h4>
          <div className="button-container">
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
      <div class="parallax"></div>
      <div className="hiw-section">
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