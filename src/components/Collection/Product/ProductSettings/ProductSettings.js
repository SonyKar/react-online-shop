import React from 'react';

import './ProductSettings.css';
import QuantitySelection from '../../../QuantitySelection/QuantitySelection';
import CollapsableBlock from '../../../CollapsableBlock/CollapsableBlock';

const ProductSettings = (props) => (
    <div className="ProductSettings">
        <h1>Black T-Shirt</h1>
        <p className="price">25.99$</p>
        <form>
            <p>Size: </p>
            <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <p>Quantity:</p>
            <QuantitySelection />
            <button type="button" className="btn btn-dark w-100 mt-2 mb-2">ADD TO CART</button>
            <CollapsableBlock collapsableHeader="Description">
                <h2>I Love Hue</h2>
                <p>Some Testing Text...</p>
                <h2>I Love Hue</h2>
                <p>Some Testing Text...</p>
            </CollapsableBlock>
        </form>
    </div>
);

export default ProductSettings;