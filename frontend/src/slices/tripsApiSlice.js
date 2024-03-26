import { TRIPS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTripsMine: builder.query({
      query: () => ({
        url: `${TRIPS_URL}/mine`,
      }),
    }),
    addTrip: builder.mutation({
      query: (data) => ({
        url: `${TRIPS_URL}/add`,
        method: 'POST',
        body: { ...data },
      }),
    }),
    deleteTrip: builder.mutation({
      query: (tripId) => ({
        url: `${TRIPS_URL}/delete`,
        method: 'DELETE',
        body: { tripId },
      }),
    }),
  }),
});

export const {
  useGetTripsMineQuery,
  useAddTripMutation,
  useDeleteTripMutation,
} = usersApiSlice;
