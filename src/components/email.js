import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';




class Email extends Component {
    state = {
        email: "",
        // subject: "",
        message: "",
    }

    handleLocation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async (e) => {
        e.preventDefault()
        const order = {
            email: this.state.email,
            // subject: this.state.subject,
            message: this.state.message
        }
            try {

                // const body = JSON.stringify(order1)
                const res = await axios.post('/api/email', order)
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }

        alert = () => {
             useAlert()
        }        

       render() {
        return (
            <Fragment>
            {/* <div className="navbar-c" id="top">
                <ul className="navbar">
                    <div className="title">
                    <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
                    <li><img src={Icon} alt="icon" className="icon"/></li>
                    <li><i className="fa fas fa-spinner fa-spin"></i></li>
                    </div>
                    <div className="content">
                    <li><Link className="Hiw" to={"/"}>HOW IT WORKS</Link></li>
                    <li><Link className="Price" to={"/"}>PRICING</Link></li>
                    <li><Link className="Faq" to={"/"}>FAQ</Link></li>
                    <li><Link className="Contact" to={"/"}>CONTACT</Link></li>
                    <li><Link className="Contact" to={"/orders"}>ORDERS</Link></li>
                    <li><Link className="Contact" to={"/"}>SIGN OUT</Link></li>
                    </div>
                </ul>
            </div> */}
            {/* <div className="form-group">
            <input type="email" placeholder="email" name="email" onChange={this.handleLocation} required />
            </div>
            <div className="form-group">
            <input type="subject" placeholder="subject" name="subject" onChange={this.handleLocation} required />
            </div>
            <div className="form-group">
            <input type="message" placeholder="message" name="message" onChange={this.handleLocation} required />
            </div>
            <form className="form">
            <input type="button" id="Login" value="Log In" onClick={this.handleLogin} />
            </form> */}


        <div id="contact" className="Contact"> 
            <h1 className="contact-us-word">Contact Us</h1>   
            <div className="contact-us-form-container">
            <form className="contact-us-form">
                <input type="email" name="email" className="question" id="nme" onChange={this.handleLocation} required />
                <label for="nme"><span>What's your email?</span></label>
                {/* <textarea type="subject" rows="2" className="question" id="msg" name="subject" onChange={this.handleLocation} required ></textarea>
                <label for="msg"><span>Subject for this message?</span></label> */}
                <textarea type="message" name="message" rows="2" className="question" id="msg" onChange={this.handleLocation} required></textarea>
                <label for="msg"><span>What's your message?</span></label>
                <input id="contact-submit" type="submit" value="SUBMIT" onClick={this.handleLogin} onClick={() => {
                    alert.show('Submitted')
                    }} />
            </form>     
            </div>
        </div>  

            </Fragment>
        )
    }
}

export default Email;