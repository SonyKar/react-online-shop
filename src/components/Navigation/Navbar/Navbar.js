import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Navbar = (props) => (
    <header>
        <div className="container">
            <div className="Auth DesktopOnly">
                <NavLink exact to="/auth">Log in</NavLink>
                <NavLink exact to="/sign-up">Sign up</NavLink>
            </div>
            <div className="d-flex align-items-center justify-content-space-between w-100">
                <DrawerToggle clicked={props.drawerToggle} />
                <Logo />
                <nav>
                    <div className="DesktopOnly">
                        <NavigationItems />
                    </div>
                </nav>
                <div className="shopping-cart">
                    <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ccc' }}/>
                </div>
            </div>
        </div>
    </header>
);

export default Navbar;