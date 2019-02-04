import React, { Component } from "react";
//Importing the SDK - need to run npm install @pusher/chatkit-client
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

//Importing our Components
import Message from "./components/Message";
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
      userdId: "manuelc",
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 19385683,
        hooks: {
          // event listener when a new message is "created/sent"
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message] // add the latest message at the end of the array
            });
          }
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Message />
        <MessageList />
        <NewRoomForm />
        <RoomsList />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
