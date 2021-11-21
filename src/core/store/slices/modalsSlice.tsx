import { createSlice } from "@reduxjs/toolkit";

export interface IUserStoreType {
  loginModal: boolean;
  registrationModal: boolean;
}

const initialState: IUserStoreType = {
  loginModal: false,
  registrationModal: false,
};

const modalsSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setLoginModal(state, { payload }) {
      state.loginModal = payload;
    },
    setRegistrationModal(state, { payload }) {
      state.registrationModal = payload;
    },
  },
});

export const { setLoginModal, setRegistrationModal } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
