import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Product.css';
import ProductSettings from '../../../components/Collection/Product/ProductSettings/ProductSettings';
import Footer from '../../../components/Footer/Footer';
import * as actions from '../../../store/actions/index'; 

class Product extends Component {
    componentDidMount() {
        if (this.props.product === null) {
            this.props.onSelectedProduct(+this.props.match.params.id);
        }
    }

    render() {
        let Product = (<p>Loading...</p>);
        if (this.props.product) {
            Product = (
                <React.Fragment>
                    <div className="ProductPage">
                        <div className="container">
                            <div className="row">
                                <div className="col-7">
                                    <img src={require('../../../assets/img/' + this.props.product.image)} alt="" className="w-100" />
                                </div>
                                <div className="col-5">
                                    <ProductSettings
                                        id={this.props.product.id}
                                        name={this.props.product.name}
                                        price={this.props.product.price}
                                        desc={this.props.product.description}
                                        image={this.props.product.image}
                                        opencart={this.props.opencart}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                {Product}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.shop.product,
        loading: state.shop.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectedProduct: (id) => dispatch(actions.selectedProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);