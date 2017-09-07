import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import Dialog from 'material-ui/Dialog';
import CompanyGrid from './CompanyGrid';

//http://www.material-ui.com/#/components/raised-button
//https://docs.google.com/presentation/d/1Pf_JHGNQZdYRmI2-0Ml-X1qKB8hvCtubv0uwK7S2O9Q/edit#slide=id.g252963e52a_0_3
//https://bitbucket.org/business-directory/all/src/11f89ad14f42de5727cfd6aa1a893237f787893c/dashboard/src/containers/Directory.js?at=master&fileviewer=file-view-default
//http://www.material-ui.com/#/components/dialog

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  renderDialog() {
    return (
      <Dialog
        title="Dialog With Actions"
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
      />);
  }

  render() {
    return (
      <div style={styles.container}>
        <RaisedButton style={styles.button} label="Add a new company" primary href="/company" />
        <RaisedButton style={styles.button} label="Add a new article" primary href="/company" />
        {this.renderDialog()}
        <br /><br />
        <CompanyGrid history={this.props.history} />
      </div>
    );
  }
}


export default Home;

const styles = {
  container: {
    width: '100%',
    height: '100%',
    margin: '5%',
  },
  button: {
    margin: 20,
  },
};
