import React, { Component } from 'react';
import axios from '../../axios';

import Logo from '../Logo/Logo';
import './Footer.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import { checkValidatity } from '../../shared/utility';

class Footer extends Component {
    state = {
        loading: false,
        success: false,
        formIsValid: false,
        email: ''
    }

    onChange = (event) => {
        this.setState({
            email: event.target.value,
            formIsValid: checkValidatity(event.target.value, {isEmail: true})
        });
    }

    onSubscribe = (event) => {
        event.preventDefault();
        
        this.setState({
            loading: true,
            formIsValid: false
        });
        let formData = new FormData();
        formData.append('email', this.state.email);


        axios.post('/response/subscribe.php', formData)
            .then(() => {
                this.setState({
                    loading: false,
                    success: true,
                    email: '',
                    formIsValid: false
                });
            });
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-4 d-flex flex-column justify-content-center">
                            <Logo />
                            <p className="text-secondary m-0">
                                Are you ready for your next day?
                            </p>
                        </div>
                        <div className="col-4">
                            <h5>NEWSLETTER</h5>
                            {
                                this.state.success ?
                                <p>Thank you for subscribing!</p> :
                                (
                                    <React.Fragment>
                                        <p className="text-secondary">
                                            Subscribe to receive updates, access to exclusive deals, and more.
                                        </p>
                                        <form onSubmit={this.onSubscribe}>
                                            <input type="email" placeholder="Enter your email address" value={this.state.email} onChange={this.onChange} required/>
                                            <button className="btn btn-dark mt-1" disabled={!this.state.formIsValid}> { this.state.loading ? 'PROCESSING' : 'SUBSCRIBE' }</button>
                                        </form>
                                    </React.Fragment>
                                )
                            }
                        </div>
                        <div className="col-4">
                            <h5>MAIN MENU</h5>
                            <NavigationItems isVertical />
                        </div> 
                        <div className="col-12 mt-1 pt-1" style={{borderTop: '1px solid #ccc'}}>
                            <h5 className="m-0">© 2019 DOUBLE M</h5>
                            <p className="text-secondary" style={{marginTop: '.5rem'}}>Created by <a href="https://www.facebook.com/sa.caraganciu" className="link" rel="noopener noreferrer" target="_blank">A.C.</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;