import React from 'react';

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
        <div>
            Cart
        </div>
    </header>
);

export default Navbar;