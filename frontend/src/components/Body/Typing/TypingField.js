import React, { useEffect, useState } from 'react';


import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '& > *': {
    boxSizing: 'border-box',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
  },
  input: {
    backgroundColor: 'transparent',
    border: '2px solid blue',
    outline: 'none',
    // fontSize: '1.3rem',
    width: '100%',
    margin: 'auto',
    padding: '.5rem 1rem',
    resize: 'none',
    borderRadius: '.5rem',
  },
  container: {
    padding: '1rem',
    borderRadius: '.5rem',
  },
  timer: {
    position: 'absolute',
    top: '25vh',
    left: '50vw',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  prompt: {
    marginBottom: '1rem',
    marginLeft: 'calc(1rem + 2px)',
    marginRight: 'calc(1rem + 2px)',
  },

  active: {
    backgroundColor: 'pink',
  },
  word: {
    padding: '0 2px',
    default: {
      borderBottom: '2px solid red',
    },
    error: {
      borderBottom: '2px solid red',
    }
  },
  letter: {
    fontSize: '1.5rem',
    padding: '0 .5px'
  },
  correct: {
    // padding: '0 1px',
    color: 'green',
  },
  incorrect: {
    // padding: '0 1px',
    color: 'red',
    borderBottom: '1px solid red'
  },

}));

const TypingField = () => {
  const faker = require('faker');

  const Word = (props) => {
    const classes = useStyles();
    const letters = props.word.split('')
    const space = ' ';

    return (
      <span className={classes.word}>
        {
          letters.map((char, idx) => (
            <letter key={idx} className={classes.letter}>
              {char}
            </letter>
          ))
        }
        <letter>{space}</letter>
      </span>
    )
  }

  const generatePrompt = (settings) => {
    const words = faker.random.words(10).toLowerCase().split(' ');
    return words.map((word, index) => {

      return (
        <Word key={index} word={word} />
      )
    }
    );
  }



  const checkWord = (word) => {
    return
  }




  const classes = useStyles();

  const [prompt, setPrompt] = useState(generatePrompt());
  // const [wordCount, setWordCount]
  // const [currentWord, setCurrentWord] = useState('')
  const [input, setInput] = useState('')
  const [time, setTime] = useState(0);
  const [hasValue, setHasValue] = useState(false)

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  let timeInterval;
  const startTimer = () => {
    const startTime = new Date()
    timeInterval = setInterval(() => {
      setTime(Math.floor(new Date() - startTime) / 1000)
    }, 1000);
    return timeInterval
  }

  const stopTimer = () => {
    console.log('stopping timer', timeInterval)
    clearInterval(timeInterval);
    setTime(0)
  }

  useEffect(() => {
    hasValue ? startTimer() : stopTimer()
  }, [hasValue])

  useEffect(() => {
    input !== '' ? setHasValue(true) : setHasValue(false)
    const letterArr = document.querySelectorAll('letter');
    const inputArr = input.split('').slice(0, input.length);
    let isDone = true;
    letterArr.forEach((letterTag, index) => {
      const char = inputArr[index];

      if (!char) {
        letterTag.classList.remove(classes.incorrect);
        letterTag.classList.remove(classes.correct);
        isDone = false;
      } else if (char === letterTag.innerHTML) {
        letterTag.classList.remove(classes.incorrect);
        letterTag.classList.add(classes.correct);
      } else {
        letterTag.classList.add(classes.incorrect);
        letterTag.classList.remove(classes.correct);
        isDone = false;
      }
    })
    if (isDone) {
      stopTimer();
      setPrompt(generatePrompt());
      setInput('');
    }
  }, [input, classes.incorrect, classes.correct])

  console.log(hasValue)
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.timer}>{time}</h1>
        <div className={classes.prompt}>{prompt}</div>
        <textarea
          spellCheck='false'
          className={classes.input}
          onChange={handleInput}
          value={input}
        />
      </div>
    </div>
  )
}

export default TypingField
