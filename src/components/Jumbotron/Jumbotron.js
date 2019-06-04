import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron">
        <h3 className="m-0">PREPARE FOR A NEW DAY</h3>
        <h2>NEW COLLECTION OUT NOW</h2>
        <p><NavLink to="/collections" exact className="btn btn-light">SHOP NOW</NavLink></p>
    </div>
);

export default Jumbotron;