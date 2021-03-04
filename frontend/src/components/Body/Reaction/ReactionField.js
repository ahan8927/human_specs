import React, { useEffect, useRef, useState } from 'react';

//MUI
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((props) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minwidth: '60rem',
    maxWidth: '80rem',
    padding: '2rem',
  },
}));

const ReactionField = (props) => {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);
  const [timeInterval, setTimeInterval] = useState(0);
  const [changed, setChanged] = useState(false);
  const [started, setStarted] = useState(false);

  const [data, setData] = useState([])
  const time = useRef({ time: 0 })

  const randomNumber = () => {

  }

  const handleChange = () => {
    const startTime = Date.now();

    setTimeInterval(setInterval(function () {
      const elapsedTime = Date.now() - startTime;
      time.current.time = (elapsedTime / 1000).toFixed(3);
    }, 100))
  }

  const handleRestart = () => {

  }

  const handleClick = e => {
    if (started) {
      if (changed) {
        setTimeout(function () {
          handleRestart()
        }, 2000);
      } else {
        setIsError(true)
        setTimeout(function () {
          handleRestart()
        }, 2000);
      }

    } else {
      setTimeInterval(setTimeout(function () {
        handleChange();
      }, randomNumber()))
    }
  }

  const handleSubmit = () => {
    dispatch(statActions.updateUserStats(data, statActions.SET_TYPING))
  }





  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded && (
    <div
      className={classes.root}
      style={{ backgroundColor: `${started ? (changed ? '#C8323E' : '#4C8000') : '#8C5ED7'}` }}

    >
      {
        started ? (changed ? '#C8323E' : '#4C8000') : '#8C5ED7'
      }
    </div>
  );
}

export default ReactionField;
