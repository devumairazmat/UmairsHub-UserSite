import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
