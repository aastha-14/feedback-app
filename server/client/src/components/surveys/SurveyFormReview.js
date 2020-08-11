import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

function SurveyFormReview({ onCancel, formValues, submitSurvey, history }) {
  function renderContent() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <div key={name} style={{ marginTop: "20px" }}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  }

  return (
    <div>
      <h5>Please confirm your entries. </h5>
      {renderContent()}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
        style={{ marginTop: "20px" }}
      >
        <i className="large material-icons left">chevron_left</i>Go Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
        style={{ marginTop: "20px" }}
      >
        Send Survey<i className="large material-icons right">email</i>
      </button>
    </div>
  );
}
function mapStateToProps({ form }) {
  return { formValues: form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
