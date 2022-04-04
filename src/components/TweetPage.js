import React, { Component } from "react";
import { connect } from "react-redux";

class TweetPage extends Component {
  render() {
    return (
      <div>
        <h3>tweet page</h3>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, tweets }, props) {
  const { id } = props.match.params;
}

export default connect()(TweetPage);
