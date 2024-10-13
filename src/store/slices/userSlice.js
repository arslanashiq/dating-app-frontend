import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUer: (state) => {
      return { ...state, isAuthenticated: true };
    },
    logOutUser: (state) => {
      return { ...state, isAuthenticated: false };
    },
  },
});

export default userSlice.reducer;

export const { logInUer, logOutUser } = userSlice.actions;
