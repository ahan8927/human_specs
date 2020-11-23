import React from 'react';

//Components

//MUI
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 'inherit',
  },
  practice_layout: {
    minwidth: '60rem',
    maxWidth: '80rem',
    padding: '2rem',
  },
}));

const Reaction = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Reaction</h1>
      <section className={classes.practice_layout}>

      </section>
    </div>
  )
}

export default Reaction
