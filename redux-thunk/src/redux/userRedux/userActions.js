import {
  createActionWithoutPayload,
  createActionWithPayload,
} from "../../common/createAction";
import { USER_ACTION_TYPES } from "./userActionTypes";
import axios from "axios";

export const fetchUserRequest = () =>
  createActionWithoutPayload(USER_ACTION_TYPES.REQUEST_USER);

export const fetchUserSuccess = (data) =>
  createActionWithPayload(USER_ACTION_TYPES.ADD_USER, data);

export const fetchUserError = (error) =>
  createActionWithPayload(USER_ACTION_TYPES.ERROR_USER, error);

export const fetchUserData = () => {
  debugger;
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      axios.get('https://dummyjson.com/todos').then((response) => {
        const data = response.data;
        dispatch(fetchUserSuccess(data?.todos));
      });
    } catch (error) {
      dispatch(fetchUserError(error.message));
    }
  };
};
