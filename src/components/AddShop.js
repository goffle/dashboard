import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { postShop } from '../actions/index';

class AddShop extends Component {
  onSubmit(props) {
    this.props.postShop(props);
    //this.props.dispatch(reset('AddShopForm'));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="div">
          <h3>Add a new shop</h3>
          <Field label="Name" name="name" component={renderNameTextField} type="text" />
          <Field label="Email" name="email" component={renderNameTextField} type="text" />
          <Field label="Phone" name="phone" component={renderNameTextField} type="text" />
          <Field label="Location" name="location" component={renderNameTextField} type="text" />
          <Field label="Categories" name="categories" component={renderNameTextField} type="text" />
          <Field label="Address" name="address" component={renderNameTextField} type="text" />
          <Field label="PostalCode" name="postalCode" component={renderNameTextField} type="text" />
          <br /><br /><br />
          <div>
            <RaisedButton type="submit" className="btn" primary label="Save" />
            <RaisedButton type="submit" className="btn" secondary label="Cancel" href="/portfolio" />
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
  const fields = ['Name', 'Email', 'Phone', 'Location', 'Categories', 'Address', 'PostalCode'];
  fields.forEach((field) => {
    if (values[field] === undefined) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default connect(null, { postShop })(
  reduxForm({
    form: 'AddShopForm',
    validate,
  })(AddShop));
