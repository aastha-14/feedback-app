import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Dashboard</h1>
          {this.props.auth === null ? (
            ""
          ) : this.props.auth.credits ? (
            <>
              <div>Start sending mail for survey</div>
              <div className="fixed-action-btn">
                <Link
                  to="/surveys/new"
                  className="btn-floating btn-large #0d47a1 blue darken-4"
                >
                  <i className="large material-icons">add</i>
                </Link>
              </div>
            </>
          ) : (
            <div>Add credits to send mail for survey! </div>
          )}
        </center>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
