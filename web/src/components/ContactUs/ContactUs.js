import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './ContactUs.css';
import Input from '../Input/Input';
import { checkValidatity } from '../../shared/utility';
import * as actions from '../../store/actions/index';

class ContactUs extends Component {
    state = {
        contactUsForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                    id: 'name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail',
                    id: 'email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Your Message',
                    id: 'password',
                    rows: 15
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    contactUsFormHandler = ( event ) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.contactUsForm) {
            formData[formElementIdentifier] = this.state.contactUsForm[formElementIdentifier].value;
        }

        this.props.onLogin(formData.login, formData.password);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        let updatedFormElement = {
            ...this.state.contactUsForm[inputIdentifier],
            value: event.target.value,
            valid: checkValidatity(event.target.value, this.state.contactUsForm[inputIdentifier].validation),
            touched: true
        };
        const updatedContactUsForm = {
            ...this.state.contactUsForm,
            [inputIdentifier]: updatedFormElement
        };
        let formIsValid = true;
        for (let inputIdentifier in updatedContactUsForm) {
            formIsValid = updatedContactUsForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            contactUsForm: updatedContactUsForm,
            formIsValid: formIsValid
        });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.contactUsForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactUsForm[key]
            })
        }
        let form = (
            <form onSubmit={this.contactUsFormHandler} encType="multipart/form-data">
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
                <p className="text-center"><button className="btn btn-dark" disabled={!this.state.formIsValid || this.props.loading}> { this.props.loading ? 'Processing' : 'SEND' } </button></p>
            </form>
        );

        // if (this.props.role !== '') {
        //     form = <Redirect from="/conta" to="/" />
        // }
        
        return (
            <div className="ContactUs">
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
        role: state.auth.person.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (login, password) => {
            dispatch(actions.login(login, password));
            dispatch(actions.emptyCart());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);