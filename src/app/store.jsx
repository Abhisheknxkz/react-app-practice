import { configureStore } from '@reduxjs/toolkit';
import userReducer from './apiReducer/apiSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
