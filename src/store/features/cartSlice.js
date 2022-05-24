import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
      console.log(state.value);
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default createSlice.reducer;
