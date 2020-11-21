import React from 'react';

//MUI
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: '40px'
  },
  toolBar: {
    height: '40px'
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
