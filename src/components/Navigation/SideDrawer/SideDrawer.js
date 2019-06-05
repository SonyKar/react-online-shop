import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = "SideDrawer Close";
    if (props.open) {
        attachedClasses = "SideDrawer Open";
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses} onClick={props.closed}>
                <div className="mt-3">
                    <Logo />
                    <nav>
                        <NavigationItems isVertical />
                    </nav>
                </div>
                <div className="AuthSidebar">
                    <NavLink exact to="/auth">Log in</NavLink>
                    <NavLink exact to="/sign-up">Sign up</NavLink>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;