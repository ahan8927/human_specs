import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import Typing from './Body/Typing/TypingRoot';
import Profile from './Body/Profile';
import HighScores from './Body/HighScores';
import Reaction from './Body/Reaction/Reaction';

const PrivateRoute = props => {
  const isLoggedIn = useSelector(state => state.session ? true : false);
  const { component: Component, path, exact } = props;
  if (!isLoggedIn) {
    return <Redirect to='/login' />
  }
  return <Route exact={exact} path={path} render={(props) => <Component {...props} />} />
}

const Body = (props) => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* <h1>Body</h1> */}
      <div>
        <Switch>
          <Route exact path='/' render={props => <Typing {...props} />} />
          <Route exact path='/reaction' render={props => <Reaction {...props} />} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <Route exact path='/ranks' render={props => <HighScores {...props} />} />
          <Route path='*' render={props => <Typing {...props} />} />
        </Switch>
      </div>
    </div>
  )
}

export default Body