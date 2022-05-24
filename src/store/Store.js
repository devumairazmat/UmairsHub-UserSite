import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/features/counterSlice";
import isUserSlice from "../store/features/isUserSlice";
import cartSlice from "../store/features/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    isUser: isUserSlice,
    cart: cartSlice,
  },
});
export default store;
