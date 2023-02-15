import { useId } from "react";
import { Header } from "./Header";
import { Keyboard } from "./Keyboard";
import "./../sass/Board.scss";
import { useState } from "react";
import { Row } from "./Row";
import { TRow } from "../types/Row.t";
import { RootState } from "./../store/cellsSlice";
import { useAppSelector, useAppDispatch } from "./../store/hooks";
import { KeyboardListener } from "./KeyboardListener";
import { updateRow } from "./../store/gridSlice";

const Board = () => {
  const grid = useAppSelector((state: RootState) => state.grid);
  console.log(grid, grid.rows);

  const handleInput = (key: string) => {
    console.log(key);
  };

  return (
    <div className="board">
      <Header />
      <div className="board__grid">
        QQQQ
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
