import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Collection.css';
import CollectionMenu from '../../../../components/Collection/CollectionMenu/CollectionMenu';
import Product from '../../../../components/Collection/Product/Product';
import Footer from '../../../../components/Footer/Footer';
import * as actions from '../../../../store/actions/index';

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
                            {
                                this.props.products.map( product => {
                                    return (
                                        <div className={productClasses} key={product.id}>
                                            <Product 
                                                id={product.id}
                                                image={require('../../../../assets/img/' + product.image)}
                                                name={product.name}
                                                price={product.price}
                                                clicked={() => this.props.onSelectedProduct(product.id)}
                                            />
                                        </div>  
                                    );
                                } )
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectedProduct: (id) => dispatch(actions.selectedProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);