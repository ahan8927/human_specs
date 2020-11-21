import React from 'react';

//Components
import PracticeIndicators from './PracticeIndicators';

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

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.practice_layout}>
        <PracticeIndicators />

      </section>
    </div>
  )
}

export default Home
