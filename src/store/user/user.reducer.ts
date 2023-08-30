import User from "../../types/user.types";
import { UserActionTypes } from "./user.actions";
import { USER_ACTION_TYPES } from "./user.types";

type UserReducer = {
  currentUser: User | null;
};

const INITIAL_STATE: UserReducer = {
  currentUser: null
};

export const userReducer = (
  state = INITIAL_STATE,
  action: UserActionTypes
): UserReducer => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case USER_ACTION_TYPES.LOGOUT_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};
