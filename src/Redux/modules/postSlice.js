import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getCookie } from "../../shared/Cookie";

import { instance } from "../../core/api/axios";

const initialState = {
  posts: [],
  isLoading: true,
  error: null,
  hospitalCheck: false,
};

const config = {
  headers: { Authorization: `Bearer ${getCookie("is_login")}` },
};

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.get(`/api/post/category?category=${payload}`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: {
    [__getHospital.pending]: (state) => {
      state.isLoading = true;
    },
    [__getHospital.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(state, action);
      console.log(state.hospitalCheck);
    },
    [__getHospital.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
