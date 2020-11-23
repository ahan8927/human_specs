// import { backendURL } from '../../config';
import { fetch } from '../csrf';

//Store Action Types
export const SET_USER = 'keybrrr/session/SET_USER';
export const REMOVE_USER = 'keybrrr/session/REMOVE_USER';

//Store Actions
export const removeUser = (user) => ({ type: REMOVE_USER });
export const setUser = (user) => ({ type: SET_USER, payload: user });

//Login Thunk
export const loginUser = (user) => async (dispatch) => {
  const { credential, password } = user;
  try {
    const res = await fetch(`/api/session`, {
      method: 'POST',
      body: JSON.stringify({
        credential: credential,
        password: password
      }),
    });

    if (res.ok) {
      dispatch(setUser(res.data));
      return res;
    }
  } catch (e) {
    console.error(e)
  }
}

export const signupUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  dispatch(setUser(response.data));

  return response;
};

export const restoreUser = () => async dispatch => {
  try {
    const res = await fetch('/api/session');

    if (res.ok) {
      dispatch(setUser(res.data));
      return res;
    }
  }
  catch (e) {
    console.error(e)
  }
};

export const logoutUser = () => async dispatch => {
  let res
  console.log('attempting logout')
  try {
    res = await fetch('/api/session', {
      method: 'DELETE',
    });
    (res.ok) && dispatch(removeUser());
    console.log('logged out!')
  } catch (e) {
    console.error(e)
  }
  // return res;
}
