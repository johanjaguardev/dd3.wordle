import { createSlice } from "@reduxjs/toolkit";
import { TThemeisLight } from "../types/Theme.t";

const initialState: TThemeisLight = true;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
