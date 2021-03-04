import React, { useState } from 'react';

//components
import ReactionField from './ReactionField';

//MUI
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((props) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 'inherit',
  },
  practice_layout: {
    minwidth: '60rem',
    maxWidth: '80rem',
    padding: '2rem',
  },
}));

const initialSettings = {
  attempts: 5,
}

const Reaction = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Reaction</h1>
      <section className={classes.practice_layout}>
        <ReactionField settings={initialSettings} />
      </section>
    </div>
  )
}

export default Reaction
