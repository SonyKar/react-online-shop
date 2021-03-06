import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../../components/Logo/Logo';
import Spinner from '../../components/Spinner/Spinner';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import QuantitySelection from '../../components/QuantitySelection/QuantitySelection';
import * as actions from '../../store/actions/index';

class Layout extends Component {
    state = {
        price: 0
    }

    componentWillUpdate() {
        if (this.props.login.length !== 0 && this.props.cart.length === 0 && !this.props.loading) {
            this.props.onFetchCart(this.props.login);
        }
    }

    render() {
        let shoppingCart = <Spinner />;
        if (!this.props.loading) {
            shoppingCart = (
                this.props.cart.map(product => {
                    const shoppingCartQuantityChangeHandler = (qty) => {
                        if (this.props.login.length !== 0) this.props.onUpdateItemDB(product.id, product.size, +qty, this.props.login);
                        else this.props.onUpdateItem(product.id, product.size, +qty);
                    }
                    return (
                        <div className="CartElement" key={product.id + product.size}>
                            <div className="row align-items-center">
                                <div className="col-4 col-sm-4">
                                    <img src={require('../../assets/img/' + product.image)} alt="" className="w-100" />
                                </div>
                                <div className="col-8 col-sm-8">
                                    <h5 className="mb-0"><NavLink to={"/collections/" + product.collectionId + '/' + product.id}>{product.name}</NavLink></h5>
                                    <p>{product.size}</p>
                                    <span>{product.price} $</span>
                                    <div className="cartProductSettings">
                                        <QuantitySelection startingValue={+product.qty} updateState={shoppingCartQuantityChangeHandler} />
                                        <button type="button" className="removeButton" onClick={() => {
                                            if (this.props.login.length !== 0) this.props.onRemoveItemFromCartDB(product.id, product.size, this.props.login);
                                            else this.props.onRemoveItemFromCart(product.id, product.size);
                                        }}>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }
        if (this.props.cart.length === 0 && !this.props.loading) {
            shoppingCart = (
                <div className="noProducts" style={{height: 'auto'}}>
                    <p>There are no any products yet!</p>
                </div>
            );
        }

        let auth = (
            <div className="AuthSidebar">
                <NavLink exact to="/login">Log in</NavLink>
                <NavLink exact to="/sign-up">Sign up</NavLink>
            </div>
        );
        if (this.props.login !== '') {
            auth = (
                <div className="AuthSidebar">
                    <h5 className="m-0">Welcome, {this.props.login}</h5> <button onClick={this.props.onLogout}>Logout</button>
                </div>
            );
        }

        return (
            <React.Fragment>
                <Navbar 
                    drawerToggle={this.props.sideDrawerToggleHandler} 
                    shoppingCartToggle={this.props.shoppingCartToggleHandler}
                />
                {/* Menu for Mobile Phones */}
                <SideDrawer
                    open={this.props.showSideMenu} 
                    closed={this.props.sideDrawerClosedHandler}
                    MobileOnly
                    closeOnClick
                >
                    <div>
                        <Logo />
                        <nav>
                            <NavigationItems isVertical />
                        </nav>
                    </div>
                    {auth}
                </SideDrawer>
                {/* Shopping Cart */}
                <SideDrawer
                    open={this.props.showShoppingCart} 
                    closed={this.props.shoppingCartClosedHandler} 
                    right
                    light
                >
                    <div className="sideDrawerHeader">
                        <span>CART</span>
                    </div>
                    <div style={{height: '100%', overflow: 'auto', padding: '1rem 0'}}>
                        {shoppingCart}
                    </div>
                    <div>
                        <button className="btn btn-dark w-100">CHECKOUT - {+this.props.price.toFixed(2)}$</button>
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
        cart: state.cart.cart,
        loading: state.cart.loading,
        login: state.auth.person.login,
        price: state.cart.price
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveItemFromCart: (id, size) => dispatch(actions.removeFromCart(id, size)),
        onRemoveItemFromCartDB: (id, size, login) => dispatch(actions.removeFromCartDB(id, size, login)),
        onUpdateItem: (id, size, qty) => dispatch(actions.updateCart(id, size, qty)),
        onUpdateItemDB: (id, size, qty, login) => dispatch(actions.updateCartDB(id, size, qty, login)),
        onFetchCart: (login) => dispatch(actions.fetchCart(login)),
        onLogout: () => {
            dispatch(actions.logout());
            dispatch(actions.emptyCart());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);