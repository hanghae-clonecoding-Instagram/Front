import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { getCookie } from "../../shared/Cookie";
import { instance } from "../../core/api/axios";

const initialState = {
  posts: [],
  post: {},
  mypage: {},
  isLoading: true,
  error: null,
  hospitalCheck: false,
};

// const config = {
//   headers: { Authorization: `Bearer ${getCookie("is_login")}` },
// };

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/post/${payload}`);
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPost = createAsyncThunk(
  "addPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/post", payload);
      thunkAPI.dispatch(__getPosts());
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postLike = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post(`/api/like/post/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getMypage = createAsyncThunk(
  "getMypage",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/mypage");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: {
    [__getPost.pending]: (state) => {},
    [__getPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__getPosts.pending]: (state) => {},
    [__getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.postFeed;
    },
    [__getPosts.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__addPost.pending]: (state) => {},
    [__addPost.fulfilled]: (state, action) => {
      window.location.href = "/";
    },
    [__addPost.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__getMypage.pending]: (state) => {},
    [__getMypage.fulfilled]: (state, action) => {
      state.mypage = action.payload;
    },
    [__getMypage.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
