import { SET_TYPING, REMOVE_STATS } from '../actions/stats';

const initialState = { user: null };
const statsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_TYPING:
      newState = Object.assign({}, state);
      newState.user = { ...action.payload };
      return newState;
    case REMOVE_STATS:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
}

export default statsReducer
