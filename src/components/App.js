import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.loading === true ? (
          <h3 className="center">Loading...</h3>
        ) : (
          <Dashboard />
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser}) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
