import React, { useEffect, useState } from 'react';

//Mui
import { Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
  },
  borderBox: {
    boxSizing: 'border-box',
    // padding: '5'
  },
  indicator_guage: {
    marginLeft: '2rem'
  },
  indicator_keySet: {
    backgroundColor: '#0EDA61',
    width: '1.5em',
    height: '1.5em',
    margin: '0 1px',
  },
  flex_center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

const keyss = ['e', 'n', 'i', 't', 'r', 'l', 's', 'a', 'u', 'o', 'd', 'y', 'c', 'h', 'g', 'm']

const PracticeIndicators = (props) => {
  const classes = useStyles();

  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);
  const [score, setScore] = useState(0);
  const [keys, setKeys] = useState(keyss)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return isLoading ? (
    <>
      <div>
        <div>
          <span><Typography display='inline'>Speed: {wpm}</Typography></span>
          <span><Typography display='inline' className={classes.indicator_guage}>Errors: {errors}</Typography></span>
          <span><Typography display='inline' className={classes.indicator_guage}>Score: {score}</Typography></span>
        </div>
        <Divider />
        <div>
          <span><Typography display='inline'>Lesson's key set: </Typography></span>
          <span className={classes.flex}>
            {keys.map((letter) => (
              <span key={letter} className={classes.indicator_keySet}>
                <Typography display='block' align='center'>{letter}</Typography>
              </span>
            ))}
          </span>
        </div>
      </div>
    </>
  ) : (
      <div>Loading...</div>
    )
}

export default PracticeIndicators;
