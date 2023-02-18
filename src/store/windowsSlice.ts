import { createSlice } from "@reduxjs/toolkit";

import { TWindow } from "../types/Window.t";

const initialState: TWindow = {
  board: true,
  results: false,
  instructions: false,
};

const windowsSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    toggleResults: (state) => {
      console.log(state);
      const newWindowState: TWindow = {
        ...state,
        board: false,
        results: true,
        instructions: false,
      };
      return newWindowState;
    },
    toggleBoard: (state) => {
      console.log(state);
      const newWindowState: TWindow = {
        ...state,
        board: true,
        results: false,
        instructions: false,
      };
      return newWindowState;
    },
    toggleInstructions: (state) => {
      console.log(state);
      const newWindowState: TWindow = {
        ...state,
        board: false,
        results: false,
        instructions: true,
      };
      return newWindowState;
    },
  },
});

export const { toggleResults, toggleBoard, toggleInstructions } =
  windowsSlice.actions;
export const windowReducer = windowsSlice.reducer;
