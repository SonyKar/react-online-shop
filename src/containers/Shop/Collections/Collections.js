import React from 'react';

import "./Collections.css";
import Collection from '../../../components/Collection/Collection';
import Footer from '../../../components/Footer/Footer';

import Collection1 from '../../../assets/img/collection1.jpg';
import Collection2 from '../../../assets/img/collection2.jpg';
import Collection3 from '../../../assets/img/collection3.jpg';

const Collections = () => (
    <div className="Collections">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-2">
                    <h2 className="text-center">ALL COLLECTIONS</h2>
                </div>
                <Collection image={Collection1} />
                <Collection image={Collection2} />
                <Collection image={Collection3} />
            </div>
        </div>
    </div>
);

export default Collections;