import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as statActions from '../../../store/actions/stats';


//MUI
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import styles from './TypingStyles';

const useStyles = makeStyles((theme) => ({
  '& > *': {
    boxSizing: 'border-box',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
  },



  blur: {
    filter: 'blur(4px)',
    marginBottom: '1rem',
    marginLeft: 'calc(1rem + 2px)',
    marginRight: 'calc(1rem + 2px)',
  },
  hide: {
    opacity: '0'
  },
  clickHere: {
    position: 'relative',
    top: '5rem',
    // left: '25rem',
  },
  active: {
    backgroundColor: 'grey',
  },


  container: {
    padding: '1rem',
    borderRadius: '.5rem',
  },
  typingField_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timer: {
    width: 'fit-content',
    height: '18rem',
    opacity: '0.5',
    filter: 'blur(3px)',

    fontSize: '15rem',
  },
  indicator_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    position: 'absolute',
    top: '20vh',
  },


  prompt: {
    marginBottom: '1rem',
    marginLeft: 'calc(1rem + 2px)',
    marginRight: 'calc(1rem + 2px)',
  },
  input: {
    backgroundColor: 'transparent',
    position: 'absolute',
    border: '2px solid blue',
    outline: 'none',
    margin: 'auto',
    padding: '.5rem 1rem',
    resize: 'none',
    borderRadius: '.5rem',
    opacity: '0',
  },


  word: {
    display: 'inline-block',
    height: 'fit-content',
    alignItems: 'center',
    padding: '0 .3rem',
  },
  letter: {
    display: 'inline-block',
    fontSize: '1.75rem',
    padding: '0 .5px'
  },
  correctLetter: {
    // color: theme.success,
    color: 'green'
  },
  incorrectLetter: {
    color: 'red',
    // borderBottom: '1px solid red'
    // borderBottom: `1px solid ${theme.error}`
  },

}))


//word component
const Word = (props) => {
  const classes = useStyles();
  const letters = props.word.split('')
  const space = ' ';
  // console.log('word: ', classes.word)
  return (
    <div className={classes.word}>
      {
        letters.map((letter, idx) => (
          <Typography color='primary' key={idx} className={classes.letter}>
            {letter}
          </Typography>
        ))}
      <Typography className={classes.letter}>{space}</Typography>
    </div>
  )
}


