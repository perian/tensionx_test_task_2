import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedData: {},
  checkedStudents: {},
  page: 1,
  size: 10,
};

export const dataSlice = createSlice({
  name: 'scoreData',
  initialState,
  reducers: {
    sortData: (state, action) => {
      state.sortedData = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    }
  },
});

export const { sortData, setSize, setPage } = dataSlice.actions;
export default dataSlice.reducer;
