import React from 'react';

import './Feature.css';

const Feature = (props) => (
    <div className="Feature col-3">
        <p>icon</p>
        <h2>{props.caption}</h2>
    </div>
);

export default Feature;