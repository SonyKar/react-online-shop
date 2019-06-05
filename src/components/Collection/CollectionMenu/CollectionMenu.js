import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faExpand } from '@fortawesome/free-solid-svg-icons';

import './CollectionMenu.css';
import Select from '../../Select/Select';

const CollectionMenu = (props) => (
    <div className="CollectionMenu">
        <div className="row">
            <div className="whiteSpace">
                <div className="productsSize">
                    <FontAwesomeIcon icon={faCompress} className={props.isExpand ? "" : "selected"} onClick={props.shrink} />
                    <FontAwesomeIcon icon={faExpand} className={props.isExpand ? "selected": ""} onClick={props.expand} />
                </div>
                <Select />
            </div>
            
        </div>
    </div>
);

export default CollectionMenu;