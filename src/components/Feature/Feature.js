import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Feature.css';

const Feature = (props) => (
    <div className="Feature col-3">
        <p><FontAwesomeIcon icon={props.icon} /></p>
        <h2>{props.caption}</h2>
    </div>
);

export default Feature;