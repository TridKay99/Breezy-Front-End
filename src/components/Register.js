import React, { Fragment, useState} from 'react'
import axios from 'axios'
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: ''
    })

    const {email, password, password2} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        if(password !== password2) {
            console.log('Passwords do not match')
        } else {
            const newUser = {
                email,
                password
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify(newUser)

                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/users`, body, config)
                await localStorage.setItem('token', res.data.token)
                if (!localStorage.hasOwnProperty('token')) {
                    console.log("Wrong data entered")
              } else {
            //   window.location.assign("/profilereg")
              window.location.href = "/profilereg"
            console.log("Correct")
              }
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }
    }

    return (
        <Fragment>
            <h1><i className="fa fas fa-user"></i> Create Your Account</h1>
                <div className="signup-container">
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                        <input type="email" id="EA-register" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            id="pass-register"
                            placeholder="Password"
                            name="password"
                            value={password} onChange={e => onChange(e)} required
                            minLength="6"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            id="cpass-register"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2} onChange={e => onChange(e)} required
                            minLength="6"
                        />
                        </div>
                        <input id="signup-button" type="submit" value="Submit" />
                    </form>
                    {/* <p>
                        Already have an account? <a href="login.html">Sign In</a>
                    </p> */}
                </div>
        </Fragment>
    )
}

export default Register;
