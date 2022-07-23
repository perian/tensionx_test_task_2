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
    nextPage: (state) => {
      state.page++;
    },
    previousPage: (state) => {
      state.page--;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    }
  },
});

export const { sortData, nextPage, previousPage, setSize } = dataSlice.actions;
export default dataSlice.reducer;
