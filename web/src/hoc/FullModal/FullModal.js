import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './FullModal.css';

const FullModal = (props) => {
    let fullModalClasses = "FullModal";
    fullModalClasses += props.show ? " Open" : " Close";

    if (props.show) {
        let scrollX = window.scrollX;
        window.scrollTo(scrollX, 0);
        window.onscroll = function () { window.scrollTo(scrollX, 0); };
    } else {
        window.onscroll = null;
    }

    return (
        <div className={fullModalClasses}>
            <div className="container" style={{height: '100%'}}>
                <div className="d-flex flex-column justify-content-space-between align-items-center" style={{height: '100%'}}>
                    <div className="w-100">
                        {props.children}
                    </div>
                    <div className="w-100 text-center">
                        <button className="CloseButton" onClick={props.close}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullModal;