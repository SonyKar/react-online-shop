import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ProductSettings.css';
import QuantitySelection from '../../../QuantitySelection/QuantitySelection';
import CollapsableBlock from '../../../CollapsableBlock/CollapsableBlock';
import * as actions from '../../../../store/actions/index';

class ProductSettings extends Component {
    state = {
        size: 'XS',
        qty: 1
    }

    setSizeHandler = (event) => {
        this.setState({
            size: event.target.value 
        });
    }

    setQuantityHandler = (newValue) => {
        this.setState({
            qty: newValue
        })
    }

    render() {
        return (
            <div className="ProductSettings">
                <h1>{this.props.name}</h1>
                <p className="price">{this.props.price} $</p>
                <form>
                    <p>Size: </p>
                    <select onChange={(event) => this.setSizeHandler(event)}>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <p>Quantity:</p>
                    <QuantitySelection updateState={this.setQuantityHandler} />
                    <button type="button" className="btn btn-dark w-100 mt-2 mb-2" onClick={() => {
                        this.props.login.length !== 0 ? this.props.onAddToCartDB(this.props.id, this.props.name, this.props.price, this.state.size, this.state.qty, this.props.image, this.props.login) : this.props.onAddToCart(this.props.id, this.props.name, this.props.price, this.state.size, this.state.qty, this.props.image);
                    }} >ADD TO CART</button>
                    <CollapsableBlock collapsableHeader="Description">
                        {this.props.desc}
                    </CollapsableBlock>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.auth.person.login
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (id, name, price, size, qty, image) => dispatch(actions.addToCart(id, name, price, size, qty, image)),
        onAddToCartDB: (id, name, price, size, qty, image, login) => dispatch(actions.addToCartDB(id, name, price, size, qty, image, login))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSettings);