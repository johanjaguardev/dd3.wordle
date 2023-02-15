import { TCell } from "./Cell.t";

type TRow = {
  index: number;
  cells: [TCell, TCell, TCell, TCell, TCell];
};

export type { TRow };
