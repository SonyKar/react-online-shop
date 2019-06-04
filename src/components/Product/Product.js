import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css';

const Product = (props) => (
    <div className="col-3">
        <div className="Product">
            <NavLink to={window.location.pathname + '/' + props.id}><img src={props.image} className="w-100" /></NavLink>
            <h5 className="text-center m-0"><NavLink to={window.location.pathname + '/' + props.id}>{props.name}</NavLink></h5>
            <p>{props.price} $</p>
        </div>
    </div>
);

export default Product;