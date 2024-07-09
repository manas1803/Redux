import { USER_ACTION_TYPES } from "./userActionTypes";

const INITIAL_STATE = {
  user: [],
  error: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  debugger
  switch (type) {
    case USER_ACTION_TYPES.REQUEST_USER:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.ADD_USER:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case USER_ACTION_TYPES.ERROR_USER:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
