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
import { TCell } from "../types/Cell.t";

const Board = () => {
  const grid = useSelector((state: RootState) => state.grid);
  const dispatch = useDispatch();
  const [randomWord, setRandomWord] = useState("");
  const [userInput, setUserInput] = useState({
    key: "-",
    count: 0,
  });

  const handleInput = (key: string) => {
    setUserInput((previous) => {
      return {
        count: previous.count === 5 ? 0 : previous.count + 1,
        key: key,
      };
    });
  };
  useEffect(() => {
    setRandomWord(WORDLIST[Math.floor(Math.random() * WORDLIST.length)]);
  }, []);

  useEffect(() => {
    const cellIndex = userInput.count - 1;
    if (userInput.count === 6) {
    } else {
      //dispatch here
      const updatedCells = [...grid.rows[grid.current].cells];

      let cellState =
        grid.rows[grid.current].cells[cellIndex] === undefined
          ? ({
              index: -1,
              key: "",
              row: -1,
              status: "not set",
            } as TCell)
          : grid.rows[grid.current].cells[cellIndex];
      cellState = {
        index: cellState.index + cellIndex,
        key: userInput.key,
        row: -1,
        status: cellState.status,
      };
      updatedCells[cellIndex] = cellState;

      const updatedRow: TRow = {
        index: grid.current,
        cells: updatedCells,
      };

      dispatch(updateRow(updatedRow));
    }
  }, [userInput]);
  return (
    <div className="board">
      <Header />
      <div className="board__grid">
        {grid.rows.map((row) => (
          <Row word={row.cells} key={row.index} />
        ))}
      </div>
      <KeyboardListener onKeyPress={handleInput} />
      <Keyboard handleButton={handleInput} />
    </div>
  );
};

export { Board };
