import { $CombinedState, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Cell } from "../types/Cell.t";

const CELLS: Cell[] = [
  { key: "Q", status: "not set", row: 1 },
  { key: "W", status: "not set", row: 1 },
  { key: "E", status: "not set", row: 1 },
  { key: "R", status: "not set", row: 1 },
  { key: "T", status: "not set", row: 1 },
  { key: "Y", status: "not set", row: 1 },
  { key: "U", status: "not set", row: 1 },
  { key: "I", status: "not set", row: 1 },
  { key: "O", status: "not set", row: 1 },
  { key: "P", status: "not set", row: 1 },
  { key: "A", status: "not set", row: 2 },
  { key: "S", status: "not set", row: 2 },
  { key: "D", status: "not set", row: 2 },
  { key: "F", status: "not set", row: 2 },
  { key: "G", status: "not set", row: 2 },
  { key: "H", status: "not set", row: 2 },
  { key: "J", status: "not set", row: 2 },
  { key: "K", status: "not set", row: 2 },
  { key: "L", status: "not set", row: 2 },
  { key: "Ñ", status: "not set", row: 2 },
  { key: "Z", status: "not set", row: 3 },
  { key: "X", status: "not set", row: 3 },
  { key: "C", status: "not set", row: 3 },
  { key: "V", status: "not set", row: 3 },
  { key: "B", status: "not set", row: 3 },
  { key: "N", status: "not set", row: 3 },
  { key: "M", status: "not set", row: 3 },
  { key: "backspace", status: "not set", row: 3 },
];

// Define a type for the slice state
interface CellsState {
  items: Cell[];
}

// Define the initial state using that type
const initialState: CellsState = {
  items: CELLS,
} as CellsState;

export const cellsSlice = createSlice({
  name: "cells",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateCell: (state, action: PayloadAction<Cell>) => {
      const { key, status, row } = action.payload;
      const updatedItems = [...state.items];
      const indexItem = CELLS.findIndex((item) => item.key === key);
      updatedItems[indexItem] = {
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
export const { updateCell } = cellsSlice.actions;
export { cellsReducer, type RootState };
