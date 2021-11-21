import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { InputsSingUp } from "../../../ui/Form";
import firebase from "firebase/compat";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async function ({ Email, Pass, Name, Policy, DoublePass }: InputsSingUp, { dispatch }) {
    const auth = getAuth();

    return await signInWithEmailAndPassword(auth, Email, Pass);
  },
);

export const loginWithGoogle = createAsyncThunk("auth/google", async function () {
  const auth = getAuth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const { user } = await signInWithPopup(auth, provider);

  return user;
});
