import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('current')
  ? JSON.parse(localStorage.getItem('current'))
  : null;

const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state = action.payload;
      return state;
      //   localStorage.setItem('current', JSON.stringify(action.payload));
    },
    clearCurrent: (state, action) => {
      state = null;
      return state;
      //   localStorage.getItem('current').clear();
    },
  },
});

export const { setCurrent, clearCurrent } = currentSlice.actions;

export default currentSlice.reducer;
