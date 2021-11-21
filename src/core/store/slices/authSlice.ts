import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, loginWithGoogle } from "../thunks/authThunk";

export interface IGooglePropsType {}

export interface IUserStoreType {
  email: null | string;
  token: null | string;
  id: null | string;
  isLoader: boolean;
  isError: boolean;
  name: string;
  photoURL: string;
  isAuth: boolean;
}

const initialState: IUserStoreType = {
  email: null,
  token: null,
  id: null,
  isLoader: false,
  isError: false,
  name: "New Visitor",
  photoURL: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setExit(state) {
      localStorage.clear();
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state, { payload }) => {
      state.isLoader = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(loginThunk.rejected, (state, { payload, error }) => {
      state.isError = true;
      state.isLoader = false;

      console.log(error);
    });
    builder.addCase(loginWithGoogle.pending, (state, { payload }) => {
      state.isLoader = true;
    });
    builder.addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      //@ts-ignore
      state.token = payload.accessToken;
      state.id = payload.uid;
      if (payload.displayName) {
        state.name = payload.displayName;
        localStorage.setItem("name", payload.displayName);
      }
      if (payload.photoURL) {
        state.photoURL = payload.photoURL;
        localStorage.setItem("img", payload.photoURL);
      }
      state.isLoader = false;
      //@ts-ignore
      localStorage.setItem("token", payload.accessToken);
    });
    builder.addCase(loginWithGoogle.rejected, (state, { payload }) => {
      console.log(payload);
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export const { setExit } = authSlice.actions;
export const userReducer = authSlice.reducer;
