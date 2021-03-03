import React, { useState } from 'react';
import Preview from './Preview';
import Speed from './Speed';
import getText from './getText';

const initialState = {
  text: getText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

const Type = () => {

  const [state, setState] = useState(initialState)

  const onRestart = () => {
    setState(initialState)
  }

  const onFinish = (userInput) => {
    if (userInput === state.text) {
      clearInterval(interval);
      setState({
        finished: true
      })
    }
  }

  const countCorrectSymbols = (userInput) => {
    const text = state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
  }

  const setTimer = () => {
    if (!state.started) {
      setState({ started: true });
      interval = setInterval(() => {
        setState(prevProps => {
          return { sec: prevProps.sec + 1 }
        })
      }, 1000)
    }
  }

  const onUserInputChange = (e) => {
    const v = e.target.value;
    setTimer();
    onFinish(v)
    setState({
      userInput: v,
      symbols: countCorrectSymbols(v)
    })
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Preview text={state.text} userInput={state.userInput} />
          <textarea
            value={state.userInput}
            onChange={onUserInputChange}
            className="form-control mb-3"
            placeholder="Start typing..."
            readOnly={state.finished}
          ></textarea>
          <Speed sec={state.sec} symbols={state.symbols} />
          <div className="text-right">
            <button className="btn btn-light" onClick={() => onRestart()}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Type;
