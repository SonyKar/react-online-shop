import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import "./NavigationItems.css";

const NavigationItems = () => (
    <ul className="navbar-menu">
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Catalogue</NavigationItem>
        <NavigationItem>Contacts</NavigationItem>
    </ul>
);

export default NavigationItems;