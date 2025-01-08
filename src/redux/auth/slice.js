import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "./operations.js";

const userSlice = createSlice({
  name: "users",
  initialState: {
    name: null,
    comment: null,
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.token = action.payload.token;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      }),
});
export const authReducer = userSlice.reducer;
