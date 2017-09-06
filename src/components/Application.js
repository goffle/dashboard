import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Menu from './Menu';
import AddShop from './AddShop';

injectTapEventPlugin();

export default class Application extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <BrowserRouter>
          <div>
            <Menu />
            <Switch>
              <Route path="/shop" component={AddShop} />
              <Route path="/" component={AddShop} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}
