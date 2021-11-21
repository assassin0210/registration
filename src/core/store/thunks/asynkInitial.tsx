import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../api/baseFetch";

export const initialStart = createAsyncThunk("initial", async function (data: any, { dispatch }) {
  const res = await instance.get(
    `/movie/upcoming?api_key=${process.env.REACT_APP_BEARE_KEY}&language=ru-RU&page=${data}`,
  );
  return res.data;
});
