import { BASE_URL } from '../constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Trips'],
  endpoints: (builder) => ({}),
});
