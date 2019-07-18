import React, { Component, Fragment } from 'react'
import axios from 'axios'

class Email extends Component {
    state = {
        email: "",
        subject: "",
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
            subject: this.state.subject,
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
            <h1>Contact us</h1>
            <form className="form">
            <div className="form-group">
            <input type="email" placeholder="email" name="email" onChange={this.handleLocation} required />
            </div>
            <div className="form-group">
            <input type="subject" placeholder="subject" name="subject" onChange={this.handleLocation} required />
            </div>
            <div className="form-group">
            <input type="message" placeholder="message" name="message" onChange={this.handleLocation} required />
            </div>

            <input type="submit" className="btn btn-primary" value="Log In" onClick={this.handleLogin} />
            </form>
            </Fragment>
        )
    }
}

export default Email;