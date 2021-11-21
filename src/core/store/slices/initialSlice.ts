import { createSlice } from "@reduxjs/toolkit";
import { initialStart } from "../thunks/asynkInitial";

export interface IUpcoming {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
  }[];
}
export interface IUserStoreType {
  isAuth: boolean;
  isLoader: boolean;
  upcoming: IUpcoming;
}

const initialState: IUserStoreType = {
  isAuth: false,
  isLoader: true,
  upcoming: {
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
  },
};

const initialSlice = createSlice({
  name: "init",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initialStart.fulfilled, (state, { payload }) => {
      state.isLoader = false;
      state.upcoming = payload;
    });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = initialSlice.actions;
export const initialReducer = initialSlice.reducer;
