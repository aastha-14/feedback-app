import React, { Component } from "react";
import _ from "lodash";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import formFields from "./formFields";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    const { handleSubmit, onSurveySubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSurveySubmit)}>
          {this.renderFields()}
          <Link
            to="/surveys"
            className="btn"
            style={{ backgroundColor: "#dc3545" }}
          >
            Cancel
          </Link>
          <button className="btn btn-warning right blue darken-4" type="submit">
            <span>Next </span>
            <i className="fa fa-chevron-circle-right"></i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const error = {};

  error.recipients = validateEmails(values.recipients || "");

  if (!values.title) {
    error.title = "You must provide a title";
  }
  if (!values.subject) {
    error.subject = "You must provide a subject";
  }
  if (!values.body) {
    error.body = "You must provide the body";
  }
  if (!values.recipients) {
    error.recipients = "You must provide the recipients";
  }

  return error;
}

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(SurveyForm);
