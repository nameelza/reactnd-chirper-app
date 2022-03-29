import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitalData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData);
  }
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default connect()(App);