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
        let description = null;
        if (this.state.show) {
            description = (
                <div className="CollapsableContent">
                    {this.props.children}
                </div>
            );
        }
        return(
            <div className="CollapsableBlock" onClick={this.showToggleHandler}>
                <div className="CollapsableHeader">
                    <h4>{this.props.collapsableHeader}</h4>
                    <span>{this.state.show ? '-' : "+"}</span>
                </div>
                {description}
            </div>
        );
    }
}

export default CollapsableBlock;