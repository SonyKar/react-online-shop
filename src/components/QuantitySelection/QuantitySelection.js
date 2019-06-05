import React, { Component } from 'react';

import './QuantitySelection.css';

class QuantitySelection extends Component {   
    state = {
        quantity: 1
    };

    addQuantity = () => {
        this.setState((prevState) => {
            return {
                quantity: prevState.quantity + 1
            }
        });
    };

    substractQuantity = () => {
        if (this.state.quantity > 1) {
            this.setState((prevState) => {
                return {
                    quantity: prevState.quantity - 1
                }
            });
        }
    };

    onKeyPressHandler = (event) => {
        if (event.charCode < 48 || event.charCode > 57) return false;      
    }

    onChangeHandler = (event) => {
        if (+event.target.value > 0) this.setState({quantity: +event.target.value})
    }

    render() {
        return (
            <div className="QuantitySelection">
                <button type="button" onClick={this.substractQuantity}>-</button>
                <input type="text" value={this.state.quantity} onKeyPress={(event) => this.onKeyPressHandler(event)} onChange={(event) => this.onChangeHandler(event)} />
                <button type="button" onClick={this.addQuantity}>+</button>
            </div>
        );
    };
}

export default QuantitySelection;