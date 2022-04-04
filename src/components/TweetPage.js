import React, { Component } from "react";
import { connect } from "react-redux";

class TweetPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>tweet page</h3>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, tweets }, props) {
  const { id } = props.match.params;

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
  };
}

export default connect(mapStateToProps)(TweetPage);
