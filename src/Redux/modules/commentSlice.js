import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";

const initialState = {
  comment: [],
  isLoading: true,
  error: null,
};

// const config = {
//   headers: { Authorization: `Bearer ${getCookie("is_login")}` },
// };

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/comment/${payload.postId}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data.commentList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    const [comment, postId] = payload
    console.log(payload);
    try {
      const data = await instance.post(`/api/comment/${postId}`, comment)
      console.log(data.data)
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
  name: "comment",
  initialState,
  reducer: {},
  extraReducers: {
    [__getComment.pending]: (state) => {},
    [__getComment.fulfilled]: (state, action) => {
      state.comment = action.payload
    },
    [__getComment.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },


    [__addComment.pending]: (state) => {console.log('로티보여주기')},
    [__addComment.fulfilled]: (state, action) => {
      state.comment = action.payload
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
