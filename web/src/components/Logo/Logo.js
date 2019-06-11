import React from 'react';

import "./Logo.css";
import logo from '../../assets/img/Logo.png';

const Logo = () => (
    <div className="Logo">
        <img src={logo} alt="Logo" style={{width: '60px'}} />
    </div>
);

export default Logo;