// TYPINGFIELD COMPONENT
const TypingField = (props) => {
  const faker = require('faker');
  const dispatch = useDispatch();

  // const theme = useTheme();

  const classes = useStyles();
  // const stats = useSelector(state => state.stats.user.typing)

  //Component States
  const { settings } = props;
  const [isLoaded, setIsLoaded] = useState(false)
  const [input] = useState('');
  const [timeInterval, setTimeInterval] = useState();
  const [hasValue, setHasValue] = useState(false);
  const [blur, setBlur] = useState(true)

  const [prompt, setPrompt] = useState([]);
  const [wordIdx, setWordIdx] = useState(0);
  const [letterIdx, setLetterIdx] = useState(0);
  const [isLastLetter, setIsLastLetter] = useState(false)

  //For data collection
  const [letterCount, setLetterCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState(0);

  let wordNodes = document.getElementsByClassName(classes.word);





  //COMPONENT FUNCTIONS
  const sendData = (data) => {
    dispatch(statActions.updateUserStats(data, statActions.SET_TYPING))
  }

  const startTimer = () => {
    setHasValue(true);
    let newTime = 0
    setTimeInterval(setInterval(() => {
      newTime += 1
      setTime(newTime)
      // setTime(new Date().getSeconds())
    }, 1000))
  }

  const stopTimer = () => {
    clearInterval(timeInterval);
    setTime(0);
  }

  const checkNextInvalid = () => {
    return (prompt[wordIdx][letterIdx + 1]) ? false : true;
  }

  const checkLastWord = () => {
    return (wordIdx === prompt.length - 1) ? true : false;
  }

  const printStatus = () => {
    console.log('word: ', prompt[wordIdx], ' letter: ', prompt[wordIdx][letterIdx]);
    console.log('word idx: ', wordIdx, ' letter idx: ', letterIdx);
    console.log('last word idx: ', prompt.length - 1, ' last letter idx: ', prompt[wordIdx].length - 1)
    console.log('Errors : ', errors);
    console.log('')
    console.log('\n')
  }

  const resetClasses = () => {
    [...wordNodes].forEach(word => {
      word.childNodes.forEach(letter => {
        letter.classList.remove(classes.incorrectLetter)
        letter.classList.remove(classes.correctLetter)
        letter.classList.remove(classes.active)
      })
    })
  }

  const generatePrompt = async (settings) => {
    const generatedWords = faker.random.words(props.settings.wordLimit).toLowerCase();
    const wordsArr = generatedWords.split(' ');
    const letterArr = generatedWords.split('')
    resetClasses();
    setErrors(0)
    setWordIdx(0);
    setLetterIdx(0);
    setLetterCount(letterArr.length)
    setPrompt(wordsArr);
  }

  const checkInput = (e) => {

    if (e.target.value === prompt[wordIdx][letterIdx]) {
      wordNodes[wordIdx].childNodes[letterIdx].classList.add(isError ? classes.incorrectLetter : classes.correctLetter)
      return true
    }
    return false;
  }

  const moveWord = () => {
    setIsError(false);
    wordNodes[wordIdx].childNodes[letterIdx].classList.remove(classes.active)

    if (checkLastWord()) {
      // console.log('Test Complete!')
      stopTimer()
      completeTest()
    } else {
      setWordIdx(wordIdx + 1);
      setLetterIdx(0);
      setIsLastLetter(false)
    }
  }

  const moveLetter = () => {
    setIsError(false)
    setLetterIdx(letterIdx + 1);
    wordNodes[wordIdx].childNodes[letterIdx].classList.remove(classes.active)

  }

  const handleInput = (e) => {

    checkStarted();
    if (isLastLetter) {
      if (e.target.value === ' ') {

        moveWord();
      } else {
        setIsError(true);
        setErrors(errors + 1);
      }

    } else if (checkInput(e)) {
      if (checkNextInvalid()) {
        setIsLastLetter(true);
      } else {

        moveLetter();
      }
    } else {
      setIsError(true);
      setErrors(errors + 1);
    }
  }

  const checkStarted = () => {
    !hasValue && startTimer();
  }

  const completeTest = () => {
    const data = {
      id: props.id,
      speed: Math.floor((prompt.length) / (time / 60)),
      errors: errors,
      score: 1000,
      letters: letterCount,
      time: (time / 60).toFixed(2)
    };
    sendData(data);
    generatePrompt();
  }

  const handleClick = () => {
    // console.log('unblur!');
    setBlur(false);
    const inputField = document.getElementsByClassName(classes.input);
    inputField[0].focus()
  }

  const handleClickAway = () => {
    setBlur(true)
  }








  //COMPONENT USE EFFECTS
  useEffect(() => {
    setIsLoaded(true)
    generatePrompt(settings);
    // console.log(classes.word)
    // wordNodes = [...document.getElementsByClassName(classes.word)];
    // console.log(wordNodes)
  }, [])

  useEffect(() => {

    if (prompt[wordIdx]) {
      const wordNodes = document.getElementsByClassName(classes.word);
      wordNodes[wordIdx].childNodes[letterIdx].classList.add(classes.active)
    }
    // checkLastLetter()
  }, [letterIdx])







  //RENDER
  return (
    <ClickAwayListener onClickAway={handleClickAway}>

      <div className={classes.root}>
        <div id='typingField_wrapper' className={classes.typingField_wrapper} onClick={handleClick}>
          <Typography variant='h5' color='primary' className={(blur) ? classes.clickHere : classes.hide}>Click to begin</Typography>
          <div className={classes.indicator_container}>
            <Typography color='primary' className={classes.timer}>{time} </Typography>
            <Typography color='primary' className={classes.wordCount}>{wordIdx + 1}/{settings.wordLimit}</Typography>
          </div>
          <div className={blur ? classes.blur : classes.prompt}>{
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
        {/* <button onClick={sendData}>send data</button> */}
      </div>
    </ClickAwayListener>
  )
}

export default TypingField
