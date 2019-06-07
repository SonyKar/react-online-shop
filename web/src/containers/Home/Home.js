import React from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Features from './Features/Features';
import QuoteInsertion from '../../components/QuoteInsertion/QuoteInsertion';
import Footer from '../../components/Footer/Footer';

const Home = () => (
    <div>
        <Jumbotron />
        <QuoteInsertion />
        <Features />
        <Footer />
    </div>
);

export default Home;