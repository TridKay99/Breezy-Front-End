import React, { Component, Fragment } from 'react'
import axios from 'axios'

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

       render() {
        return (
            <Fragment>
            
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
                <input type="text" name="name" class="question" id="nme" onChange={this.handleLocation} required />
                <label for="nme"><span>What's your email?</span></label>
                <textarea name="message" rows="2" class="question" id="msg" onChange={this.handleLocation} required></textarea>
                <label for="msg"><span>What's your message?</span></label>
                <input id="contact-submit" type="submit" value="SUBMIT" onClick={this.handleLogin}/>
            </form>     
            </div>
        </div>  

            </Fragment>
        )
    }
}

export default Email;