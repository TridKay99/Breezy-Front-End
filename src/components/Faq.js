import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';
import './cssComponents/Faq.css'

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
                        <li><Link className="Hiw" to={"/"}>HOW IT WORKS</Link></li>
                        <li><Link className="Price" to={"/"}>PRICING</Link></li>
                        <li><Link className="Faq" to={"/Faq"}>FAQ</Link></li>
                        <li><Link className="Contact" to={"/"}>CONTACT</Link></li>
                    </div>
                </ul>
            </div>
            <div className="faqContainer">
                <div className="titleContainer">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="questionsContainer">
                    <div className="q1">
                        <h2>WHAT IS THE TURN AROUND TIME?</h2>
                        <p>Monday pickups are dropped off on wednesday, tuesday pickups are dropped off on thursday.
                        Richmond pickups are Monday.
                        South Yarra pickups are Tuesday.
                        </p>
                    </div>
                    <div className="q2">
                        <h2>HOW DO I MAKE A PAYMENT?</h2>
                        <p>After you place your order, payment is required and gets instantly put through as an order to us.</p>
                    </div>
                    <div className="q3">
                        <h2>HOW DO I MAKE AN ORDER?</h2>
                        <p>After you’ve signed up and created profile simply click the order button.</p>
                    </div>
                    <div className="q4">
                        <h2>HOW DO I MAKE A SPECIAL REQUEST FOR AN ORDER?</h2>
                        <p>There is a notes to Iron Maiden section in the order form.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Faq;