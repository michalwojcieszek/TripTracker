import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
// const initialState = localStorage.getItem('places')
//   ? JSON.parse(localStorage.getItem('places'))
//   : [];

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state = action.payload;
      return state;
    },
    clearAllPlaces: (state, action) => {
      state = [];
      return state;
    },
  },
});

export const { setPlaces, removePlace, clearAllPlaces } = placesSlice.actions;

export default placesSlice.reducer;
