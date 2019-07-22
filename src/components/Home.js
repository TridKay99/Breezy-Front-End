import React from 'react';
import Maps from './MapContainer';
import '../App.css';
// import Clothes from './Clothes';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Laundry from '../laundry2.jpg';
import Login from './Login';
import Signup from './Signup';
import Email from './email';
import Nav from './Nav';
import Icon from '../Group.svg';



const Home = () => {

return (
  
  <div className="MainContainer">
    <Nav />
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
      <div className="parallax"></div>
      <div className="hiw-section-grid-container">
        <div className="grid-box">
          <div className="left">
            <div id="hiw" className="Hiw-word">HOW IT WORKS</div>
          </div>
          <div className="right">
            <div className="right-box">
              <div className="hiw-content">
                <h4>It's fairly easy to use our app, read the instructions below and follow them step by step, and you're good to go!</h4>
                <br></br> 
                <div>
                  <h4>Step 1</h4>
                  <p>Create an account, and customize your own profile page.</p>
                  <br></br>
                </div>
                <div>
                  <h4>Step 2</h4>
                  <p>Place your order here online, or call 0417194541.</p>  
                  <br></br>      
                </div>
                <div>
                  <h4>Step 3</h4>
                  <p>Your order is ready for pickup! We notify you via SMS/email with the locker number your order is in and the code to open it (usually the last 4 digits of your phone number).</p>  
                  <br></br> 
                  <div className="back-to-top"><a href="#top"><p id="back-to-top">Back to top <i class="fa fas fa-chevron-up"></i></p></a></div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>  
      <div className="parallax"></div>
      <div className="pricing-container">
        <div id="pricing" className="Pricing-word">PRICINGS</div>
        <div className="sub-text"><p>FREE PICK-UP, DELIVERY AND GST. INCLUDED IN PRICING </p></div>
        <div className="back-to-top"><a href="#top"><p id="back-to-top">Back to top <i class="fa fas fa-chevron-up"></i></p></a></div>
        <div className="pricing-grid-container">
          <div className="pricing-grid-box">
            <div className="pricing-left">
              <div className="pricing-left-box">
                <p className="essentials">Essentials</p>
                <div className="content-grid">
                    <div className="clothes-name-left-box">
                      <p>TROUSERS</p>
                      <p>JACKET</p>
                      <p>DRESS</p>
                      <p>SKIRT</p>
                      <p>BLOUSE</p>
                      <p>SHIRT</p>
                      <p>TIES</p>
                      <p>SCARVES</p>
                      <p>HEAVY COAT</p>
                    </div>
                    <div className="clothes-price-right-box">
                      <p>$12.10</p>
                      <p>$13.10</p>
                      <p>$22.00</p>
                      <p>$12.10</p>
                      <p>$12.10</p>
                      <p>$5.00</p>     
                      <p>$11.00</p>     
                      <p>$12.20</p>     
                      <p>$24.20</p>     
                    </div>
                </div>
              </div>
            </div>
            <div className="pricing-middle">
              <div className="pricing-middle-box">
                <p className="specials">Specials</p>
                <div className="pricing-content-grid">
                  <div className="specials-name-left-box">
                    <p>5 SHIRTS</p>
                    <h7>(Laundered and pressed)</h7>
                    <p>3 GARMENTS</p>
                    <h7>(Standard garments only)</h7>
                    <p>2 DRESSES</p>
                    <h7>(Standard and dresses only)</h7>
                    <br></br>
                    <h3 className="wash-fold-laundry">WASH AND FOLD LAUNDRY</h3>
                    <p>UNDER 5KG'S</p>
                    <p>UNDER 10KG'S</p>
                    {/* <br></br>
                    <h3>OTHER SERVICES</h3>
                    <p>ALTERATIONS FROM</p> */}
                  </div>
                  <div className="specials-price-right-box">
                    <p>$21.50</p>
                    <br></br>
                    <p>$27.60</p>
                    <br></br>
                    <p>$27.60</p>
                    <br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <br></br><br></br>

                    <p>$27.60</p>
                    <p>$49.70</p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-right">
              <div className="pricing-right-box">
                <p className="other">Other</p>
                <div className="other-content-grid">
                  <div className="other-name-left-box">
                    <p>DOONAS</p>
                    <p>BLANKET FORM</p>
                    <p>BEDSPREAD FORM</p>
                    <p>SLEEPING BAG</p>
                    <p>ARM COVER</p>
                    <p>CUSHION COVER</p>
                    <br></br>
                    <h3>OTHER SERVICES</h3>
                    <p>ALTERATIONS FROM</p>
                    <p className="small-text">(When making an order include your instructions in the notes section)</p>

                  </div>
                  <div className="other-price-right-box">
                    <p>$33.00</p>
                    <p>$27.60</p>
                    <p>$23.00</p>
                    <p>$33.10</p>
                    <p>$9.60</p>
                    <p>$14.20</p> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>$7.90</p>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax"></div>
      {/* <div id="contact" className="Contact"> 
        <h1 className="contact-us-word">Contact Us</h1>   
        <div className="contact-us-form-container">
          <form className="contact-us-form">
            <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
            <label for="nme"><span>What's your email?</span></label>
            <textarea name="message" rows="2" class="question" id="msg" required autocomplete="off"></textarea>
            <label for="msg"><span>What's your message?</span></label>
            <input id="contact-submit" type="submit" value="SUBMIT" />
          </form>     
        </div>  
      </div>   */}
      <Email />
      <div className="back-to-top"><a href="#top"><p id="back-to-top-map">Back to top <i class="fa fas fa-chevron-up"></i></p></a></div>
      <p className="map-subtext">Here's a simple map of where we are</p>      
      <div className="map-container">  
      <>
        <Maps />
        {/* <Clothes/> */}
      </>
      </div>

      <div className="parallax"></div>


  
  </div>

 
  )
}

export default Home;