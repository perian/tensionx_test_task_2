import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Scores from '../types/consts';

export interface queryParams {
  data: Scores
  totalCount: number
  totalPages: number
  page: number
  size: number
  search: string
  sortBy: 'name' | 'class' | 'score' | 'speed'
  sortDir: -1 | 0 | 1
}

export const apiSlice = createApi({
  reducerPath: 'fetchScoreData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-task-j.herokuapp.com/data',
  }),
  endpoints(builder) {
    return {
      fetchData: builder.query<queryParams, { page: number, size: number }>({
        query({ page = 1, size = 10 }) {

          return `?page=${page}&size=${size}`
        },
      }),
    }
  }
});

export const { useFetchDataQuery } = apiSlice


/**
 * export const apiSlice = createApi({
  reducerPath: 'fetchScoreData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test-task-j.herokuapp.com/data',
  }),
  endpoints: (build) => ({
    fetchData: build.query<queryParams, { page: number, size: number }>({
      query: ({ page = 1, size = 10 }) => ({
        url: `?page=${page}&size=${size}`
      }),
      transformResponse: (response: { data: queryParams }, meta, arg) => response.data
    }),
  }),
});
 */
