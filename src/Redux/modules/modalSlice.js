// src/redux/modules/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

// action creator, action function, reducer가 하나로 합쳐짐
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isModalHandler: (state, action) => {
      state.modal = action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {isModalHandler} = modalSlice.actions;

// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default modalSlice.reducer;