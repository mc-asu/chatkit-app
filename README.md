# chatkit-app

follow per borgens - chatkit tutorial on scrimba:
https://scrimba.com/playlist/pbNpTv

## 2/4/2019

Added following component via rcc for quick setup
Message, MessageList, NewRoomForm, RoomList and SendMessageForm.
Modified App.css from tutorial(default setup): will change one by one later on.

Added the .eslintrc file to the app
Installed: npm i prettier eslint-config-prettier eslint-plugin-prettier -D

*removed react-logo
*removed html default comments

added .config.js

- has the tokenurl and instanceLocator

### MessageList Component

Added dummy-data to simulate the view.

### App Component

+Added lifecycle method: componentDidMount()
+Passed a props (message:[]) into the messagelist component
-we created and connected to the chatmanager chatmanager: see docs @cahtkit/pusher
-removed the message component, because it gets rendered by the messagelist component
-onNewMessage > onMessage : new syntax

### MessageList Component

+Added the message component
-removed the dummydata as we are getting our messages from the api
