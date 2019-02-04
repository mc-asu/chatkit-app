import React, { Component } from "react";
//Importing the SDK - need to run npm install @pusher/chatkit-client
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

//Importing our Components
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import RoomsList from "./components/RoomsList";
import SendMessageForm from "./components/SendMessageForm";

//Importing our tokenUrl and instanceLocator from config
import { tokenUrl, instanceLocator } from "./config";

import "./App.css";

class App extends Component {
  state = {
    messages: [] //store our messages
  };

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator,
      userId: "manuelc",
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser; // currentUser is now available in the whole app instance
      this.currentUser.subscribeToRoom({
        roomId: "19385683",
        hooks: {
          // event listener when a new message is "created/sent"
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message] // add the latest message at the end of the array
            });
          }
        }
      });
    });
  }

  sendMessage = text => {
    //we will send this down to a child component, so that we get the data from the handleSubmit
    this.currentUser.sendMessage({
      text,
      roomId: "19385683"
    });
  };

  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
        <NewRoomForm />
        <RoomsList />
        <SendMessageForm sendMessage={this.sendMessage} />{" "}
        {/* inverse dataflow ( child to parent)*/}
      </div>
    );
  }
}

export default App;
