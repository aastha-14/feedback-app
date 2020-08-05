import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Home from "./Home";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/surveys">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
