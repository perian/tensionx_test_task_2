import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedData: {},
};

export const dataSlice = createSlice({
  name: 'scoreData',
  initialState,
  reducers: {
    sortData: (state, action) => {
      state.sortedData = action.payload;
    }
  },
});

export const sortData = dataSlice.actions;
export default dataSlice.reducer;
