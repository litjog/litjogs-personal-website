import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsDarkMode(state, actions) {
      state.isDarkMode = actions.payload;
    },
  },
});

export const { toggleDarkMode, setIsDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
