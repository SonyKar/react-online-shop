import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/collections/:collectionId/:id" component={Product} />
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

export default App;
