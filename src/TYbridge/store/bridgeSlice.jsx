import { createSlice } from "@reduxjs/toolkit";

const bridgeSlice = createSlice({
  name: 'bridge',
  initialState: {

  },
  reducers: {
    setData: (state,action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
  },
});

export const { setData } = bridgeSlice.actions;
export default bridgeSlice.reducer;