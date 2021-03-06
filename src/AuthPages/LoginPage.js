import React, { Component } from 'react';
import { loginExistingUser } from '../ApodsPages/apiUtilis'

export default class LoginPage extends Component {

    state = { 
        email: '',
        password: ''
    }


    handleEmailChange = (e) => { 
        
        this.setState({ 
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => { 

        this.setState({ 
            password: e.target.value
        })
    }

    handleSubmitForm = async (e) => { 
        e.preventDefault();
       
        try {
            const user = await loginExistingUser(this.state.email, this.state.password);

            this.props.handleUserChange(user); //getting the state from App.js and putting the user in localStorage

            this.props.history.push('/myfavorites');  //redirects new user to todo list
        } catch(e) {
            this.setState({ error: e.response.body.error })
        }   
    }

    render() {
        return (
            <div>
                <form className="sign-up-form"
                onSubmit={this.handleSubmitForm}>
                    <h2>Login Here!</h2>
                    {this.state.error && <h5 style={{ color: 'red' }}> Uh oh, {this.state.error}, please try again.</h5>}
                    <label className="signup-labels">
                        Email:
                        <input className="signup-labels" value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>
                    <label className="signup-labels"><br/>
                        Password:
                        <input className="signup-labels" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </label><br/>
                    <button className="signup-labels">Login!</button>
                </form>
               
            </div>
        )
    }
}
