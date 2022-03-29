import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
