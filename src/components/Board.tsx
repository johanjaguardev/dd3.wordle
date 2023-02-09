import { useId } from "react";
import { Header } from "./Header";
import { Keyboard } from "./Keyboard";
import "./../sass/Board.scss";
import { useState } from "react";

const Board = () => {
  const [grid, setGrid] = useState([
    "-----",
    "-----",
    "-----",
    "-----",
    "-----",
  ]);
  return (
    <div className="board">
      <Header />
      {grid.map((row) => (
        <div className="board__row" key={useId()}>
          {row.split("").map((cell) => (
            <div className="board__cell" key={useId()}>
              {cell}
            </div>
          ))}
        </div>
      ))}
      <Keyboard />
    </div>
  );
};

export { Board };
