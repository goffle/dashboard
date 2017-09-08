import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Timeline } from 'react-twitter-widgets'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { postCompany, fetchCompany } from '../../actions/index';

class AddCompany extends Component {
  componentWillMount() {
    this.props.fetchCompany(this.props.match.params.id);
  }

  onSubmit() {
    const obj = {
      key: this.props.company.key,
      name: this.state.name,
      description: this.state.description,
      website: this.state.website,
      crunchbase: this.state.crunchbase,
      twitter: this.state.twitter,
      relation: this.state.relation,
    };
    //this.props.postCompany(obj);
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
    return (
      <div className="container">
        <div className="div">
          <TextField hintText="Name" defaultValue={this.props.company.name} onChange={(event, value) => { this.setState({ name: value }) }} />
          <TextField hintText="Description" rows={3} defaultValue={this.props.company.description} onChange={(event, value) => { this.setState({ description: value }) }} />
          <TextField hintText="Website" defaultValue={this.props.company.website} onChange={(event, value) => { this.setState({ website: value }) }} />
          <TextField hintText="Twitter" defaultValue={this.props.company.twitter} onChange={(event, value) => { this.setState({ twitter: value }) }} />
          <TextField hintText="Crunchbase" defaultValue={this.props.company.crunchbase} onChange={(event, value) => { this.setState({ crunchbase: value }) }} />
          <div>
            <RaisedButton type="submit" className="btn" primary label="Save" onClick={this.onSubmit.bind(this)} />
            <RaisedButton type="submit" className="btn" secondary label="Cancel" href="/home" />
          </div>
        </div>
      </div>
    );
  }
}
/*   <SelectField
            floatingLabelText="Relation"
            value={this.state.relation}
            onChange={this.handleRelationChange}
          >
            <MenuItem value={1} primaryText="Partner" />
            <MenuItem value={2} primaryText="Competitor" />
            <MenuItem value={3} primaryText="Other" />
          </SelectField>
          <div>
            <TextField label="Features" name="feature" type="text" />
            <RaisedButton className="btn" primary label="Add" />
          </div>
          {this.renderTwitter()}
          */


const mapStateToProps = ({ currentCompany }) => {
  return { company: currentCompany };
};

export default connect(mapStateToProps, { postCompany, fetchCompany })(AddCompany);
