import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderContent() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div key={survey._id} className="card">
          <div className="card-body">
            <span className="card-title">{survey.title}</span>
            <p className="card-text">{survey.body}</p>
            <p className="card-text text-right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-footer">
            <span className="card-link">Yes: {survey.yes} </span>
            <span className="card-link">No: {survey.no} </span>
          </div>
        </div>
      );
    });
  }
  render() {
    if (!this.props.surveys) return <h1>Loading...</h1>;
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

// http://e7915aa06cf0.ngrok.io/api/surveys/webhook
