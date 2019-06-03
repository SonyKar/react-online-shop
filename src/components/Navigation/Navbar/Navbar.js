import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const Navbar = () => (
    <header className="container">
        <div>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
        <div className="shopping-cart">
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ccc' }}/></a>
        </div>
    </header>
);

export default Navbar;