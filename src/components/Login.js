import React, { Component } from "react";
import "../App.css";
import firebase from "firebase";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const titleLetters = {
  opacity: '0',
  
};

const styles1 = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
	//marginTop: 5,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  errorSnackbarContent: {
	margin: theme.spacing.unit,
	background: "#e50000"
  },
  successSnackbarContent: {
	margin: theme.spacing.unit,
	background: "green"  
  },
  snackbar: {
	  maxWidth: "768px",
  },
});


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
  
   openSnackBar = () => {
    this.setState({ open: true });
  };

  

  render() {
    const { classes, isErrorConnectionSnackbarOpen,isErrorLoginSnackbarOpen, isSuccessSnackbarOpen, handleSnackbarClose, errorMessage } = this.props;
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
		<Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isErrorConnectionSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
		<SnackbarContent 
		  className={classes.errorSnackbarContent} 
		  message={<span className={classes.message}><ErrorIcon className={classes.icon, classes.iconVariant} />{errorMessage}</span>}
		  action={
			  <IconButton onClick={handleSnackbarClose}>
				<CloseIcon />
			  </IconButton>
		  } />
		</Snackbar>
		<Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isErrorLoginSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
		<SnackbarContent 
		  className={classes.errorSnackbarContent} 
		  message={<span className={classes.message}><ErrorIcon className={classes.icon, classes.iconVariant} />{errorMessage}</span>}
		  action={
			  <IconButton onClick={handleSnackbarClose}>
				<CloseIcon />
			  </IconButton>
		  } />
		</Snackbar>
		<Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isSuccessSnackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
		<SnackbarContent 
		  className={classes.successSnackbarContent} 
		  message={<span className={classes.message}><CheckCircleIcon className={classes.icon, classes.iconVariant} />{"Network Restored."}</span>}
		  action={
			  <IconButton  onClick={handleSnackbarClose}>
				<CloseIcon/>
			  </IconButton>
		  } />
		</Snackbar>
      </div>
    );
  }
}

export default withStyles(styles1)(Login);
