import React from 'react';

import Logo from '../Logo/Logo';
import './Footer.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-3 d-flex flex-column justify-content-center">
                    <Logo />
                    <p className="text-secondary m-0">
                        Are you ready for your next day?
                    </p>
                </div>
                <div className="col-3">
                    <h5>NEWSLETTER</h5>
                    <p className="text-secondary">
                        Subscribe to receive updates, access to exclusive deals, and more.
                    </p>
                    <form>
                        <input type="email" placeholder="Enter your email address" required/>
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
                <div className="col-3">
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

export default Footer;