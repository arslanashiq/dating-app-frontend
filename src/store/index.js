import { configureStore } from "@reduxjs/toolkit";
// slices
import userSlice from "./slices/userSlice";
import commonSlice from "./slices/commonSlice";

// services
import { serviceMiddlewares, serviceReducers } from "../services";

const store = configureStore({
  reducer: {
    user: userSlice,
    common: commonSlice,
    ...serviceReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceMiddlewares),
});

export default store;
