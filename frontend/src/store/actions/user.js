import { databaseURL } from '../../config';
import { SET_TOKEN } from './auth';

// Localstorage Keys
export const USER_KEY = 'keybrrr/localstorage/user';

// Store Action Types
// export const SET_USER = 'keybrrr/user/SET_USER';
// export const REMOVE_USER = 'keybrrr/user/SET_USER';

// Store Actions 
// export const setUser = (user) => ({ type: SET_USER })
// export const removeUser = (user) => ({ type: REMOVE_USER })

export const loadUser = () => (async (dispatch) => {
  const user = await JSON.parse(window.localStorage.getItem(USER_KEY));
  if (user) {
    dispatch(setUser(user));
  }
})
