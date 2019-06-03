import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import "./NavigationItems.css";

const NavigationItems = (props) => {
    let classesNavbarMenu = 'navbar-menu-horizontal';
    if (props.isVertical) {
        classesNavbarMenu = 'navbar-menu-vertical'
    }

    return (
        <ul className={classesNavbarMenu}>
            <NavigationItem>HOME</NavigationItem>
            <NavigationItem>SHOP</NavigationItem>
            <NavigationItem>CONTACT US</NavigationItem>
        </ul>
    );
};

export default NavigationItems;