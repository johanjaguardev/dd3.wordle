import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { TCell } from "../types/Cell.t";
import { TRow } from "../types/Row.t";

interface GridState {
  current: number;
  rows: TRow[];
}
const emptyCell: TCell = {
  index: 100,
  key: "-",
  status: "not set",
  row: -1,
};

const initialState: GridState = {
  current: 0,
  rows: [
    {
      index: 0,
      cells: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    },
    {
      index: 1,
      cells: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    },
    {
      index: 2,
      cells: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    },
    {
      index: 3,
      cells: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    },
    {
      index: 4,
      cells: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    },
  ],
} as GridState;

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    updateRow: (state, action: PayloadAction<TRow>) => {
      const { index, cells } = action.payload;
      const updatedRows = [...state.rows];
      updatedRows[index] = {
        index: index,
        cells: cells,
      };
      return {
        ...state,
        rows: updatedRows,
      };
    },
  },
});

const gridReducer = gridSlice.reducer;
const { updateRow } = gridSlice.actions;

export { gridSlice, updateRow, gridReducer, type RootState };
