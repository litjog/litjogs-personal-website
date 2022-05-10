import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsDarkMode(state, actions) {
      state.isDarkMode = actions.payload;
    },
  },
});

export const { setIsDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
