import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Collections from './containers/Shop/Collections/Collections';
import Collection from './containers/Shop/Collections/Collection/Collection';
import Product from './containers/Shop/Product/Product';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import ContactUs from './components/ContactUs/ContactUs';

class App extends Component {
  state = {
    showSideMenu: false,
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
      <BrowserRouter>
        <div className="App">
          <Layout
            showSideMenu={this.state.showSideMenu}
            showShoppingCart={this.state.showShoppingCart}
            sideDrawerClosedHandler={this.sideDrawerClosedHandler}
            sideDrawerToggleHandler={this.sideDrawerToggleHandler}
            shoppingCartClosedHandler={this.shoppingCartClosedHandler}
            shoppingCartToggleHandler={this.shoppingCartToggleHandler}
          >
            <Switch>
              <Route path="/collections/:collectionId/:id" component={(props) => <Product {...props} openCart={this.shoppingCartToggleHandler} />} />
              <Route path="/collections/:collectionId" component={Collection} />
              <Route path="/collections" component={Collections} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={Signup} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
