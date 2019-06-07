import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './Select.css';
import Backdrop from '../Backdrop/Backdrop';
import * as actions from '../../store/actions/index';

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

    selectButtonClick = (actionToDo) => {
        actionToDo();
        this.popoverIsVisibleHandler();
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
                    <button onClick={() => this.selectButtonClick(this.props.onSortByPriceInc)}>PRICE, LOW TO HIGH</button>
                    <button onClick={() => this.selectButtonClick(this.props.onSortByPriceDec)}>PRICE, HIGH TO LOW</button>
                    <button onClick={() => this.selectButtonClick(this.props.onSortByNameInc)}>ALPHABETICALLY, A-Z</button>
                    <button onClick={() => this.selectButtonClick(this.props.onSortByNameDec)}>ALPHABETICALLY, Z-A</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSortByPriceInc: () => dispatch(actions.sortByPriceInc()),
        onSortByPriceDec: () => dispatch(actions.sortByPriceDec()),
        onSortByNameInc: () => dispatch(actions.sortByNameInc()),
        onSortByNameDec: () => dispatch(actions.sortByNameDec())
    };
};

export default connect(null, mapDispatchToProps)(Select);