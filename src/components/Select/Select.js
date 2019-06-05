import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


import './Select.css';

class Select extends Component {
    state = { 
        popoverIsVisible: false
    }

    popoverIsVisibleHandler = () => {
        this.setState((prevState) => {
            return {
                popoverIsVisible: !prevState.popoverIsVisible
            }
        })
    }

    render() {
        let popover = null;
        if (this.state.popoverIsVisible) {
            popover = (
                <div className="popover">
                    <button onClick={this.popoverIsVisibleHandler}>PRICE, LOW TO HIGH</button>
                    <button onClick={this.popoverIsVisibleHandler}>PRICE, HIGH TO LOW</button>
                    <button onClick={this.popoverIsVisibleHandler}>ALPHABETICALLY, A-Z</button>
                    <button onClick={this.popoverIsVisibleHandler}>ALPHABETICALLY, Z-A</button>
                </div>
            );
        }
        return (
            <div className="Select">
                <button onClick={this.popoverIsVisibleHandler}>
                    SORT <FontAwesomeIcon icon={this.state.popoverIsVisible ? faAngleUp : faAngleDown} />
                </button>
                {popover}
            </div>
        );
    }
}

export default Select;