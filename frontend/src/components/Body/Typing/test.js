import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';

useStyles = makestyles({
  active: {
    backgroundColor: 'grey',
  },
  incorrect: {
    color: 'red',
  },
  correct: {
    color: 'greed',
  },
  error: {
    borderBottom: '2px solid red',
  },
  hidden: {
    opacity: '0',
  },
  show: {
    opacity: '100%'
  }
});

// when the div is clicked
// - hide the overlay
// - set focus to the input field.

const setFocus = () => {

}

const handleInput = (e) => {
  setInput(e.target.value);
}

const textField = () => {
  const classes = useStyles();

  const [isFocus, setIsFocus] = useState(false);
  const [input, setInput] = useState(null);
  const [prompt] = useState(faker.random.words(10).toLowerCase())

  useEffect(() => {

  }, [inputKey])

  return (
    <>
      <div
        onClick={() => setIsFocus(true)}
        className={(isFocus) ? classes.hidden : classes.show}
      >
        Click here to begin
      </div>
      <input
        className={classes.hidden}
        focus={isFocus}
        onChange={handleInput}
        value={input}
      />
    </>
  )
}
