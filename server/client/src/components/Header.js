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
          <li className='nav-item'>
            <span className="nav-link">
              <Skeleton />
            </span>
          </li>
        );
      case false:
        return (
          <>
            <li className='nav-item'>
              <h5>
                <a
                  href="/auth/google"
                  className="nav-link text-dark"
                >
                  Sign In with Google
              </a>
              </h5>
            </li>
            <li className='nav-item'>
              <h5>
                <a
                  href="/auth/facebook"
                  className="nav-link text-dark"
                >
                  Sign In with Facebook
              </a>
              </h5>
            </li>
          </>
        );
      default:
        return (
          <>
            <li className='nav-item'>
              <h6 className="nav-link text-dark">
                Credits: {this.props.auth.credits}
              </h6>
            </li>
            <li className='nav-item'>
              <Payments className="nav-link text-dark" />
            </li>
            <li className='nav-item'>
              <h5>
                <a
                  href="/api/logout"
                  className="nav-link text-dark"
                >
                  Sign Out
              </a>
              </h5>
            </li>
          </>
        );
    }
  }
  render() {
    return (
      <div>
        <ul className='nav nav-tabs py-3 bg-warning'>
          <li className='nav-item'>
            <Link className="nav-link" to={this.props.auth ? "/surveys" : "/"}>
              <h5>Feedback</h5>
            </Link>
          </li>
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
