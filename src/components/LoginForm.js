import React, { Fragment, useState} from 'react'
import axios from 'axios'
import './LoginForm.css';

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

                const res = await axios.post('/api/auth', body, config)
                localStorage.setItem('token', res.data.token)
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
                        <input id="Login-button" type="submit" value="Log In" />
                    </form>
                 </div>
        </Fragment>
    )
}



export default LoginForm;
