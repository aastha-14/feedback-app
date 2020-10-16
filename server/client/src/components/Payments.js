import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={500}
        name="Feedback"
        description="₹5 for 5 email credits"
        currency="INR"
      >
        <h5 className="nav-link">
          Add Credits
        </h5>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
