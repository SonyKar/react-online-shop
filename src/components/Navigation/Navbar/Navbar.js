import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const Navbar = () => (
    <header>
        <div className="container">
            <div>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
            <div className="shopping-cart">
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ccc' }}/>
            </div>
        </div>
    </header>
);

export default Navbar;