import React, { Component } from "react";

export default class SendMessageForm extends Component {
  state = {
    message: "" //the written message on the ui
  };
  // Eventhandler for onChange
  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault(); //prevents the default action of an element
    // send off message
  };

  render() {
    return (
      <div className="send-message-form">
        <form className="send-message-form">
          <input
            onSubmit={this.handleSubmit} // submit event
            onChange={this.handleChange} // event setup
            value={this.state.message} //controlling the value of our state programmatically
            placeholder="Type your message"
            type="text"
          />
        </form>
      </div>
    );
  }
}
