import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { postCompany } from '../actions/index';

class AddCompany extends Component {

  componentWillMount() {
    console.log(this.props.match.params.id);
  }

  onSubmit({ name, description, website, crunchbase }) {
    const obj = {
      name,
      description,
      website,
      crunchbase,
    };
    this.props.postCompany(obj);
    this.props.history.push('/');
  }

  render() {
    return (
      <form className="container" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <div className="div">
          <h3>Add a new shop</h3>
          <Field label="Name" name="name" component={renderNameTextField} type="text" />
          <Field label="Description" name="description" component={renderNameTextField} type="text" />
          <Field label="Website" name="website" component={renderNameTextField} type="text" />
          <Field label="Crunchbase" name="crunchbase" component={renderNameTextField} type="text" />
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

export default connect(null, { postCompany })(
  reduxForm({
    form: 'AddCompanyForm',
    validate,
    initialValues: {
      crunchbase: '',
    },
  })(AddCompany));
