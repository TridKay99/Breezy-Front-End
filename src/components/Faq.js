import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';
import '../components/Faq.css';


const Faq = () => {
    return (
        <div className="MainContainer">
            <div className="navbar-c" id="top">
                <ul className="navbar">
                    <div className="title">
                        <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
                        <li><img src={Icon} alt="icon" className="icon"/></li>
                        {/* <li><i className="fa fas fa-spinner fa-spin"></i></li> */}
                    </div>
                    <div className="content">
                    <li><Link className="Price" to={"/faq"}>YOU'RE AT THE FAQ PAGE</Link></li>
                        <li><Link className="Hiw" to={"/"}>GO BACK TO HOME</Link></li>
                        
                        {/* <li><Link className="Faq" to={"/Faq"}>FAQ</Link></li>
                        <li><Link className="Contact" to={"/"}>CONTACT</Link></li>  */}
                    </div>


                </ul>
            </div>

            <div className="FAQ-container">
                <div className="FAQ-title">Frequently Asked Questions</div>
                <div className="overall-content-container">
                    <div className="FAQ-content-container">
                        <div className="FAQ-content">
                            <h8>WHAT IS THE TURN AROUND TIME?</h8>
                            <p className="turn-around">Monday pickups are dropped off on Wednesday, Tuesday pickups are dropped off on Thursday. Richmond pickups are Monday. South Yarra pickups are Tuesday.</p>
                            <h8>HOW DO I MAKE A PAYMENT?</h8>
                            <p className="htm-payment">After you place your order, payment is required and gets instantly put through as an order to us.</p>
                            <h8>HOW DO I MAKE AN ORDER?</h8>
                            <p className="htm-order">After you’ve signed up and created profile simply click the order button.</p>
                            <h8>HOW DO I MAKE A SPECIAL REQUEST?</h8>
                            <p className="htm-special-request">There is a notes to Iron Maiden section in the order form.</p>
                            <h8>WHAT ARE 'SPECIAL' GARMENTS?</h8>
                            <p className="what-are-sp">Special garments are garments that are $15 or less. These do not include garments made of delicate materials including silk and lace.</p>
                            <p className="special-note">Turnaround for any item with special treatment may be longer than two days. Please call us on 1300 4 273399 with any questions. Thank you!</p> 
                        </div> 
                    </div>  
                </div>                 
            </div>
        </div>
        
    )

}


export default Faq;