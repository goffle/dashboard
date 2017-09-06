import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';

import HomeIcon from 'material-ui/svg-icons/action/home';
import MapIcon from 'material-ui/svg-icons/action/room';
import DirectoryIcon from 'material-ui/svg-icons/action/view-module';
import NewsIcon from 'material-ui/svg-icons/action/description';
import GraphIcon from 'material-ui/svg-icons/action/timeline';
import RankIcon from 'material-ui/svg-icons/action/toc';

import { BrowserRouter as Router, Route, Link, IndexLink } from 'react-router-dom'


//I need to check css good practices

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: true };
    }

    render() {
        return (
            <header className="header">
                <Drawer containerClassName="drawer"
                    docked={true}
                    width={200}
                    open={this.state.drawerOpen}>

                    <Subheader inset={false}>
                        <span style={{ width: '100%' }}><div >DASHBOARD</div>
                            <div
                                style={{ display: 'inline-block' }}>
                                <i className="fa fa-long-arrow-left fa-lg" style={{ color: '#4498c0' }} aria-hidden="true"></i>
                            </div>
                        </span>
                    </Subheader>
                    <MenuItem leftIcon={<DirectoryIcon />} primaryText="Add Shop" containerElement={<Link to="/shop" />} />
                    <MenuItem leftIcon={<DirectoryIcon />} primaryText="Add Product" containerElement={<Link to="/product" />} />
                    <MenuItem leftIcon={<DirectoryIcon />} primaryText="Add Customer" containerElement={<Link to="/customer" />} />
                    <MenuItem leftIcon={<DirectoryIcon />} primaryText="Add Bid" containerElement={<Link to="/bid" />} />

                    <MenuItem leftIcon={<DirectoryIcon />} primaryText="Watch Data" containerElement={<Link to="/data" />} />

                    <MenuItem leftIcon={<DirectoryIcon />} primaryText="Stats" /*containerElement={/*<Link to="/portfolio/map" />} */ />

                </Drawer>
            </header>
        )
    }
}

Menu.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Menu
