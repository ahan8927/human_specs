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
    // display: 'flex',
    padding: '1rem',
    borderRadius: '.5rem',
  },
  timer: {
    position: 'absolute',
    top: '25vh',
    left: '47vw',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  prompt: {
    // display: 'inline-block',
    // gridAutoFlow: 'row dense',
    // maxWidth: '75vw',
    marginBottom: '1rem',
    marginLeft: 'calc(1rem + 2px)',
    marginRight: 'calc(1rem + 2px)',
  },

  active: {
    backgroundColor: 'pink',
  },
  word: {
    display: 'inline-block',
    height: 'fit-content',
    alignItems: 'center',
    padding: '0 .3rem',
  },
  letter: {
    display: 'inline-block',
    // height: '2rem',
    fontSize: '1.75rem',
    padding: '0 .5px'
  },
  correctLetter: {
    color: 'green',
  },
  incorrectLetter: {
    color: 'red',
    borderBottom: '1px solid red'
  },

}));

const initialSettings = {
  wordLimit: 10,
}

//word component
const Word = (props) => {
  const classes = useStyles();
  const letters = props.word.split('')
  const space = ' ';

  return (
    <div className={classes.word}>
      {
        letters.map((letter, idx) => (
          <span key={idx} className={classes.letter}>
            {letter}
          </span>
        ))}
      <span className={classes.letter}>{space}</span>
    </div>
  )
}









// TYPINGFIELD COMPONENT
const TypingField = () => {
  const classes = useStyles();
  const faker = require('faker');

  let letters = {}

  //Component States
  const [settings] = useState(initialSettings);
  const [input, setInput] = useState('');
  const [timeInterval, setTimeInterval] = useState();
  const [hasValue, setHasValue] = useState(false);

  const [prompt, setPrompt] = useState([]);
  const [wordIdx, setWordIdx] = useState(0);
  const [currentWord, setCurrentWord] = useState(prompt[wordIdx]);
  const [letterIdx, setLetterIdx] = useState(0);
  const [isLastLetter, setIsLastLetter] = useState(false)

  //For data collection
  const [wordCount] = useState(settings.wordLimit);
  const [WPM, setWPM] = useState(0);
  const [time, setTime] = useState(0);
  const [isError, setIsError] = useState(false);









  //COMPONENT FUNCTIONS
  const startTimer = () => {
    const startTime = new Date().getSeconds
    setTimeInterval(setInterval(() => {
      setTime(Math.floor((new Date().getSeconds - startTime) / 1000))
    }, 1000))
  }

  const stopTimer = () => {
    clearInterval(timeInterval);
    setTime(0);
  }

  const checkNextInvalid = () => {
    return (currentWord[letterIdx + 1]) ? false : true;
  }

  const checkLastWord = () => {
    return (wordIdx === prompt.length - 1) ? true : false;
  }

  const printStatus = () => {
    console.log('word: ', currentWord, ' letter: ', currentWord[letterIdx]);
    console.log('word idx: ', wordIdx, ' letter idx: ', letterIdx);
    console.log('last word idx: ', prompt.length - 1, ' last letter idx: ', currentWord.length - 1)
    // if (checkLastLetter()) {
    //   console.log('Last Letter!')
    // } else {
    //   console.log('\n')
    // }
    console.log('\n')
  }

  const generatePrompt = async (settings) => {
    const generatedWords = faker.random.words(settings.wordLimit).toLowerCase();
    const wordsArr = generatedWords.split(' ');
    setPrompt(wordsArr);
    setCurrentWord(wordsArr[0]);
    stopTimer();
  }

  const checkInput = (e) => {
    const wordNodes = document.getElementsByClassName(classes.word);

    if (e.target.value === currentWord[letterIdx]) {
      wordNodes[wordIdx].childNodes[letterIdx].classList.add(isError ? classes.incorrectLetter : classes.correctLetter)
      return true
    }
    return false;
  }

  const moveWord = () => {
    setIsError(false);
    if (checkLastWord()) {
      //or signal end of test.
      // generatePrompt();
    } else {
      setWordIdx(wordIdx + 1);
      setCurrentWord(prompt[wordIdx + 1]);
      setLetterIdx(0);
      setIsLastLetter(false)
    }
  }

  const moveLetter = () => {
    setIsError(false)
    setLetterIdx(letterIdx + 1);
  }

  const handleInput = (e) => {
    if (isLastLetter) {
      if (e.target.value === ' ') {
        moveWord();
      } else {
        setIsError(true);
      }

    } else if (checkInput(e)) {
      if (checkNextInvalid()) {
        setIsLastLetter(true);
      } else {
        moveLetter();
      }
    } else {
      setIsError(true);
    }
  }

  const checkStarted = () => {
    hasValue ? startTimer() : stopTimer();
  }










  //COMPONENT USE EFFECTS
  useEffect(() => {
    generatePrompt(initialSettings);
  }, [])

  useEffect(() => {
    checkStarted();
  }, [hasValue])

  // useEffect(() => {
  //   currentWord && printStatus();
  //   // checkLastLetter()
  // }, [letterIdx])





  //RENDER
  return (
    <div className={classes.root}>
      <div id='typingField_wrapper'>
        <h1 className={classes.timer}>{time} {WPM}</h1>
        <div className={classes.prompt}>{
          prompt.map((word, index) => (
            <Word key={index} word={word} />
          ))
        }</div>
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
