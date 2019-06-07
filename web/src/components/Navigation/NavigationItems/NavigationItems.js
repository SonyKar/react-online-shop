import React from 'react';
import { NavLink } from 'react-router-dom';

import "./NavigationItems.css";

const NavigationItems = (props) => {
    let classesNavbarMenu = 'navbar-menu-horizontal';
    if (props.isVertical) {
        classesNavbarMenu = 'navbar-menu-vertical'
    }

    return (
        <ul className={classesNavbarMenu}>
            <li>
                <NavLink to="/" exact>HOME</NavLink>
            </li>
            <li>
                <NavLink to="/collections">SHOP</NavLink>
            </li>
            <li>
                <NavLink to="/contact-us" exact>CONTACT US</NavLink>
            </li>
        </ul>
    );
};

export default NavigationItems;