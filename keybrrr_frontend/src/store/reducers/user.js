import { SET_USER, REMOVE_USER } from '../actions/user';

//User Store
const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      const user = action.user;
      return {
        ...user,
      };
    }

    case REMOVE_USER: {
      const newState = { ...state };
      delete newState.user;
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
