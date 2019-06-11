import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Product.css';
import Spinner from '../../../components/Spinner/Spinner';
import ProductSettings from '../../../components/Collection/Product/ProductSettings/ProductSettings';
import Footer from '../../../components/Footer/Footer';
import * as actions from '../../../store/actions/index'; 

class Product extends Component {
    componentWillMount() {
        if (this.props.product === null) {
            this.props.onFetchProduct(this.props.match.params.id, this.props.match.params.collectionId);
        }
    }
        
    render() {
        let Product = <Spinner />;
        if (this.props.product !== null) {
            Product = (
                <React.Fragment>
                    <div className="col-7">
                    <img src={require('../../../assets/img/' + this.props.product.image)} alt="" className="w-100" />
                    </div>
                    <div className="col-5">
                        <ProductSettings
                            id={this.props.match.params.id}
                            name={this.props.product.name}
                            price={this.props.product.price}
                            desc={this.props.product.description}
                            image={this.props.product.image}
                            opencart={this.props.opencart}
                            collectionId={this.props.match.params.collectionId}
                        />
                    </div>
                </React.Fragment>
            );
        } else if (this.props.error !== '') {
            Product = <div className="noProducts mt-3">{this.props.error}</div>
        }
        return (
            <React.Fragment>
                <div className="ProductPage">
                    <div className="container">
                        <div className="row">
                            {Product}
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
        product: state.shop.product,
        error: state.shop.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectedProduct: (id) => dispatch(actions.selectedProduct(id)),
        onFetchProduct: (id, collectionId) => dispatch(actions.fetchProduct(id, collectionId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);