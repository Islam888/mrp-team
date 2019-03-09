import React, { Component } from "react";
import "../App.css";
import firebase from "firebase";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const titleLetters = {
  opacity: '0',
  
};

class Login extends Component {
  
  
  componentDidMount() {
    this.animateLogo()
  }


  animateLogo = () => {
    const text = document.querySelector('.text')
    const ghosts = document.getElementsByClassName('ghost')
    window.onload = () => {
      setTimeout(() => {
        text.classList.remove('hidden')
        Array.prototype.forEach.call(ghosts, ghost => ghost.style.opacity = "1")
      }, 1500); 
    } 
  }

  handleClick = e => {
    e.preventDefault();
    var pass = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    this.props.logIn(email, pass);
    console.log(email, pass)
  };
  
  render() {
    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          flexDirection: "column"
        }}
      >
      <div>
        <ul className="text hidden">
  <li>T</li>
  <li className="ghost" style={titleLetters}>E</li>
  <li className="ghost" style={titleLetters}>A</li>
  <li className="ghost" style={titleLetters}>M</li>
  <li className="spaced">M</li>
  <li className="ghost" style={titleLetters}>A</li>
  <li className="ghost" style={titleLetters}>N</li>
  <li className="ghost" style={titleLetters}>A</li>
  <li className="ghost" style={titleLetters}>G</li>
  <li className="ghost" style={titleLetters}>E</li>
  <li className="ghost" style={titleLetters}>R</li>
  
</ul>
</div>
        <form style={{width: 300}}>
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="current-email"
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              variant="contained"
              style={{ backgroundColor: "#2196f3", color: "#fff" }}
              fullWidth
              onClick={this.handleClick}
            >
              Login
            </Button>
        </form>
      </div>
    );
  }
}

export default Login;
