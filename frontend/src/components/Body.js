import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import Home from './Body/Home';
import Profile from './Body/Profile';
import Login from './Body/Login';
import Signup from './Body/Signup';
import HighScores from './Body/HighScores';

// import LoginFormModal from './Body/LoginFormModal';

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
      <h1>Body</h1>
      <div style={{}}>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <Route exact path='/login' render={props => <Login {...props} />} />
          <Route exact path='/signup' render={props => <Signup {...props} />} />
          <Route exact path='/ranks' render={props => <HighScores {...props} />} />
          <Route path='*' render={props => <Home {...props} />} />
        </Switch>
      </div>
    </div>
  )
}

export default Body
