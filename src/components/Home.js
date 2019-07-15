import React from 'react';
import Maps from './MapContainer';
import '../App.css';
import Clothes from './Clothes';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Laundry from '../laundry2.jpg';
import Icon from '../Group.svg';
import Login from './Login';
import Signup from './Signup';


const Home = () => {
return (
  
  <div className="MainContainer">
    <div className="navbar-c">
      <ul className="navbar">
        <div className="title">
          <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
          <li><img src={Icon} alt="icon" className="icon"/></li>
          {/* <li><i className="fa fas fa-spinner fa-spin"></i></li> */}
        </div>
        <div className="content">
          <li><a href="#hiw" className="Hiw" to={"/about"}>HOW IT WORKS</a></li>
          <li><a href="#pricing" className="Price" to={"/pricing"}>PRICING</a></li>
          <li><a href="#faq" className="Faq" to={"/Faq"}>FAQ</a></li>
          <li><Link className="Contact" to={"/contact"}>CONTACT</Link></li>
        </div>
      </ul>
    </div>
    {/* <div class="parallax"></div> */}
    <div className="home">
      <img src={Laundry} alt="laundry" className="laundry"/>
      <div className="home-section ">
        <div id="home" className="section-content">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, t labore et dolore magna aliqua </h4>
          <h4>sed do eiusmod temporincididunt ut labore et dolore magna aliqua  et dolore magna aliqua .</h4> 
          <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. </h4>
          <h4>Ut enim ad minim veniam, quis nostrud exercitation . </h4>
          <div className="button-container">
            <Login />
            <Signup />
            {/* <button>Sign up</button> */}
          </div>
        </div>
      </div>
    </div>
      <div class="parallax"></div>
      <div className="hiw-section-grid-container">
        <div className="grid-box">
          <div className="left">
            <div id="hiw" className="Hiw-word">HOW IT WORKS</div>
          </div>
          <div className="right">
            <div className="right-box">
              <div className="hiw-content">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, t labore et dolore magna aliqu</h4>
                <br></br> 
                <div>
                  <h4>Step 1</h4>
                  <p>Lorem ipsum dolor, consectetur...</p>
                  <br></br>
                </div>
                <div>
                  <h4>Step 2</h4>
                  <p>Lorem ipsum dolor, consectetur...</p>  
                  <br></br>      
                </div>
                <div>
                  <h4>Step 3</h4>
                  <p>Lorem ipsum dolor, consectetur...</p>  
                  <br></br> 
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>  
      <div class="parallax"></div>
      <div id="pricing" className="Pricing">Pricing</div>
    

      <div class="parallax"></div>


      <div id="faq" className="FAQ">FAQ</div>


      <div class="parallax"></div>


      <div className="Contact">Contact</div>


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