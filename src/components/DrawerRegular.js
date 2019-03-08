import React, { Component } from "react";
import firebase from "firebase";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Chat from "@material-ui/icons/Chat";
import AccessibilityNew from "@material-ui/icons/AccessibilityNew";
import Assignment from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const drawerWidth = 240;
/* const titleLetters = {
  opacity: '0',
  fontSize: '14',

}; */
const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    paddingTop: 16
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class DrawerRegular extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <div className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            TEAM MANAGER
          </Typography>
        </div>
        <AccountCircle style={{ fontSize: 85 }} />
        <Typography style={{ fontSize: 18, marginBottom: 35 }}>
          Islam Sayed
        </Typography>

        <List>
          <Divider style={{ backgroundColor: "#d6d6d6" }} />
          <ListItem button>
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <Badge badgeContent={2} color="secondary" variant="dot">
              <ListItemText primary="Tasks" />
            </Badge>
          </ListItem>
          <Divider style={{ backgroundColor: "#d6d6d6" }} />
          <ListItem button>
            <ListItemIcon>
              <AccessibilityNew />
            </ListItemIcon>
            <Badge badgeContent={2} color="secondary" variant="dot">
              <ListItemText primary="Off Days" />
            </Badge>
          </ListItem>
          <Divider style={{ backgroundColor: "#d6d6d6" }} />
          <ListItem button>
            <ListItemIcon>
              <Chat />
            </ListItemIcon>
            <Badge badgeContent={2} color="secondary" variant="dot" invisible>
              <ListItemText primary="Chat" />
            </Badge>
          </ListItem>
          <Divider style={{ backgroundColor: "#d6d6d6" }} />
        </List>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(DrawerRegular);
