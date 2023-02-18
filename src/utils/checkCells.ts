import type { TCell } from "../types/Cell.t";
import { updateCell } from "../store/cellsSlice";
import type { RootState } from "./../store/gridSlice";
import { useDispatch } from "react-redux";

const checkCells = (
  grid: RootState["grid"],
  keys: RootState["cells"]["cells"],
  dispatch: ReturnType<typeof useDispatch>,
  randomWord: string,
  updatedCells: TCell[]
): TCell[] => {
  let userWord = "";
  let newCells = updatedCells.map((obj, index) => {
    let cellToUpdate: TCell = grid.rows[grid.current].cells[index];
    userWord += obj.key;
    cellToUpdate = {
      index: obj.index + index,
      key: obj.key,
      row: -1,
      status:
        obj.key === randomWord[index]
          ? "ok"
          : randomWord.includes(obj.key)
          ? "exist"
          : "not exist",
    };

    let keyToUpdate = { ...keys.filter((k: TCell) => k.key === obj.key)[0] };
    keyToUpdate.status =
      cellToUpdate.status === "ok"
        ? "ok"
        : cellToUpdate.status === "exist" && keyToUpdate.status !== "ok"
        ? "exist"
        : "not exist";
    dispatch(updateCell(keyToUpdate));
    return cellToUpdate;
  });
  console.log(
    `palabra a adivinar: ${randomWord} - palabra de usuario: ${userWord}`
  );
  return newCells;
};

export { checkCells };
