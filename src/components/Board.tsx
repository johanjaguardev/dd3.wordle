import { useId } from "react";
import { Header } from "./Header";
import { Keyboard } from "./Keyboard";
import "./../sass/Board.scss";
import { useState } from "react";
import { Row } from "./Row";

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
      <div className="board__grid">
        {grid.map((word) => (
          <Row word={word} key={useId()} />
        ))}
      </div>

      <Keyboard />
    </div>
  );
};

export { Board };
