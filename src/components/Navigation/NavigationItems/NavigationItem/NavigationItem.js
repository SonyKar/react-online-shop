import React from 'react';

const NavigationItem = (props) => (
    <li>
        <a href="#">{props.children}</a>
    </li>
);

export default NavigationItem;