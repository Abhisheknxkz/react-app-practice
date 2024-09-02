// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
  name: 'users',
  initialState: {
    usersData: [],
  },
  reducers: {
    userDataAction: (state, action) => {
      state.usersData = action.payload;
    },
  },
});

export const { userDataAction } = apiSlice.actions;

export default apiSlice.reducer;
