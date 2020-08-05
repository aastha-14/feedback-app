import React, { Component } from "react";
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
            <div>Start sending mail for survey</div>
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
