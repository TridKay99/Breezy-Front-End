import React, { Component, Fragment } from 'react'
import axios from 'axios'

class ProfileReg extends Component {
    state = {
        fullname: "",
        creditcard: Number,
        dob: "",
    }

    handleLocation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = async (e) => {
        e.preventDefault()
        const order = {
            fullname: this.state.fullname,
            creditcard: this.state.creditcard,
            dob: this.state.dob
        }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': `${localStorage.getItem('token')}`
                    }
                }

                // const body = JSON.stringify(order1)
                const res = await axios.post('/api/profile', order, config)
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }

       render() {
        return (
            <Fragment>
            <h1>Register Profile</h1>
            <div className="form-group">
            <input type="fullname" placeholder="Full Name" name="fullname" onChange={this.handleLocation} required />
            </div>
            <div className="form-group">
            <input type="creditcard" placeholder="creditcard" name="creditcard" onChange={this.handleLocation} required />
            </div>
            <div className="form-group">
            <input type="dob" placeholder="dob" name="dob" onChange={this.handleLocation} required />
            </div>
            <form className="form">
            <input type="button" id="Login" value="Log In" onClick={this.handleLogin} />
            </form>

            </Fragment>
        )
    }
}

export default ProfileReg;