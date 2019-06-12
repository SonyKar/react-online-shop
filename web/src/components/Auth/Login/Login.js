import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Login.css';
import Input from '../../Input/Input';
import { checkValidatity } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';

class Login extends Component {
    state = {
        loginForm: {
            login: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Login',
                    id: 'login'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                    id: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLenght: 5
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    componentDidMount() {
        this.props.onCleanAuth();
    }

    loginFormHandler = ( event ) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.loginForm) {
            formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
        }

        this.props.onLogin(formData.login, formData.password, this.props.cart);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedFormElement = {
            ...this.state.loginForm[inputIdentifier],
            value: event.target.value,
            valid: checkValidatity(event.target.value, this.state.loginForm[inputIdentifier].validation),
            touched: true
        };
        const updatedLoginForm = {
            ...this.state.loginForm,
            [inputIdentifier]: updatedFormElement
        };
        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            loginForm: updatedLoginForm,
            formIsValid: formIsValid
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }
        let form = (
            <form onSubmit={this.loginFormHandler} encType="multipart/form-data">
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        idName={formElement.config.elementConfig.id}
                        label={formElement.config.elementConfig.placeholder}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                    />
                ))}
                <p className="error">{ this.props.error }</p>
                <p className="text-center"><button className="btn btn-dark" disabled={!this.state.formIsValid || this.props.loading}> { this.props.loading ? 'Processing' : 'Log In' } </button></p>
            </form>
        );

        if (this.props.role !== '') {
            form = <Redirect from="/login" to="/" />
        }
        
        return (
            <div className="Login">
                <div className="container">
                    <div className="row">
                        <div className="col-6" style={{margin: 'auto'}}>
                            {form}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        role: state.auth.person.role,
        cart: state.cart.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (login, password, cart) => {
            dispatch(actions.login(login, password, cart));
        },
        onCleanAuth: () => dispatch(actions.cleanAuth())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);