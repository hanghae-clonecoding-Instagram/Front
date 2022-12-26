import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import post from "../modules/postSlice";
// import comment from "../modules/commentSlice";
=======
import modalReducer from "../modules/modalSlice";
>>>>>>> f8bdfff5c3a28a93d55944f51ac2f09554d03fec

const store = configureStore({
<<<<<<< HEAD
  reducer: { post: post },
=======
  reducer: { 
    modal : modalReducer,

  },
>>>>>>> f8bdfff5c3a28a93d55944f51ac2f09554d03fec
});

export default store;
