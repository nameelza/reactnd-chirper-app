import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tweet extends Component {
    render() {
        return (
            <div className="tweet">

            </div>
        )
    }
}

function mapStateToProps ({authedUser, tweets, users}, {id}) {
  const tweet = tweets[id];
  return {
      authedUser,
      tweet: tweet,
  }
}

export default connect()(Tweet);