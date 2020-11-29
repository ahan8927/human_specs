import { fetch } from '../csrf';
// import { connect }

//Store Action Types
export const SET_TYPING = 'api/typing';
export const SET_REACTION = 'api/reaction';
export const REMOVE_STATS = 'human_specs/stats/REMOVE_STATS';

//Store Actions
export const setUserStats = (stats, type) => ({ type: type, payload: stats });


export const loadUserStats = (id) => async dispatch => {
  try {
    const res = await fetch(`api/users/stats/${id}`);

    if (res.ok) {
      dispatch(setUserStats(res.data, SET_TYPING))
      // return res.data.typing;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e)
  }
}

export const updateUserStats = (stats, test) => async dispatch => {
  try {
    const res = await fetch(`${test}`, {
      method: 'POST'
    });
    (res.ok) && dispatch(setUserStats(res.data, test))
  } catch (e) {
    console.error(e)
  }
}
