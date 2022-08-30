import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategorySelect: (state, action) => {
      state.value = action;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = filterSlice.actions;

export default filterSlice.reducer;
