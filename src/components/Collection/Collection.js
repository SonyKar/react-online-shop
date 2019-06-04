import React from 'react';

import './Collection.css';

const Collection = (props) => (
    <div className="col-3">
        <div className="Collection" style={{
            backgroundImage: `url(${props.image})`
        }}>
            <h2>{props.name}</h2>
            <a href="#" className="btn btn-light">VIEW PRODUCTS</a>
        </div>
    </div>
);

export default Collection;