import {configureStore,} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlice";

export type RootState = ReturnType<typeof store.getState>;


export const store = configureStore({
    reducer: {
        user: userReducer
    }

})