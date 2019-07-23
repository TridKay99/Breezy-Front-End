import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './ProfileReg.css';
import Nav from './Nav';

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
                window.location.assign("/orders")
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }

       render() {
        return (
            <Fragment>
            <div className="profile-register-container">
                <Nav />
                <div className="profile-title-container">
                    <h1 className="profile-details-title">Fill in your profile details here</h1>
                </div>
                <div className="profile-regandform-container">
                    
                    <div className="profile-reg-form">
                        <label type="fullname"  className="fullname-label" name="fullname"> Full Name: </label>
                        <input type="fullname"  className="fullname" placeholder="Eg: Bob the Builder" name="fullname" onChange={this.handleLocation} required />
                        
                        <label type="fullname" className="creditcard-label" name="fullname"> Credit Card Number: </label>
                        <input type="creditcard" className="creditcard" placeholder="Eg: 333333333333" name="creditcard" onChange={this.handleLocation} required />
                        
                        <label type="fullname" className="dob-label" name="fullname"> Date of birth: </label>
                        <input type="dob" className="dob" placeholder="Eg: 01/02/1986" name="dob" onChange={this.handleLocation} required />
                    
                        <form className="form">
                            <input type="button" id="Login" value="Submit" onClick={this.handleLogin} />
                        </form>
                    </div>
                </div>
            </div>

            </Fragment>
        )
    }
}

export default ProfileReg;