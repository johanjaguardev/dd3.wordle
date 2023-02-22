import { useEffect, useId, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "./Header";
import { Keyboard } from "./Keyboard";
import "./../sass/Board.scss";
import { WORDLIST } from "../data/WORDLIST";
import type { RootState } from "../store/store";
import { incrementRow, updateRow } from "./../store/gridSlice";
import { TCell } from "../types/Cell.t";
import { checkCells } from "../utils/checkCells";
import { Row } from "./Row";
import { KeyboardListener } from "./KeyboardListener";
import { Instructions } from "./Instructions";
import { Results } from "./Results";
import { current } from "@reduxjs/toolkit";

const Board = () => {
  const grid = useSelector((state: RootState) => state.grid);
  const keys = useSelector((state: RootState) => state.cells.cells);
  const themeChoice = useSelector((state: RootState) => state.theme);
  const windowState = useSelector((state: RootState) => state.window);

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

  useEffect(() => {
    console.log("checking how many times is rendered this");
    setRandomWord(
      WORDLIST[Math.floor(Math.random() * WORDLIST.length)].toUpperCase()
    );
  }, []);

  useEffect(() => {
    const cellIndex =
      userInput.key !== "BACKSPACE" ? userInput.count - 1 : userInput.count;
    if (grid.current <= 4) {
      let updatedCells: TCell[] =
        [...grid.rows[grid.current].cells] || undefined;

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
      dispatch(
        updateRow({
          index: userInput.count === 5 ? cellIndex - 1 : cellIndex,
          cells:
            userInput.count === 5
              ? checkCells(grid, keys, dispatch, randomWord, [...updatedCells])
              : updatedCells,
        })
      );
      if (userInput.count === 5) {
        setUserInput({
          count: 0,
          key: "-",
        });
        dispatch(incrementRow());
      }
    }
  }, [userInput]);

  return (
    <div className={`board ${themeChoice ? "light" : "dark"}`}>
      <Fragment>
        <Header />
        <div className="board__grid">
          {grid.rows.map((row) => (
            <Row word={row.cells} key={useId()} />
          ))}
        </div>
        <KeyboardListener onKeyPress={handleInput} />
        <Keyboard handleButton={handleInput} />
      </Fragment>
      <Instructions />
      <Results />
    </div>
  );
};

export { Board };
