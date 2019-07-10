import React from 'react';
import Maps from './MapContainer';
import '../App.css';
import Clothes from './trialClothes';


const Home = () => {
return (
  <div className="MainContainer">
    <div className="navbar-c">
      <div className="navbar">
        
      </div>
    </div>

    <>
      <Maps />
      <Clothes />
    </>

  </div>
  )
}

export default Home;