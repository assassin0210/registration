import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/authSlice";
import { initialReducer } from "./slices/initialSlice";
import { modalsReducer } from "./slices/modalsSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    user: userReducer,
    initial: initialReducer,
    modals: modalsReducer,
  },
});
