import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";
import modalReducer from "../modules/modalSlice";

const store = configureStore({
  reducer: { post: post, modal: modalReducer },
});

export default store;
