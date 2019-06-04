import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Collections from './containers/Shop/Collections/Collections';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/collections" component={Collections} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
