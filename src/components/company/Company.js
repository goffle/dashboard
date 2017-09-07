import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Timeline } from 'react-twitter-widgets'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { postCompany } from '../../actions/index';

class AddCompany extends Component {
  state = {
    initialValues: {},
    relation: ''
  }

  handleRelationChange = (event, index, value) => {
    this.setState({ relation: value })
  };

  onSubmit(params) {
    const obj = {
      key : params.key,
      name: params.name,
      description: params.description,
      website: params.website,
      crunchbase: params.crunchbase | '',
      twitter: params.twitter | '',
      relation: this.state.relation | '',
    };
    this.props.postCompany(obj);
    this.props.history.push('/');
  }
  renderTwitter() {
    if (this.props.initialValues && this.props.initialValues.twitter) {
      return (
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: this.props.initialValues.twitter
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
      <form className="container" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <div className="div">
          <h3>Add a new shop</h3>
          <div class="row">
            <div class="col-4">
              <Field label="Name" name="name" component={renderNameTextField} type="text" />
            </div>
            <div class="col-4">
              <Field label="Description" name="description" component={renderNameTextField} rows={3} type="text" />
            </div>
            <div class="col-4">
              <Field label="Website" name="website" component={renderNameTextField} type="text" />
            </div>
          </div>
          <Field label="Twitter" name="twitter" component={renderNameTextField} type="text" />
          <Field label="Crunchbase" name="crunchbase" component={renderNameTextField} type="text" />
          <SelectField
            floatingLabelText="Relation"
            value={this.state.relation}
            onChange={this.handleRelationChange}
          >
            <MenuItem value={1} primaryText="Partner" />
            <MenuItem value={2} primaryText="Competitor" />
            <MenuItem value={3} primaryText="Other" />
          </SelectField>


          <div>
            <Field label="Features" name="feature" component={renderNameTextField} type="text" />
            <RaisedButton className="btn" primary label="Add" />
          </div>
          {this.renderTwitter()}
          <br /><br /><br />

          <div>
            <RaisedButton type="submit" className="btn" primary label="Save" />
            <RaisedButton type="submit" className="btn" secondary label="Cancel" href="/home" />
          </div>
        </div>
      </form>
    );
  }
}

const renderNameTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
    fullWidth
  />
);

const validate = (values) => {
  const errors = {};
  const fields = ['name', 'description', 'website'];
  fields.forEach((field) => {
    if (values[field] === undefined) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const mapStateToProps = ({ companies }, props) => {
  return { initialValues: companies[props.match.params.id] }
};

export default connect(mapStateToProps, { postCompany })(
  reduxForm({
    form: 'AddCompanyForm',
    validate,
  })(AddCompany));
