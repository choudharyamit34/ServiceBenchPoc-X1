import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import userAuthenticator from '../../services/userAuthenticator.service';
import { Redirect } from 'react-router-dom';
import '../login/login.css';
import loginBgImage from '../../resources/imgs/SB_loginbg_computer.png';
import loginBgImagePNG from '../../resources/imgs/SB_picture_png-3.png';
import LogoImage from '../../resources/imgs/SB_logo.png';

var logoStyle = {
    background: `url(${LogoImage})`,
    width: `22.5%`,
    height: 80,
    marginTop: `-22px`,
    cursor: 'pointer'   

}
var loginBgStyle = {
    background: `url(${loginBgImagePNG})`,
    height: `100%`,
    width: `100%`,
    
}
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            message: "",
            username: "",
            password: "",
            formErrors: { username: '', password: '' },
            usernameValid: true,
            passwordValid: false,
            formValid: false,
            userValid:false,
            user: {}
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);       
    }

    login(e) {
        
        e.preventDefault();
        const userName = this.state.username;      
        console.log('username in login ', userName);
        console.log('state in Login method', this.state);
        
        userAuthenticator.getUserByUserName(userName).then((data) => {
            console.log('Data fetched in login method ', data);
            let userRecieved = {};
            if (Array.isArray(data)) {
                userRecieved = data[0];
            } else {
                userRecieved = data;
            }
            if (null != userRecieved) {
                console.log("userRecieved", userRecieved);
                if (this.state.password != userRecieved.password) {
                    this.setState({
                        message: "Invalid Password",
                        userValid: false
                    });
                   
                }
                else{
                    this.setState({
                        message: "Login Successfull",
                        userValid: true
                    }); 
                }
            }else{               
                this.setState({
                    message: "Invalid User Name",
                    userValid: false
                });
                
            }            
        });
    }

    handleChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value }, () => {
            this.validateField(id, value);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= 4;
                fieldValidationErrors.username = usernameValid ? '' : 'Username is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        if (this.state.userValid ==true) {
            this.props.history.push(`/home`);
        }   

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div style={loginBgStyle} className="image_no_background_repeat">
                <div className ="loginHeaderBackground ">
                 <div style={logoStyle}/>
                 </div>
                 <div className ="loginErrorContainer">
                  {this.state.message ? <h4 className="alert alert-danger">{this.state.message}</h4> : null}
                 </div>
                <div className="loginwidget">
                    <Form onSubmit={this.login}>
                        <Form.Group controlId="username">
                            <Form.Label >User Name</Form.Label>
                            <Form.Control autoFocus type="text" value={this.state.username}
                                onChange={this.handleChange} />
                            {this.state.formErrors.username ? <Form.Text className="text-danger">{this.state.formErrors.username}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password}
                                onChange={this.handleChange} />
                            {this.state.formErrors.password ? <Form.Text className="text-danger">{this.state.formErrors.password}</Form.Text> : null}
                        </Form.Group>
                        <Button block disabled={!this.state.formValid} type="submit" size="sm">
                            Login
                        </Button>
                    </Form>
                </div>
               </div>
        );
    }
}

export default LoginComponent;