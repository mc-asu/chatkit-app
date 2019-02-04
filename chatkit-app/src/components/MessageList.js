import React, { Component } from "react";

const DUMMY_DATA = [
  {
    senderId: "mccc",
    text: "Hey, how is it going?"
  },
  {
    senderId: "janedoe",
    text: "Great! How about you?"
  },
  {
    senderId: "mccc",
    text: "Good to hear! I am great as well"
  }
];

export default class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
