import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { TCell } from "../types/Cell.t";
import { CELLS } from "../data/CELLS";

// Define a type for the slice state
interface CellsState {
  items: TCell[];
}

// Define the initial state using that type
const initialState: CellsState = {
  items: CELLS,
} as CellsState;

const cellsSlice = createSlice({
  name: "cells",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateCell: (state, action: PayloadAction<TCell>) => {
      const { key, status, row, index } = action.payload;
      const updatedItems = [...state.items];
      updatedItems[index] = {
        index: index,
        key: key,
        status: status,
        row: row,
      };
      return {
        ...state,
        items: updatedItems,
      };
    },
  },
});

const cellsReducer = cellsSlice.reducer;
const { updateCell } = cellsSlice.actions;
export type { RootState };
export { cellsSlice, updateCell, cellsReducer };
