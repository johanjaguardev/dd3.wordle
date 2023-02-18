import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCell } from "../types/Cell.t";
import { CELLS } from "../data/CELLS";

interface CellsState {
  cells: TCell[];
}

const initialState: CellsState = {
  cells: CELLS,
};

const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {
    updateCell: (state, action: PayloadAction<TCell>) => {
      const { index, ...rest } = action.payload;
      const cells = [...state.cells];
      cells[index] = { ...cells[index], ...rest };
      return { ...state, cells };
    },
  },
});

const { updateCell } = cellsSlice.actions;
const cellsReducer = cellsSlice.reducer;

export { updateCell, cellsReducer };
