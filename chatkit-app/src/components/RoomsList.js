import React, { Component } from "react";

export default class RoomsList extends Component {
  render() {
    return (
      <div className="rooms-list">
        <ul>
          <h3>Your rooms</h3>
          {this.props.rooms.map(room => {
            return (
              <li key={room.id} className="room">
                <a
                  onClick={() => this.props.subscribeToRoom(room.id)}
                  //doing this will call the function on click not on render
                  href="#s"
                >
                  # {room.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
