import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LeftMenu from './Menu';
import Company from './company/Company';
import Home from './home/Home';
import 'semantic-ui-css/semantic.min.css';

injectTapEventPlugin();

const Application = () => {
  return (
    <BrowserRouter>
      <div>
        <LeftMenu />
        <div style={styles.container}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

/*
            <Route path="/company/:id" component={Company} />
            <Route path="/company" component={Company} />
            */

export default Application;

const styles = {
  container: {
    left: '250px',
    position: 'absolute',
    width: '1600px',
    height: '100%',
  },
};
