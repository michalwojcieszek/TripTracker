import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('places')
  ? JSON.parse(localStorage.getItem('places'))
  : [];

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    addPlace: (state, action) => {
      if (state.length === 0) {
        state = [action.payload];
      } else {
        state = [...state, action.payload];
      }
      return state;
      //   localStorage.setItem('places', JSON.stringify(action.payload));
    },
    // removePlace: (state, action) => {
    //   state = null;
    //   localStorage.getItem('places').clear();
    // },
  },
});

export const { addPlace } = placesSlice.actions;

export default placesSlice.reducer;
