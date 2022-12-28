import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { getCookie } from "../../shared/Cookie";
import { instance } from "../../core/api/axios";

const initialState = {
  posts: [],
  post: {},
  mypageUserInfo: {},
  mypagePostList: {},
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
      // thunkAPI.dispatch(__getPosts());
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
      await instance.post(`/api/post/${payload}`);
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
      const data = await instance.post(`/api/post/${postId}`, newPost);
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

export const __addMypage = createAsyncThunk(
  "addMypage",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/mypage");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


// 마이페이지 겟요청 화면에 뿌려주기
// CRUD잘먹히는지 ㅇㅋㅇㅋ
// 댓글 데이터 ㅋㅋㅋ 
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
      // 앞쪽에 리스트를 넣는다. push도 안되던데 결과값을 출력해서 확인해보고 
      // unshift ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 빨리하고 폼데이터 카크크카캌카
      // 
      state.mypagePostList.unshift(action.payload);
    },
    [__addPost.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__deletePost.pending]: (state) => {},
    [__deletePost.fulfilled]: (state, action) => {
      state.mypagePostList = state.mypagePostList.filter(
        (post) => post.postId !== action.payload
      );
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
      // 게시물추가했을 때 리스트가 업데이트 됐을때 아래 만 렌더링 되게 
      // 유저정보따로 리스트따로 ㅇㅋㅇㅋㅋㅇㅋㅇㅋ 
      state.mypageUserInfo = action.payload;
      state.mypagePostList = action.payload.postList;
    },
    [__getMypage.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },

    [__addMypage.pending]: (state) => {},
    [__addMypage.fulfilled]: (state, action) => {
      // 게시물추가했을 때 리스트가 업데이트 됐을때 아래 만 렌더링 되게 
      // 유저정보따로 리스트따로 ㅇㅋㅇㅋㅋㅇㅋㅇㅋ 
      state.mypageUserInfo = action.payload;
      state.mypagePostList = action.payload.postList;
    },
    [__addMypage.rejected]: (state, action) => {
      console.log(action.payload.response.data.errorMessage);
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
