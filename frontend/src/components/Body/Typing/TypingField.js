import React, { useEffect, useState } from 'react';


import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  active: {

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
    return words
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
const [currentIIdx, setCurrentIIdx] = useState(0);
const [currentJIdx, setCurrentJIdx] = useState(0);

//used after a keypress to check input.
const checkLetter = () => {
  keyPressed === 'backspace' && moveBackKey();

  keyPressed === prompt.currentKey ? prompt.currentKey.addclass('correct') : prompt.currentKey.addclass('incorrect')
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
