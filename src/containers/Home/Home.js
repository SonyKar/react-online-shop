import React from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Features from './Features/Features';
import QuoteInsertion from '../../components/QuoteInsertion/QuoteInsertion';

const Home = () => (
    <div>
        <Jumbotron />
        <QuoteInsertion />
        <Features />
    </div>
);

export default Home;