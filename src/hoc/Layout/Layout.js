import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = { 
        showSideMenu: false ,
        showShoppingCart: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideMenu: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideMenu: !prevState.showSideMenu};
        });
        this.shoppingCartClosedHandler();
    }

    shoppingCartClosedHandler = () => {
        this.setState({showShoppingCart: false});
    }

    shoppingCartToggleHandler = () => {
        this.setState((prevState) => {
            return {showShoppingCart: !prevState.showShoppingCart};
        });
        this.sideDrawerClosedHandler();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar 
                    drawerToggle={this.sideDrawerToggleHandler} 
                    shoppingCartToggle={this.shoppingCartToggleHandler}
                />
                {/* Menu for Mobile Phones */}
                <SideDrawer
                    open={this.state.showSideMenu} 
                    closed={this.sideDrawerClosedHandler}
                    MobileOnly
                >
                    <div>
                        <Logo />
                        <nav>
                            <NavigationItems isVertical />
                        </nav>
                    </div>
                    <div className="AuthSidebar">
                        <NavLink exact to="/auth">Log in</NavLink>
                        <NavLink exact to="/sign-up">Sign up</NavLink>
                    </div>
                </SideDrawer>
                {/* Shopping Cart */}
                <SideDrawer
                    open={this.state.showShoppingCart} 
                    closed={this.shoppingCartClosedHandler} 
                    right
                    light
                >
                    <div className="sideDrawerHeader">
                        <span>CART</span>
                    </div>
                    <div className="noProducts">
                        <p>There are no any products yet!</p>
                    </div>
                </SideDrawer>
                <main style={{paddingTop: '60px'}}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;