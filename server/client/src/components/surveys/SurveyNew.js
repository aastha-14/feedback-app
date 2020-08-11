import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

class SurveyNew extends Component {
  state = { showReviewForm: false };
  render() {
    return (
      <div>
        {this.state.showReviewForm ? (
          <SurveyFormReview
            onCancel={() => this.setState({ showReviewForm: false })}
          />
        ) : (
          <SurveyForm
            onSurveySubmit={() => this.setState({ showReviewForm: true })}
          />
        )}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
