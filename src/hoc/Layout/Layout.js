import React, { Component } from 'react';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = { 
        showSideMenu: false 
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideMenu: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideMenu: !prevState.showSideMenu};
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar drawerToggle={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideMenu} 
                    closed={this.sideDrawerClosedHandler} 
                />
                <main style={{paddingTop: '60px'}}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;