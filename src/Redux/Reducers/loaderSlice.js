import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialState,
  reducers: {
    showLoaderReducer: (state, action) => {
      state.loader = action.payload;
    },
    hideLoaderReducer: (state, action) => {
      state.loader = action.payload;
    },
  },
});

export const { showLoaderReducer, hideLoaderReducer } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;
