import React from 'react';
import { NavLink } from 'react-router-dom';
import { faGem, faArrowsAlt, faTruckLoading } from '@fortawesome/free-solid-svg-icons';

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
                <Feature caption="Quality" icon={faGem} />
                <Feature caption="All Sizes" icon={faArrowsAlt} />
                <Feature caption="Fast Delivery" icon={faTruckLoading} />
                <div className="col-12 text-center mt-3">
                    <NavLink to="/collections" className="btn btn-light">CHECK OUT OUR STORE</NavLink>
                </div>
            </div>
        </div>
    </div>
);

export default Features;