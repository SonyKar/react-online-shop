import React from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
import Jumbotron from './components/Jumbotron/Jumbotron';

function App() {
  return (
    <div className="App">
      <Layout>
        <Jumbotron />
      </Layout>
    </div>
  );
}

export default App;
