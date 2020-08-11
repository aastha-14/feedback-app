import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          name="title"
          type="text"
          component={SurveyField}
          label="Survey Title"
        />
        <Field
          name="subject"
          type="text"
          component={SurveyField}
          label="Subject Line"
        />
        <Field
          name="body"
          type="text"
          component={SurveyField}
          label="Email Body"
        />
        <Field
          name="recipients"
          type="text"
          component={SurveyField}
          label="Recipient List"
        />
      </div>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit((values) => console.log(values))}>
          {this.renderFields()}
          <Link
            to="/surveys"
            className="#80cbc4 teal lighten-3 btn-flat white-text"
          >
            Cancel
          </Link>
          <button
            className="waves-effect waves-light #0d47a1 blue darken-4 btn-flat right white-text"
            type="submit"
          >
            Next<i className="large material-icons right">chevron_right</i>
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

export default reduxForm({ form: "surveyForm", validate })(SurveyForm);
