import React, { Component } from "react";
import firebase from "firebase";
import fire from "./fire";
import { Route, Link, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Login from "./components/Login";
import RegularDashboard from "./components/RegularDashboard";
import HrDashboard from "./components/HrDashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import Unauthorised from "./components/Unauthorised";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  html,
  body  {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #eee; 
    line-height: 2;
    position: relative;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;


class App extends Component {
  state = {
    userEmail: ""
  };
  logIn = (email, password) => {
    console.log("login triggered");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        this.setState({
          userEmail: data.user.email
        });
        console.log(data.user);
      })
      .catch(function(error) {
        console.log(error.message);
      });
    this.directToSpecificDashboard();
  };

  directToSpecificDashboard = () => {
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        if (user.email === "islam.sayed8@gmail.com") {
          document.getElementById("islam").click();
        }
      } else {
        console.log(user);
      }
    });
  };
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Link id="islam" to="/islam" />
        <Link id="ramzy" to="/ramzy" />
        <Link id="ezatly" to="/ezatly" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login logIn={this.logIn} userEmail={this.state.userEmail} />
            )}
          />
          <Route exact path="/islam" render={() => <RegularDashboard />} />
          <Route exact path="/ramzy" render={() => <HrDashboard />} />
          <Route path=" " render={() => <ManagerDashboard />} />
          <Route
            path="/not-enough-authority"
            render={() => <Unauthorised />}
          />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
