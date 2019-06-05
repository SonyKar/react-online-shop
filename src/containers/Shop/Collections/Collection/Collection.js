import React from 'react';

import './Collection.css';
import CollectionMenu from '../../../../components/Collection/CollectionMenu/CollectionMenu';
import Product from '../../../../components/Product/Product';
import Footer from '../../../../components/Footer/Footer';

import TShirt from '../../../../assets/img/t-shirt1.jpg';

const Collection = (props) => (
    <React.Fragment>
        <div className="shopCollection">
            <h2 className="CollectionHeader">{props.location.state.collectionName}</h2>
            <CollectionMenu />
            <div className="container">
                <div className="row">
                    <Product id="1" image={TShirt} name="Black T-Shirt" price="25.99" />
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
);

export default Collection;