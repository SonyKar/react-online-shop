import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import './Select.css';
import Backdrop from '../Backdrop/Backdrop';

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
        let popoverClasses = "popover";
        popoverClasses += this.state.popoverIsVisible ? " Open" : " Close";
        return (
            <div className="Select" >
                <Backdrop show={this.state.popoverIsVisible} clicked={this.popoverIsVisibleHandler} />
                <button onClick={this.popoverIsVisibleHandler}>
                    SORT <FontAwesomeIcon icon={this.state.popoverIsVisible ? faAngleUp : faAngleDown} />
                </button>
                <div className={popoverClasses}>
                    <button onClick={this.popoverIsVisibleHandler}>PRICE, LOW TO HIGH</button>
                    <button onClick={this.popoverIsVisibleHandler}>PRICE, HIGH TO LOW</button>
                    <button onClick={this.popoverIsVisibleHandler}>ALPHABETICALLY, A-Z</button>
                    <button onClick={this.popoverIsVisibleHandler}>ALPHABETICALLY, Z-A</button>
                </div>
            </div>
        );
    }
}

export default Select;