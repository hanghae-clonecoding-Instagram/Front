import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../modules/modalSlice";


const store = configureStore({
  reducer: { 
    modal : modalReducer,

  },
});

export default store;
