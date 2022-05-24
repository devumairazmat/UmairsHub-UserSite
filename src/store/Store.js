import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/features/counterSlice";
import isUserSlice from "../store/features/isUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    isUser: isUserSlice,
  },
});
export default store;
