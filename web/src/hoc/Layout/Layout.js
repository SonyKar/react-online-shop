import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import QuantitySelection from '../../components/QuantitySelection/QuantitySelection';
import * as actions from '../../store/actions/index';

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
        let shoppingCart = (
            <div className="noProducts">
                <p>There are no any products yet!</p>
            </div>
        );
        if (this.props.cart.length !== 0) {
            shoppingCart = (
                this.props.cart.map(product => {
                    const shoppingCartQuantityChangeHandler = (qty) => {
                        this.props.onUpdateItem(product.id, product.size, qty);
                    }
                    return (
                        <div className="CartElement" key={product.id + product.size}>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <img src={require('../../assets/img/' + product.image)} alt="" className="w-100" />
                                </div>
                                <div className="col-8">
                                    <h5 className="mb-0"><NavLink to={"/collections/sweatshirts/" + product.id}>{product.name}</NavLink></h5>
                                    <p>{product.size}</p>
                                    <span>{product.price} $</span>
                                    <div className="cartProductSettings">
                                        <QuantitySelection startingValue={product.qty} updateState={shoppingCartQuantityChangeHandler} />
                                        <button type="button" className="removeButton" onClick={() => {this.props.onRemoveItemFromCart(product.id, product.size)}}>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }

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
                    closeOnClick
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
                    <div style={{height: '100%', overflow: 'auto'}}>
                        {shoppingCart}
                    </div>
                </SideDrawer>
                    <main>
                        {this.props.children}
                    </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItemFromCart: (id, size) => dispatch(actions.removeFromCart(id, size)),
        onUpdateItem: (id, size, qty) => dispatch(actions.updateCart(id, size, qty))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);