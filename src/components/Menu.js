import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';

import DirectoryIcon from 'material-ui/svg-icons/action/view-module';

import { BrowserRouter as Router, Route, Link, IndexLink } from 'react-router-dom';


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
          docked
          width={200}
          open={this.state.drawerOpen}
        >
          <Subheader inset={false}>
            <span style={{ width: '100%' }}><div >DASHBOARD</div>
              <div
                style={{ display: 'inline-block' }}
              >
                <i className="fa fa-long-arrow-left fa-lg" style={{ color: '#4498c0' }} aria-hidden />
              </div>
            </span>
          </Subheader>
          <MenuItem
            leftIcon={<DirectoryIcon />}
            primaryText="Home"
            containerElement={<Link to="/home" />}
          />
          <MenuItem
            leftIcon={<DirectoryIcon />}
            primaryText="Other"
            containerElement={<Link to="/product" />}
          />
        </Drawer>
      </header>
    );
  }
}

Menu.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Menu;
