import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import * as sessionActions from './store/actions/session';

//Component Imports
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const style = {
  maxWidth: '1000px',
  display: 'grid',
  gridAutoFlow: 'row',
  alignItems: 'center',
  minHeight: '96vh',
  padding: '2rem',
  gap: '2rem',
  width: '100%',
  gridTemplateRows: 'auto 1fr auto',
}

const App = (props) => {
  return (
    <div style={style}>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}


const AppContainer = (props) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <h1>{isLoaded}</h1> */}
      <App />
    </div>
  )
}

export default AppContainer;
