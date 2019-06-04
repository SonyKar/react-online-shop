import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Collections from './containers/Shop/Collections/Collections';
import Collection from './containers/Shop/Collections/Collection/Collection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/collections/:collectionName/:id" component={null} />
            <Route path="/collections/:collectionName" component={Collection} />
            <Route path="/collections" component={Collections} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
