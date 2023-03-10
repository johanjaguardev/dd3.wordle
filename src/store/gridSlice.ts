import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    updateRow: (state, action: PayloadAction<TRow>) => {
      const { index, cells } = action.payload;
      const currentRow = state.current;
      const updatedRows = [...state.rows];
      updatedRows[currentRow] = {
        index: index,
        cells: cells,
      };

      return {
        ...state,
        current: currentRow,
        rows: updatedRows,
      };
    },

    incrementRow: (state) => {
      return {
        ...state,
        current: state.current <= 4 ? state.current + 1 : state.current,
      };
    },
  },
});

const { updateRow, incrementRow } = gridSlice.actions;
const gridReducer = gridSlice.reducer;

export { gridSlice, updateRow, gridReducer, incrementRow };
export type { GridState };
