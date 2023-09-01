import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../../types/user.types";

export type UserReducer = {
  currentUser: User | null;
};

const INITIAL_STATE: UserReducer = {
  currentUser: null
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    logoutUser: state => {
      state.currentUser = null;
    }
  }
});

export const userReducer = userSlice.reducer;

export const { loginUser, logoutUser } = userSlice.actions;
