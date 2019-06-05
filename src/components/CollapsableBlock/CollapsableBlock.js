import React, { Component } from 'react';

import './CollapsableBlock.css';

class CollapsableBlock extends Component {
    state = {
        show: false
    };

    showToggleHandler = () => {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        let descriptionClasses = "CollapsableContent";
        descriptionClasses += this.state.show ? " Open" : " Close";
        return(
            <div className="CollapsableBlock" onClick={this.showToggleHandler}>
                <div className="CollapsableHeader">
                    <h4>{this.props.collapsableHeader}</h4>
                    <span>{this.state.show ? '-' : "+"}</span>
                </div>
                <div className={descriptionClasses}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CollapsableBlock;