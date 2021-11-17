import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { contentReducer } from "./slices/contentSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentReducer,
  },
});
