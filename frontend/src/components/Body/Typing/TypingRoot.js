import React from 'react';

//Components
import PracticeField from './TypingField';

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

const Typing = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.practice_layout}>
        <PracticeField />
      </section>
    </div>
  )
}

export default Typing
