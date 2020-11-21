import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from './store/actions/session';

//Component Imports
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import { Divider } from '@material-ui/core';

const App = (props) => {
  return (
    <>
      <Header />
      <Divider />
      <Body />
      <Divider />
      <Footer />
    </>
  );
}


const AppContainer = (props) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  console.log(isLoaded)
  return (
    <>
      {/* <h1>{isLoaded}</h1> */}
      <App />
    </>
  )
}

export default AppContainer;
