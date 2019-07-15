<<<<<<< HEAD
import React from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';
import LoginForm from './LoginForm';

 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                
                <input type="button" id="Login" value="Login" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Login to your account</h1>
                        <p>Some Contents</p>
                        <LoginForm />
                        <button onClick={() => this.closeModal()}>Submit</button>
                        
                    </div>
                </Modal>
            </section>
        );
    }
}
                         



export default Login;
=======
import React, { Fragment, useState} from 'react'
import axios from 'axios'

const Login = () => {
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
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }
    }

    return (
        <Fragment>
               <h1 className="large text-primary">Sign In</h1>
      
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e => onChange(e)} required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Log In" />
      </form>
        </Fragment>
    )
}

export default Login
>>>>>>> master
