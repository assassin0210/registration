import { createSlice } from "@reduxjs/toolkit";

export interface IUserStoreType {
  email: null | string;
  token: null | string;
  id: null | string;
}

const initialState: IUserStoreType = {
  email: null,
  token: null,
  id: null,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = contentSlice.actions;
export const contentReducer = contentSlice.reducer;
