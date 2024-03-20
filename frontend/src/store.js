import { configureStore } from '@reduxjs/toolkit';
import currentSliceReducer from './slices/currentSlice';
import placesSliceReducer from './slices/placesSlice';

const store = configureStore({
  reducer: {
    current: currentSliceReducer,
    places: placesSliceReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
  //   devTools: true,
});

export default store;
