import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { getCookie } from "../../shared/Cookie";
import { instance } from "../../core/api/axios";

const initialState = {
  posts: [],
  post: {},
  mypageUserInfo: {},
  mypagePostList: [],
  isLoading: true,
  error: null,
  hospitalCheck: false,
};

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/post/${payload}`);
      // console.log(data)

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
      // console.log(data);
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
      console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "deletePost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await instance.delete(`/api/post/${payload}`);
      thunkAPI.dispatch(__getPosts());
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editPost = createAsyncThunk(
  "editPost",
  async (payload, thunkAPI) => {
    console.log(payload);
    const [newPost, postId] = payload;
    try {
      const data = await instance.put(`/api/post/${postId}`, newPost);
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
      thunkAPI.dispatch(__getPosts());
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
  reducer: {
    cleanupDetail: (state) => {
      state.post = {};
    },
  },
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
      console.log(action.payload)
      state.mypagePostList.push(action.payload);
      state.mypageUserInfo.postingNum += 1
    },
    [__addPost.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__deletePost.pending]: (state) => {},
    [__deletePost.fulfilled]: (state, action) => {
      state.mypagePostList = state.mypagePostList.filter(
        (post) => post.postId !== action.payload
      );
      state.mypageUserInfo.postingNum -= 1
    },
    [__deletePost.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__editPost.pending]: (state) => {},
    [__editPost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [__editPost.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },


    [__getMypage.pending]: (state) => {},
    [__getMypage.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.mypageUserInfo = action.payload
      state.mypagePostList = action.payload.postList;
    },
    [__getMypage.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

  },
});

export const { cleanupDetail } = postSlice.actions;
export default postSlice.reducer;
