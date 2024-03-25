import { configureStore } from '@reduxjs/toolkit';
import currentSliceReducer from './slices/currentSlice';
import placesSliceReducer from './slices/placesSlice';
import authSliceReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    current: currentSliceReducer,
    places: placesSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
