import React, { Component } from "react";
import firebase from "firebase"
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    
   

  handleClick = e => {

    e.preventDefault()
    var pass = document.getElementById('password').value
    var email = document.getElementById('email').value
    console.log(email, pass)
    this.props.logIn(email, pass)
  }

      
  render() {
    return (
      <div>
        <form>
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
          margin="normal"
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <Button
          variant="contained"
          style={{backgroundColor: "#2196f3", color: "#fff"}}
          onClick={this.handleClick}
        >
          Log In
        </Button>
        </form>
        
      </div>
    );
  }
}

export default Login;
