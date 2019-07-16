import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';

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
        </div>
    )

}

export default Faq;