import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "./Navbar.css";
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import * as actions from '../../../store/actions/index';

const Navbar = (props) => {
    let auth = (
        <React.Fragment>
            <NavLink exact to="/login">Log in</NavLink>
            <NavLink exact to="/sign-up">Sign up</NavLink>
        </React.Fragment>
    );
    if (props.login !== '') {
        auth = (
            <React.Fragment>
                <h5 className="m-0">Welcome, {props.login} <button onClick={props.onLogout}>Logout</button></h5>
            </React.Fragment>
        );
    }

    return (
        <header>
            <div className="container">
                <div className="Auth DesktopOnly">
                    {auth}
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
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ccc' }} onClick={props.shoppingCartToggle}/>
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        login: state.auth.person.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(actions.logout());
            dispatch(actions.emptyCart());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);