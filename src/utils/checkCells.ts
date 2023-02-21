import type { TCell } from "../types/Cell.t";
import { updateCell } from "../store/cellsSlice";
import type { RootState } from "./../store/store";
import { useDispatch } from "react-redux";

const checkCells = (
  grid: RootState["grid"],
  keys: RootState["cells"]["cells"],
  dispatch: ReturnType<typeof useDispatch>,
  randomWord: string,
  updatedCells: TCell[]
): TCell[] => {
  let copyWord = [...randomWord];

  let newCells = updatedCells.map((obj, index) => {
    let cellToUpdate: TCell = grid.rows[grid.current].cells[index];
    if (obj.key === randomWord[index]) {
      cellToUpdate = {
        index: obj.index + index,
        key: obj.key,
        row: -1,
        status: "ok",
      };
      copyWord[index] = "-";
    } else if (copyWord.indexOf(obj.key) > 0) {
      cellToUpdate = {
        index: obj.index + index,
        key: obj.key,
        row: -1,
        status: "exist",
      };
      copyWord[index] = "-";
    } else {
      cellToUpdate = {
        index: obj.index + index,
        key: obj.key,
        row: -1,
        status: "not exist",
      };
    }

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

  // let keyToUpdate = { ...keys.filter((k: TCell) => k.key === obj.key)[0] };
  // keyToUpdate.status =
  //   cellToUpdate.status === "ok"
  //     ? "ok"
  //     : cellToUpdate.status === "exist" && keyToUpdate.status !== "ok"
  //     ? "exist"
  //     : "not exist";
  // dispatch(updateCell(keyToUpdate));

  console.log(newCells, randomWord);
  return newCells;
};

export { checkCells };
