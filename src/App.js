import React from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Collections from './containers/Shop/Collections/Collections';

function App() {
  return (
    <div className="App">
      <Layout>
        <Collections />
      </Layout>
    </div>
  );
}

export default App;
