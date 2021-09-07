import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };
export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      console.log("in");
      state.isAuth = false;
    },
  },
});

export const authAction = AuthSlice.actions;

export default AuthSlice;
