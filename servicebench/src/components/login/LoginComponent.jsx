import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import userAuthenticator from '../../services/userAuthenticator.service';
import { Redirect } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            message: "",
            username: "",
            password: "",
            formErrors: { username: '', password: '' },
            usernameValid: false,
            passwordValid: false,
            formValid: false,
            user: {}
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e) {
        e.preventDefault();
       
        userAuthenticator.getUserByUserName(this.state.username).then((data) => {
            if(this.state.username != data[0].userName){ 
                this.setState({message : "Invalid User Name"});
            }else if(this.state.password != data[0].password){
                    this.setState({message : "Invalid Password"});
            }
           else{
            this.setState({user : data[0]})
            this.props.history.push(`/home`);
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

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <h1 className="text-info">Servicebench Login</h1>
                {this.state.message ? <h4 className="alert alert-danger">{this.state.message}</h4> : null}
                <div>
                    <Form onSubmit={this.login}>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
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
                        <Button block disabled={!this.state.formValid} type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;