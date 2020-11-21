import React from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';

//MUI Icons
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FaceIcon from '@material-ui/icons/Face';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SpeedIcon from '@material-ui/icons/Speed';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  loginButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100px',
  },
  loginIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4rem',
    height: '4rem',
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);

  const menuItems = [
    {
      text: 'Practice',
      icon: <KeyboardIcon />,
      path: '/',
    },
    {
      text: 'Profile',
      icon: <MultilineChartIcon />,
      path: '/profile',
    },
    {
      text: 'Help',
      icon: <HelpOutlineIcon />,
      path: '/help',
    },
    {
      text: 'High Scores',
      icon: <EmojiEventsIcon />,
      path: '/ranks',
    },
    {
      text: 'Multiplayer',
      icon: <SpeedIcon />,
      path: '/multiplayer',
    },
  ]

  const handleDrawerClick = (path) => {
    console.log('Redirecting to: ', path)
    history.push(path);
  }
  console.log(user)
  return (
    <>
      <Divider />
      <List>
        {(user) ?
          <ListItem button className={classes.loginButton} onClick={() => handleDrawerClick('/profile')}>
            <ListItemIcon className={classes.loginIcon}>
              <AccountCircle style={{ fontSize: '4rem' }} />
            </ListItemIcon>
            <ListItemText primary={user.username} />
          </ListItem> :
          <ListItem button className={classes.loginButton} onClick={() => handleDrawerClick('/login')}>
            <ListItemIcon className={classes.loginIcon}>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={'Log In'} />
          </ListItem>
        }
        {menuItems.map((item, index) => (
          <ListItem button onClick={() => handleDrawerClick(item.path)} key={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          <ListItemIcon >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href='https://www.linkedin.com/in/aaron-hanson-brb'
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              href='https://github.com/ahan8927'
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </>
  );
}
