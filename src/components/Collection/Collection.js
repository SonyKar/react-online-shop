import React from 'react';
import { NavLink } from 'react-router-dom';

import './Collection.css';

const Collection = (props) => (
    <div className="col-xl-4 col-6 mt-2">
        <div className="Collection" style={{
            backgroundImage: `url(${props.image})`
        }}>
            <h2>{props.name}</h2>
            <NavLink to={{
                pathname: '/collections/' + props.name.toLowerCase().replace('-', '').replace(' ', '-'),
                state: {
                    collectionName: props.name
                }
            }} className="btn btn-light">VIEW PRODUCTS</NavLink>
        </div>
    </div>
);

export default Collection;