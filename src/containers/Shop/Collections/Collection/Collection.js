import React, { Component } from 'react';

import './Collection.css';
import CollectionMenu from '../../../../components/Collection/CollectionMenu/CollectionMenu';
import Product from '../../../../components/Collection/Product/Product';
import Footer from '../../../../components/Footer/Footer';

import TShirt from '../../../../assets/img/t-shirt1.jpg';

class Collection extends Component {
    state = {
        expand: false
    }

    expandProductsHandler = () => {
        this.setState({expand: true});
    }
    
    shrinkProductsHandler = () => {        
        this.setState({expand: false});
    }

    render() {
        let productClasses = "Product";
        productClasses += this.state.expand ? " col-6" : " col-4"

        return (
            <React.Fragment>
                <div className="shopCollection">
                    <h2 className="CollectionHeader">{this.props.location.state.collectionName}</h2>
                    <CollectionMenu expand={this.expandProductsHandler} shrink={this.shrinkProductsHandler} isExpand={this.state.expand} />
                    <div className="container">
                        <div className="row">
                            <div className={productClasses}>
                                <Product id="1" image={TShirt} name="Black T-Shirt" price="25.99" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Collection;