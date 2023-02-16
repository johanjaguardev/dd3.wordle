import { useEffect, useId } from "react";
import { Header } from "./Header";
import { Keyboard } from "./Keyboard";
import "./../sass/Board.scss";
import { WORDLIST } from "../data/WORDLIST";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Row } from "./Row";
import { TRow } from "../types/Row.t";
import type { RootState } from "./../store/gridSlice";
import { KeyboardListener } from "./KeyboardListener";
import { updateRow } from "./../store/gridSlice";
import { updateCell } from "../store/cellsSlice";
import { TCell } from "../types/Cell.t";

const Board = () => {
  const grid = useSelector((state: RootState) => state.grid);
  const keys = useSelector((state: RootState) => state.cells.cells);
  const themeChoice = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();
  const [randomWord, setRandomWord] = useState("");
  const [userInput, setUserInput] = useState({
    key: "-",
    count: 0,
  });

  const handleInput = (key: string) => {
    if (key !== "ENTER" && key !== "BACKSPACE") {
      setUserInput((previous) => {
        return {
          count: previous.count === 5 ? 1 : previous.count + 1,
          key: key,
        };
      });
    }

    if (key === "BACKSPACE") {
      setUserInput((previous) => {
        return {
          count: previous.count === 0 ? 0 : previous.count - 1,
          key: "BACKSPACE",
        };
      });
    }
  };

  const checkCells = (updatedCells: TCell[]) => {
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

  useEffect(() => {
    console.log(themeChoice);
    setRandomWord(
      WORDLIST[Math.floor(Math.random() * WORDLIST.length)].toUpperCase()
    );
  }, []);

  useEffect(() => {
    console.log(userInput);
    const cellIndex =
      userInput.key !== "BACKSPACE" ? userInput.count - 1 : userInput.count;
    let updatedCells: TCell[] = [...grid.rows[grid.current].cells];
    let cellState =
      grid.rows[grid.current].cells[cellIndex] === undefined
        ? ({
            index: -1,
            key: userInput.key !== "BACKSPACE" ? userInput.key : "-",
            row: -1,
            status: "not set",
          } as TCell)
        : grid.rows[grid.current].cells[cellIndex];
    cellState = {
      index: cellState.index + cellIndex,
      key: userInput.key !== "BACKSPACE" ? userInput.key : "-",
      row: -1,
      status: cellState.status,
    };

    updatedCells[cellIndex] = cellState;
    updatedCells =
      userInput.count === 5 ? checkCells(updatedCells) : updatedCells;

    const updatedRow: TRow = {
      index: cellIndex,
      cells: updatedCells,
    };
    dispatch(updateRow(updatedRow));
  }, [userInput]);

  return (
    <div className={`board ${themeChoice ? "light" : "dark"}`}>
      <Header />
      <div className="board__grid">
        {grid.rows.map((row) => (
          <Row word={row.cells} key={useId()} />
        ))}
      </div>
      <KeyboardListener onKeyPress={handleInput} />
      <Keyboard handleButton={handleInput} />
    </div>
  );
};

export { Board };
