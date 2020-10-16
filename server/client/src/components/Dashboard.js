import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SurveyList from "./surveys/SurveyList";
import Skeleton from "react-loading-skeleton";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <center>
          <h3>Dashboard</h3>
          {this.props.auth === null ? (
            <Skeleton count={10} />
          ) : this.props.auth.credits ? (
            <>
              {this.props.surveys.length ? (
                <>
                  <div className="fixed-action-btn">
                    <Link
                      to="/surveys/new"
                      className="btn-floating btn-large #0d47a1 blue darken-4"
                    >
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>Start sending mail to receive feedback.</div>
                  <div className="fixed-action-btn">
                    <Link
                      to="/surveys/new"
                      className="btn-floating btn-large #0d47a1 blue darken-4"
                    >
                      <i className="fa fa-plus"></i>
                    </Link>
                  </div>
                </>
              )}
            </>
          ) : (
            <div>Add credits to send mail for survey! </div>
          )}
          <SurveyList />
        </center>
      </div>
    );
  }
}

function mapStateToProps({ auth, surveys }) {
  return { auth, surveys };
}

export default connect(mapStateToProps)(Dashboard);
