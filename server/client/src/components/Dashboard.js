import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    if (!this.props.auth.credits) {
      console.log("no credits");
    }

    return (
      <div>
        <center>
          <h1>Dashboard</h1>
        </center>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
