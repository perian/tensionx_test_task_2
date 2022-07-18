import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queryParams } from '../types/consts';

export const apiSlice = createApi({
  reducerPath: 'fetchScoreData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-task-j.herokuapp.com/data',
  }),
  endpoints(builder) {
    return {
      fetchData: builder.query<queryParams, { pageNumber: number, itemsPerPage: number }>({
        query({ pageNumber = 1, itemsPerPage = 10 }) {

          return `?page=${pageNumber}&size=${itemsPerPage}`
        },
      }),

    }
  }
});

export const { useFetchDataQuery } = apiSlice
