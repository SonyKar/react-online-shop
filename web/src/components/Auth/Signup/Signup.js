import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Signup.css';
import Input from '../../Input/Input';
import { checkValidatity } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';
import { cleanAuth } from '../../../store/actions/auth';

class Signup extends Component {
    state = {
        signUpForm: {
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
            },
            passwordRepeat: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Repeat Password',
                    id: 'password2'
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

    signUpFormHandler = ( event ) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.signUpForm) {
            formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value;
        }

        this.props.onSignup(formData.login, formData.password, formData.passwordRepeat, this.props.cart);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedFormElement = {
            ...this.state.signUpForm[inputIdentifier],
            value: event.target.value,
            valid: checkValidatity(event.target.value, this.state.signUpForm[inputIdentifier].validation),
            touched: true
        };
        const updatedSignUpForm = {
            ...this.state.signUpForm,
            [inputIdentifier]: updatedFormElement
        };
        let formIsValid = true;
        for (let inputIdentifier in updatedSignUpForm) {
            formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            signUpForm: updatedSignUpForm,
            formIsValid: formIsValid
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.signUpForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signUpForm[key]
            })
        }
        let form = (
            <form onSubmit={this.signUpFormHandler} encType="multipart/form-data">
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
                <p className="text-center"><button className="btn btn-dark" disabled={!this.state.formIsValid || this.props.loading}> { this.props.loading ? 'Processing' : 'Sign Up' } </button></p>
            </form>
        );

        if (this.props.role !== '') {
            form = <Redirect from="/login" to="/" />
        }
        
        return (
            <div className="Signup">
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
        onSignup: (login, password, password2, cart) => {
            dispatch(actions.signup(login, password, password2, cart));
        },
        onCleanAuth: () => dispatch(actions.cleanAuth())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);