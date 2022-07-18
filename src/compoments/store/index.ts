import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/api';
import dataSlice from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
