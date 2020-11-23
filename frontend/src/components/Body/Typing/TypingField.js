import React, { useEffect, useState } from 'react';


import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: 'pink',
  },
  correct: {
    color: 'blue',
  },
  incorrect: {
    color: 'red',
  },
  error: {
    borderBottom: '2px solid red',
  }
}));

const word = (letters) => {
  return
}

const letter = (char) => {

}

const TypingField = () => {
  const [prompt, setPrompt] = useState([]);
  const faker = require('faker')

  const generatePrompt = (settings) => {
    const words = faker.random.words(10).toLowerCase().split(' ');
    return words;
  }

  useEffect(() => {
    setPrompt([...generatePrompt()])
  }, []);
  console.log(prompt)

  return (
    <>
      <h1>{typeof (prompt)}</h1>
      <span>{prompt.map((word) => (
        <p key={word}>{word}</p>
      ))}</span>
    </>
  )
}

export default TypingField

/*
const [currentKey, setCurrentKey] = useState(prompt);
const [activeWordIDX, setActiveWordIDX] = useState(0);
const [activeLetterIDX, setActiveLetterIDX] = useState(0);

useEffect(() => {
  setCurrentKey(prompt[activeWordIDX][activeLetterIDX])
}, [activeLetterIDX])

const moveNextKey = () => {
  (activeLetterIDX === (prompt[activeWordIDX].length - 1)) ? moveNextWord() : setactiveLetterIDX(activeLetterIDX + 1);
}

const moveNextWord = () => {
  setCurrentJIIDX(0)
  setActiveWordIDX(activeWordIDX + 1);
}

const moveBackKey = () => {
  (activeLetterIDX === 0) ? moveBackWord() : setActiveLetterIDX(activeLetterIDX - 1);
}

const moveBackWord = () => {
  activeWordIDX !== 0 && (
    setActiveWordIDX(activeWordIDX - 1)
    setActiveLetterIDX(prompt[activeWordIDX].length - 1)
  )
}

//used after a keypress to check input.
onChange={checkLetter}
const checkLetter = (e) => {
  e.target.value === 'backspace' && moveBackKey();

  e.target.value === currentKey ? currentKey.addclass('correct') : currentKey.addclass('incorrect')
  moveNextKey();
}

//used at the end of a word before moving on.
checkWord = () => {
  const hasError = something
  hasError && prompt.activeWord.addclass('error');
  moveNextWord();
}

if reached end of word, run checkWord.
*/
