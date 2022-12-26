import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

const initialState = {
  comment: [],
  isLoading: true,
  error: null,
  hospitalCheck: false,
};

// const config = {
//   headers: { Authorization: `Bearer ${getCookie("is_login")}` },
// };

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.get("/api/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/post", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/post", payload);
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
    [__getComment.pending]: (state) => {},
    [__getComment.fulfilled]: (state, action) => {
      state.posts = action.payload.postFeed;
    },
    [__getComment.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__addComment.pending]: (state) => {},
    [__addComment.fulfilled]: (state, action) => {
      window.location.href = "/";
    },
    [__addComment.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__delComment.pending]: (state) => {},
    [__delComment.fulfilled]: (state, action) => {
      window.location.href = "/";
    },
    [__delComment.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
