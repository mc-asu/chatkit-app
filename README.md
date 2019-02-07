# chatkit-app

## 2/4/2019

Added following component via rcc for quick setup
Message, MessageList, NewRoomForm, RoomList and SendMessageForm.
Modified App.css from tutorial(default setup): will change one by one later on.

Added the .eslintrc file to the app
Installed: npm i prettier eslint-config-prettier eslint-plugin-prettier -D

- removed react-logo
- removed html default comments

- added .config.js

- has the tokenurl and instanceLocator

### MessageList Component

- Added dummy-data to simulate the view.

### App Component

- Added lifecycle method: componentDidMount()
- Passed a props into the messagelist component

- we created and connected to the chatmanager chatmanager: see docs @cahtkit/pusher
- removed the message component, because it gets rendered by the messagelist component
- onNewMessage > onMessage : new syntax

### MessageList Component

- Added the message component
- Added TODO

- removed the dummydata as we are getting our messages from the api
- removed the rendered divs

### Message Component

- Added the rendered divs from messagelist into message
- Added TODO

- Changed into a functional component, as it only renders stuff

### SendMessageForm Component

- Added an event that handles submit
- Added an event that handles change(typing)
- Added inverse dataflow from sendmessageform to the chat app

## 2/6/2019

### App Component

- Added the getJoinableRooms() to the mount
- Added two states: joinableRooms and joinedRooms
- Added catch phrase for getJoinableRooms and subscribeToRoom
- Refactored the componentDidMount method
- Created a subscribeToRoom to be able to pass it down to roomslist

### RoomsList Component

- Rendering the Rooms List with all the Rooms we passed in(Subscribed and Unsubscribed)

## 2/7/2019

### RoomsList Component

- Fixed a bug, where if another User is created and has not subscribed to rooms yet. the Room order would shuffle.

- Added a functionality that highlights, which room the user has joined

### MessageList Component

- Added autoscroll

### NewRoomForm

- Added functionality ( 2 methods, handleChange and handleSubmit)

### App

- Added createRoom

### SendMessageForm

- Added disabled feature

### MessageList

- Added a Greeting, while not in any room
