import React, { Component } from "react";

class NewTweet extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;

    this.setState(() => {
      text;
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;

    //  todo: add tweet to the state

    console.log("New Tweet: ", text);

    this.setState(() => {
      text: "";
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          
        </form>
      </div>
    );
  }
}

export default NewTweet;
