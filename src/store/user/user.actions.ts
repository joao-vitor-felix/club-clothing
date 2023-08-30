import User from "../../types/user.types";
import { USER_ACTION_TYPES } from "./user.types";

type LoginUser = {
  type: USER_ACTION_TYPES.SET_CURRENT_USER;
  payload: User;
};

type LogoutUser = {
  type: USER_ACTION_TYPES.LOGOUT_CURRENT_USER;
};

export type UserActionTypes = LoginUser | LogoutUser;

export const loginUser = (user: User): LoginUser => {
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
  };
};

export const logoutUser = (): LogoutUser => {
  return {
    type: USER_ACTION_TYPES.LOGOUT_CURRENT_USER
  };
};
