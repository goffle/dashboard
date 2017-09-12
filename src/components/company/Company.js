import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-twitter-widgets'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { postCompany, fetchCompany } from '../../actions/index';

class AddCompany extends Component {
  state = {
    relation: 3,
  };

  componentWillMount() {
    this.props.fetchCompany(this.props.match.params.id);
  }

  onSubmit() {
    this.props.postCompany(Object.assign(this.state, { key: this.props.company.key }));
    this.props.history.push('/');
  }

  renderTwitter() {
    if (this.props.initialValues && this.props.initialValues.twitter) {
      return (
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: this.props.initialValues.twitter,
          }}
          options={{
            username: 'TwitterDev',
            height: '400',
            width: '400',
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
      );
    }
    return;
  }

  render() {
    if (!this.props.company) {
      return (<div />);
    }
    return (
      <div className="container" style={{ marginTop: 40 }} >
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 40 }}>
          <TextField underlineShow={false} style={{ margin: 20 }} inputStyle={styles.fieldStyle} hintText="Name" defaultValue={this.props.company.name} onChange={(event, value) => { this.setState({ name: value }) }} />
          <TextField underlineShow={false} style={{ margin: 20 }} inputStyle={styles.fieldStyle} hintText="Website" defaultValue={this.props.company.website} onChange={(event, value) => { this.setState({ website: value }) }} />
          <SelectField
            value={this.state.relation}
            onChange={(event, index, value) => { this.setState({ relation: value }); }}
            inputStyle={styles.fieldStyle}
            underlineShow={false}
          >
            <MenuItem value={1} primaryText="Partner" />
            <MenuItem value={2} primaryText="Competitor" />
            <MenuItem value={3} primaryText="Other" />
          </SelectField>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 40 }}>
          <TextField underlineShow={false} style={{ margin: 20 }} inputStyle={styles.fieldStyle} hintText="Description" fullWidth rows={3} defaultValue={this.props.company.description} onChange={(event, value) => { this.setState({ description: value }) }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 40 }}>
          <TextField underlineShow={false} style={{ margin: 20 }} inputStyle={styles.fieldStyle} hintText="Twitter" defaultValue={this.props.company.twitter} onChange={(event, value) => { this.setState({ twitter: value }) }} />
          <TextField underlineShow={false} style={{ margin: 20 }} inputStyle={styles.fieldStyle} hintText="Crunchbase" defaultValue={this.props.company.crunchbase} onChange={(event, value) => { this.setState({ crunchbase: value }) }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 60 }}>
          <RaisedButton type="submit" style={{ margin: 20 }} className="btn" primary label="Save" onClick={this.onSubmit.bind(this)} />
          <RaisedButton type="submit" style={{ margin: 20 }} className="btn" secondary label="Cancel" href="/home" />
        </div>
      </div>
    );
  }
}
/*   
          <div>
            <TextField label="Features" name="feature" type="text" />
            <RaisedButton className="btn" primary label="Add" />
          </div>
          {this.renderTwitter()}
*/


const mapStateToProps = ({ currentCompany }) => {
  return { company: currentCompany };
};

const styles = {
  fieldStyle: {
    backgroundColor: '#fff',
  }
}
export default connect(mapStateToProps, { postCompany, fetchCompany })(AddCompany);
