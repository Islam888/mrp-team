import React, { Component } from "react";
import firebase from "firebase";
import fire from "./fire";
import { Route, Link, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Login from "./components/Login";
import RegularPanel from "./components/RegularPanel";
import ManagerPanel from "./components/ManagerPanel";
import Unauthorised from "./components/Unauthorised";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  html,
  body  {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    line-height: 2;
    position: relative;
    font-family: 'Montserrat', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif !important;
  }
`;

class App extends Component {
  state = {
    btnDisableStatus: true, //send btn disabled by default
    msgs: []
  };
  componentDidMount() {
    this.loadMessages()
  }
  logIn = (email, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        this.setState({
          userEmail: data.user.email
        });
      })
      .catch(function(error) {
        console.log(error.message);
      });
    this.directToSpecificDashboard();
  };

  logOut = () => {
    fire
      .auth()
      .signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error.message);
      });
    this.directToHomePage();
  };

  directToSpecificDashboard = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (user.email === "islam.sayed8@gmail.com") {
          const islamPanelLink = document.getElementById("islam");
          islamPanelLink.click();
        }
      }
    });
  };

  directToHomePage = () => {
    const homeLink = document.getElementById("home");
    homeLink.click();
  };

  isUserSignedIn = () => firebase.auth().currentUser;

  resetMessageInputElement = messageInputElement => {
    messageInputElement.value = "";
    this.toggleButton(messageInputElement.value);
  };

  toggleButton = message => {
    if (message) {
      this.setState({
        btnDisableStatus: false
      });
    } else {
      this.setState({
        btnDisableStatus: true
      });
    }
  };

  saveMessage = message =>
    firebase
      .firestore()
      .collection("messages")
      .add({
        name: "islam",
        text: message,
        profilePicUrl: "https://randomuser.me/api/portraits/men/60.jpg",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(function(error) {
        console.error("Error writing new message to Firebase Database", error);
      });

  sendMessage = (message, messageInputElement) => {
    if (message && this.isUserSignedIn()) {
      this.saveMessage(message).then(() => {
        this.resetMessageInputElement(messageInputElement);
        //this.loadMessages();
      });
    }
  };

    loadMessages = () =>  {
    // TODO 8: Load and listens for new messages.
    // Create the query to load the last 12 messages and listen for new ones.
    var query = firebase.firestore()
                    .collection('messages')
                    .orderBy('timestamp', 'desc')
                    .limit(3)
                    
    
    // Start listening to the query.
    query.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'removed') {
          this.deleteMessage(change.doc.id);
        } else {
          var message = change.doc.data();
          this.displayMessage(change.doc.id, message);
        }
      });
    });
  } 
  displayMessage = (id, message) => {
    if (message.timestamp) {
      this.setState(prevState => ({
        msgs: prevState.msgs.concat(message)
      }))
    }
    
  };
  deleteMessage = (id) => {
    var div = document.getElementById(id);
    // If an element for that message exists we delete it.
    if (div) {
      div.parentNode.removeChild(div);
    }
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <AppBar position="fixed" variant="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Team Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Link id="home" to="/" />
        <Link id="islam" to="/islam" />
        <Link id="ramzy" to="/ramzy" />
        <Link id="ezatly" to="/ezatly" />
        <Switch>
          <Route exact path="/" render={() => <Login logIn={this.logIn} />} />
          <Route
            exact
            path="/islam"
            render={() => (
              <RegularPanel
                logOut={this.logOut}
                sendMessage={this.sendMessage}
                handleChange={this.toggleButton}
                handleKeyUp={this.toggleButton}
                btnDisableStatus={this.state.btnDisableStatus}
                messages={this.state.msgs}
              />
            )}
          />
          <Route
            path="/ezatly"
            render={() => <ManagerPanel logOut={this.logOut} />}
          />
          <Route path="/not-enough-authority" render={() => <Unauthorised />} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
