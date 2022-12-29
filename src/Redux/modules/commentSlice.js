import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../core/api/axios";
import { __getMypage, __getPosts } from "./postSlice";

const initialState = {
  commentList: [],
  isLoading: true,
  error: null,
};

export const __getComment = createAsyncThunk(
  "getComment",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const data = await instance.get(`/api/comments/${payload}`);
      console.log(data.data.commentList);
      return thunkAPI.fulfillWithValue(data.data.commentList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    const {comment, postId} = payload
    // console.log(comment,postId);
    try {
      const data = await instance.post(`/api/comment/${postId}`,{comment:comment})
      console.log(data.data.commentList)
      thunkAPI.dispatch(__getComment(postId))
      thunkAPI.dispatch(__getMypage())
      thunkAPI.dispatch(__getPosts())
      return thunkAPI.fulfillWithValue(data.data.commentList, postId);
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
      const data = await instance.delete(`/api/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __commentLike = createAsyncThunk(
  "commentLike",
  async (payload, thunkAPI) => {
    console.log(payload); //commentId가 나와야함
    try {
      const data = await instance.post(`/api/like/comment/${payload}`);
      console.log(data)
      // thunkAPI.dispatch(__commentLike(payload))
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
      state.commentList = action.payload
    },
    [__getComment.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__addComment.pending]: (state) => {
    },
    [__addComment.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.commentList = action.payload
    },
    [__addComment.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__delComment.pending]: (state) => {},
    [__delComment.fulfilled]: (state, action) => {
      console.log(state.commentList)
      state.commentList = state.commentList.filter(
        (c) => c.commentId !== action.payload)
    },
    [__delComment.rejected]: (state, action) => {
      alert(action.payload.response.data.errorMessage);
    },
    
    [__commentLike.pending]: (state) => {},
    [__commentLike.fulfilled]: (state, action) => {
      state.commentList = state.commentList
    },
    [__commentLike.rejected]: (state, action) => {
      alert(action.payload.response.data.errorMessage);
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
