import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitalData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitalData);
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App);