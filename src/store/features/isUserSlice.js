import { createSlice } from "@reduxjs/toolkit";

export const isUserSlice = createSlice({
  name: "isUser",
  initialState: { value: false },
  reducers: {
    setTrue: (state) => {
      state.value = true;
      console.log("Alahmdulillah");
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = isUserSlice.actions;

export default isUserSlice.reducer;
