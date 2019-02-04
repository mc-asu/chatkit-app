import React, { Component } from "react";

export default class SendMessageForm extends Component {
  render() {
    return (
      <div className="send-message-form">
        <form className="send-message-form">
          <input placeholder="SendMessageForm" type="text" />
        </form>
      </div>
    );
  }
}
