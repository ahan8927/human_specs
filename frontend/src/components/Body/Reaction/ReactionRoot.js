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
}));

const initialSettings = {
  attempts: 5,
}

const Reaction = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactionField settings={initialSettings} />
    </div>
  )
}

export default Reaction
