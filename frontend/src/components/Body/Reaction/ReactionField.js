import React, { useEffect, useRef, useState } from 'react';

//MUI
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((props) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '60rem',
    height: '30rem',
    borderRadius: '1rem',
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '1rem',

    minwidth: '60rem',
    maxWidth: '80rem',
    padding: '2rem',
  }
}));
const Green = '#C8323E';
const Red = '#4C8000';
const Default = 'rgba(140, 94, 215, .5)';

const ReactionField = (props) => {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);
  const [timeInterval, setTimeInterval] = useState(0);
  const [changed, setChanged] = useState(false);
  const [started, setStarted] = useState(false);
  const [clicked, setClicked] = useState(false)
  const [finished, setFinished] = useState(false);

  const count = useRef({
    time: 0,
    attempts: 0,
    data: 0,
  })

  const randomNumber = () => {
    return Math.random() * (6000 - 500) + 500;
  }

  const handleChange = () => {
    console.log('changed!')
    setChanged(true)

    const startTime = Date.now();
    setTimeInterval(setInterval(function () {
      const elapsedTime = Date.now() - startTime;
      count.current.time = (elapsedTime / 1000).toFixed(3);
    }, 10))
  }

  const handleRestart = () => {
    if (count.current.attempts === props.settings.attempts) {
      setFinished(true)
    }
    count.current.attempts = 0;
    setStarted(false)
    setChanged(false)
    setClicked(false)
  }

  const handleClick = e => {

    if (started) {
      if (changed) {
        clearInterval(timeInterval)

        console.log('well done', count.current.time)
        count.current.data = count.current.time >= 1000 ? 1000 : count.current.time
        setClicked(true)

        setTimeout(function () {
          handleRestart()
        }, 2000);
      } else {
        console.log('False Start!')
        clearInterval(timeInterval)
        setClicked(true)
        setTimeInterval(null)

        setTimeout(function () {
          count.current.data = 1000
          handleRestart()
        }, 2000);
      }
      handleSubmit()

    } else {
      const wait = randomNumber()
      console.log('Wait for the Green...', wait)
      setStarted(true)

      setTimeout(function () {
        handleChange();
      }, wait)
    }
  }

  const handleSubmit = () => {
    console.log('Submitted!', count.current.data)
    // dispatch(statActions.updateUserStats(data, statActions.SET_TYPING))
  }

  const getCount = () => {
    return count.current.data
  }

  const handleDisplay = () => {
    if (started) {
      if (clicked) {
        return (changed) ? `${getCount()} ms` : 'False Start.'
      }
      if (changed) {
        return 'Click!'
      }
      return 'Wait for Green'
    }
    return 'Click to begin.'
  }







  useEffect(() => {
    setIsLoaded(true)
  }, [])

  console.log(`Status... \nstarted: ${started}, changed: ${changed}, data: ${count.current.data}, finished: ${finished}`)

  return isLoaded && (
    <>
      {
        (finished)
          ? (<Paper className={classes.results}>
            <Typography>Here are your stats</Typography>
            <Button onMouseDown={() => handleSubmit()}>Try Again?</Button>
          </Paper>)

          : (<div
            className={classes.root}
            style={{ backgroundColor: `${started ? (changed ? Red : Green) : Default}` }}
            onClick={() => handleClick()}
          >
            {<Typography>{handleDisplay()}</Typography>}
          </div>)
      }
    </>
  )
}

export default ReactionField;
