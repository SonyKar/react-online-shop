import React, { Component } from 'react';
import axios from '../../axios';

import './ContactUs.css';
import Input from '../Input/Input';
import { checkValidatity } from '../../shared/utility';

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
        formIsValid: false,
        loading: false,
        error: '',
        success: false
    }

    contactUsFormHandler = ( event ) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.contactUsForm) {
            formData[formElementIdentifier] = this.state.contactUsForm[formElementIdentifier].value;
        }

        this.setState({
            loading: true,
            error: '',
            success: false
        });
        const mailData = new FormData();
        mailData.append('name', formData.name);
        mailData.append('email', formData.email);
        mailData.append('message', formData.message);

        axios.post('/response/sendMail.php', mailData)
            .then(res => {
                if (res.data.error === undefined) {
                    this.setState({
                        success: true,
                        loading: false
                    }); 
                    this.cleanForm();
                } else {
                    this.setState({
                        loading: false,
                        error: res.data.error
                    });
                }
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                });
            });
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

    cleanForm = () => {
        let updatedForm = {
            ...this.state.contactUsForm
        };
        updatedForm.name.value = '';
        updatedForm.email.value = '';
        updatedForm.message.value = '';
        this.setState({
            contactUsForm: updatedForm
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
                <p className="error">{ this.state.error }</p>
                {this.state.success ? <p className="text-center">Thank you for contacting us!</p> : null}
                <p className="text-center"><button className="btn btn-dark" disabled={!this.state.formIsValid || this.state.loading}> { this.state.loading ? 'Processing' : 'SEND' } </button></p>
            </form>
        );
        
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

export default ContactUs;