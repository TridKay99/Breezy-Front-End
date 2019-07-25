import React, { Fragment, useState} from 'react'
import axios from 'axios'
import './LoginForm.css';
import { readdirSync } from 'fs';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()
        if(password === null) {
            console.log('Passwords needs to exist')
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
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/auth`, body, config)
                const config1 = {
                    headers: {
                        'x-auth-token': res.data.token
                    }
                }
                await localStorage.setItem('token', res.data.token)
                const account = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/profile/me`, config1)
                if (!localStorage.hasOwnProperty('token')) {
                    console.log("wrong username or password")
              } else if (account.data.user.account === false && localStorage.hasOwnProperty('token')) {
              window.location.assign("/orders")
            //   return <Link to={'/orders'}>Profile</Link>
            //   return <Redirect push to="/orders" />;
            // console.log(res)
            // console.log(account.data.user.account)
              } else {
                window.location.assign("/protected/admin")
                // return <Link to={'/protected/admin'} className="Contact">Profile</Link>
                // return <Redirect push to="/protected/admin" />;
              }
                console.log(res.data.token)
            } catch (err) {
                console.error(err.response.data)
            }
        }
    }
    return (
        <Fragment>
            <h1>Log in to your account</h1>
                <div className="form-container" >
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                        <input type="email" id="EA" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="pass"
                            value={password} onChange={e => onChange(e)} required
                            minLength="6"
                        />
                        </div>
                        {/* <input id="Login-button" type="submit" value="Log In" href="www.google.com"  /> */}
                        {/* <input id="Login-button" type="submit"  value="Login" /> */}
                        <input type="button" id="Login" value="Login" onClick={onSubmit} />
                    </form>
                 </div>
        </Fragment>
    )
}



export default LoginForm;
