import React from 'react';
import Modal from 'react-awesome-modal';
import './Signup.css';

 class Signup extends React.Component {
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
                
                <input type="button" id="Signup" value="Sign up" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Register your account here</h1>
                        <p>Some Contents</p>
                        <button onClick={() => this.closeModal()}>Submit</button>
                        
                    </div>
                </Modal>
            </section>
        );
    }
}
                         



export default Signup;