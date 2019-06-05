import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css';

const Product = (props) => (
    <div>
        <NavLink to={window.location.pathname + '/' + props.id}><img src={props.image} alt="" className="w-100" /></NavLink>
        <h5 className="text-center m-0"><NavLink to={window.location.pathname + '/' + props.id}>{props.name}</NavLink></h5>
        <p>{props.price} $</p>
    </div>
);

export default Product;