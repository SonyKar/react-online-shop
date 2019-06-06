import React from 'react';

import './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = "SideDrawer Close";
    if (props.open) {
        attachedClasses = "SideDrawer Open";
    }
    attachedClasses += props.right ? " Right" : " Left";
    attachedClasses += props.light ? " Light" : " Dark";
    attachedClasses += props.MobileOnly ? " MobileOnly" : "";
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses} onClick={props.closed}>
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default SideDrawer;