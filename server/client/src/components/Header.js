import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <li role="presentation" className="nav-item">
            <span className="nav-link">
              <Skeleton />
            </span>
          </li>
        );
      case false:
        return (
          <>
            <li role="presentation" className="nav-item ml-auto">
              <a
                href="/auth/google"
                className="nav-link btn text-white blue darken-4"
              >
                Sign In with Google
              </a>
            </li>
            <li role="presentation" className="nav-item ml-auto">
              <a
                href="/auth/facebook"
                className="nav-link btn text-white blue darken-4"
              >
                Sign In with Facebook
              </a>
            </li>
          </>
        );
      default:
        return (
          <>
            <li role="presentation" className="nav-item ml-auto">
              <span className="nav-link float-right text-white">
                Credits: {this.props.auth.credits}
              </span>
            </li>
            <li role="presentation" className="nav-item ml-auto">
              <Payments className="nav-link" />
            </li>
            <li role="presentation" className="nav-item ml-auto">
              <a
                href="/api/logout"
                className="nav-link btn text-white blue darken-4 float-right"
              >
                Sign Out
              </a>
            </li>
          </>
        );
    }
  }
  render() {
    return (
      <div className="navbar navbar-light navbar-expand-md navigation-clean-button py-auto my-auto bg-info">
        <Link className="navbar-brand" to={this.props.auth ? "/surveys" : "/"}>
          <h4>Feedback</h4>
        </Link>
        <button
          data-toggle="collapse"
          data-target="#navcol-1"
          className="navbar-toggler"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav w-100">{this.renderContent()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
