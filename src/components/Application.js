import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Menu from './Menu';
import Company from './Company';
import Home from './Home';


injectTapEventPlugin();

const Application = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <BrowserRouter>
        <div>
          <Menu />
          <div style={styles.container}>
            <Switch>
              <Route path="/company/:id" component={Company} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider >
  );
};

export default Application;

const styles = {
  container: {
    left: '250px',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};