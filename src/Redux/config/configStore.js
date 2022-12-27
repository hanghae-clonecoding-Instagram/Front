import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import modalReducer from "../modules/modalSlice";
import comment from "../modules/commentSlice";

const store = configureStore({
  reducer: {
    post: post,
    modal: modalReducer,
    comment: comment,
  },
});

export default store;
