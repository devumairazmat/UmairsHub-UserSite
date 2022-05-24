import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload) {
          item.qty++;
          item.finalPrice += item.price;
          return item;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload) {
          item.qty--;
          item.finalPrice -= item.price;
          return item;
        }
        return item;
      });
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
