import React, { Component } from 'react' 
import { signUpNewUser } from '../ApodsPages/apiUtilis'


export default class SignUpPage extends Component {

    state = { 
        email: '',
        password: ''
    }

    handleEmailChange = (e) => { 
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => { 
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    handleSubmitForm = async (e) => { 
        e.preventDefault()
        console.log(this.state);

        const user = await signUpNewUser(this.state.email, this.state.password);
        console.log(user);
        this.props.handleUserChange(user);

        this.props.history.push('/myfavorites')

    }

    render() {
        return (
            <div>
                <form className="sign-up-form"
                onSubmit={this.handleSubmitForm}>
                    <h2>Sign-Up Here!</h2>
                    <label className="signup-labels">
                        Email:
                        <input className="signup-labels" value={this.state.email} onChange={this.handleEmailChange}/>
                    </label>
                    <label className="signup-labels"><br/>
                        Password:
                        <input className="signup-labels" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </label><br/>
                    <button className="signup-labels">Signup!</button>
                </form>
            </div>
        )
    }
}