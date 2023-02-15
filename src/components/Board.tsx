import { useEffect, useId } from "react";
import { Header } from "./Header";
import { Keyboard } from "./Keyboard";
import "./../sass/Board.scss";
import { WORDLIST } from "../data/WORDLIST";

import { useState } from "react";
import { Row } from "./Row";
import { TRow } from "../types/Row.t";
import { RootState } from "./../store/cellsSlice";
import { useAppSelector, useAppDispatch } from "./../store/hooks";
import { KeyboardListener } from "./KeyboardListener";
import { updateRow } from "./../store/gridSlice";

const Board = () => {
  const grid = useAppSelector((state: RootState) => state.grid);
  const [randomWord, setRandomWord] = useState("");
  const [currentWord, setCurrentWord] = useState({ count: 0, word: "" });

  const handleInput = (key: string) => {
    setCurrentWord((previous) => {
      return {
        count: previous.count === 5 ? 0 : previous.count + 1,
        word: previous.count === 5 ? "" : previous.word + key,
      };
    });
  };
  useEffect(() => {
    setRandomWord(WORDLIST[Math.floor(Math.random() * WORDLIST.length)]);
  }, []);
  useEffect(() => {
    console.log(currentWord);
    if (currentWord.count === 5) {
      console.log(currentWord.word, grid.rows[grid.current]);
    }
  }, [currentWord]);
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
