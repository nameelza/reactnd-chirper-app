import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="tweet">
        <h3>Tweet</h3>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, tweets, users }, { id }) {
  const tweet = tweets[id];
  const parentTweet = tweets[tweet.repluingTo];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet),
  };
}

export default connect(mapStateToProps)(Tweet);
