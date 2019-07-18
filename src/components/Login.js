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

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('token', 'THIS IS LOCAL STORAGE TESTTTTT')
    // }

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
                        {/* <h1>Login to your account</h1>
                        <p>Some Contents</p> */}
                        <LoginForm />
                        {/* <button onClick={() => this.closeModal()}>Submit</button> */}
                        
                    </div>
                </Modal>
            </section>
        );
    }
}
                         



export default Login;