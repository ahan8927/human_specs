import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Mui
import { makeStyles, Typography, IconButton, Button } from '@material-ui/core';

//Icons
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  navBar_icon: {
    minWidth: '1.5rem',
    maxWidth: '3rem',
  },
  iconButton: {
    '&.MuiIconButton-root': {
      borderRadius: '.5rem',
      padding: '.5rem'
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const loadedUser = useSelector(state => state.session.user)

  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState()

  useEffect(() => {
    setIsLoaded(true);
    setUser(loadedUser);
  }, [loadedUser])

  const getParams = () => {
    return window.location.pathname.slice(1)
  }
  const [params, setParams] = useState(getParams())

  const navs = [
    {
      title: 'Dashboard',
      redirect: false,
      path: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Help',
      redirect: false,
      path: '/help',
      icon: <HelpOutlineIcon />
    },
    {
      title: 'Profile',
      redirect: true,
      path: '/profile',
      icon: <PersonIcon />
    }
  ]

  const handleNavClick = (path) => {
    history.push(path)
    setParams(getParams())
  }

  const handleMenuClick = (path) => {
    console.log(path)
  }

  return isLoaded && (
    <div className={'navBar_root'}>
      <div className={'navBar_left'}>
        <Button >
          <Typography> human_{(params) ? params : 'specs'}</Typography>
        </Button>
      </div>
      <div className={'navBar_middle'}>
        <div className={'navBar_iconContainer'}>
          {navs.map((navItem) => (
            <IconButton
              className={classes.iconButton}
              key={navItem.title}
              title={navItem.title}
              onClick={() => {
                (navItem.redirect) ?
                  handleNavClick(navItem.path) :
                  handleMenuClick(navItem.path)
              }}
            >
              {navItem.icon}
            </IconButton>
          ))}
          <Button
            className={classes.iconButton}
            title={(user) ? 'Profile' : 'Login'}
            onClick={() => {
              (user) ?
                handleNavClick('/profile') :
                handleMenuClick('/login')
            }}
          >
            {(user) ? user.username : 'Login'}
          </Button>
        </div>
      </div>
      <div className={'navBar_right'}>
        <div className={'navBar_iconContainer'}>
          <div className={'navBar_iconWrapper'}>
            <Typography>{(user) ? user.username : 'login'}</Typography>
          </div>
          <IconButton
            className={classes.iconButton}
            title={'settings'}
            onClick={() => handleMenuClick('settings')}
          >
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </div >
  );
}

export default Header;
