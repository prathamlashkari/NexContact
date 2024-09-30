import { authApi } from "./api/AuthApi";
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/UserApi";
import { userReducer } from "./reducer/UserReducer";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [userReducer.name]: userReducer.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});
