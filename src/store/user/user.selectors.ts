import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserReducer } from "./user.reducer";

export const selectUserReducer = (state: RootState): UserReducer => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  user => user.currentUser
);
