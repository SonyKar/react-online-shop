import React, { Component } from 'react';

import Navbar from '../../components/Navigation/Navbar/Navbar';

class Layout extends Component {
    state = { 
        showSideMenu: false 
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;