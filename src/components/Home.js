import React from 'react';
import Maps from './MapContainer';
import '../App.css';
import Clothes from './Clothes';



const Home = () => {
return (
  
  <div className="MainContainer">
    <div className="navbar-c">
      <ul className="navbar">
        <div className="title">
          <li>Name</li>
          <li>Logo</li>
        </div>
        <div className="content">
          <li>How It Works</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact</li>
        </div>
      </ul>
      {/* <div class="parallax"></div>
      <div className="hi">
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div> */}
    </div>

      
      <div className="map-container">
      <>
        <Maps />
        {/* <Clothes /> */}
      </>
      </div>

  </div>
  )
}

export default Home;