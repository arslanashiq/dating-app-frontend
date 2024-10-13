import { createSlice } from "@reduxjs/toolkit";

const getTheme = () => {
  const themeValue = localStorage.getItem("mui-mode");
  if (themeValue === "dark") return true;
  return false;
};
const initialState = {
  sidebarStatus: true,
  isDarkTheme: getTheme(),
  isLoading: false,
};

const commonSlcie = createSlice({
  name: "common",
  initialState,
  reducers: {
    openSidebar: (state) => {
      return { ...state, sidebarStatus: true };
    },
    closeSidebar: (state) => {
      return { ...state, sidebarStatus: false };
    },
    setDarkTheme: (state) => {
      return { ...state, isDarkTheme: true };
    },

    setLightTheme: (state) => {
      return { ...state, isDarkTheme: false };
    },

    startLoading: (state) => {
      return { ...state, isLoading: true };
    },

    stopLoading: (state) => {
      return { ...state, isLoading: false };
    },
  },
});

export default commonSlcie.reducer;

export const {
  openSidebar,
  closeSidebar,
  setDarkTheme,
  setLightTheme,
  startLoading,
  stopLoading,
} = commonSlcie.actions;
