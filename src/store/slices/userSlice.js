import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, { payload = {} } = {}) => {
      return {
        ...state,
        isAuthenticated: true,
        userData: { ...state.user, ...payload },
      };
    },
    logOutUser: (state) => {
      return { ...state, isAuthenticated: false, userData: {} };
    },
  },
});

export default userSlice.reducer;

export const { logInUser, logOutUser } = userSlice.actions;
