import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.mutation({
      query: () => ({
        url: USERS_URL,
        method: 'POST',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useTestMutation } = usersApiSlice;
