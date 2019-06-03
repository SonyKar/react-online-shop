import React from 'react';

import "./Features.css";
import Feature from '../../../components/Feature/Feature';

const Features = () => (
    <div className="Features">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">WHY US?</h2>
                    <div className="line"></div>
                </div>
                <Feature caption="Quality" />
                <Feature caption="All Sizes" />
                <Feature caption="Fast Delivery" />
                <div className="col-12 text-center mt-3">
                    <a href="#" className="btn btn-dark">CHECK OUT OUR STORE</a>
                </div>
            </div>
        </div>
    </div>
);

export default Features;