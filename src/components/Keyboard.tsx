import "./../sass/Keys.scss";
import backspaceSVG from "./../assets/backspace.svg";
import backspaceWhiteSVG from "./../assets/backspace-white.svg";
import { TCell } from "../types/Cell.t";
import { RootState } from "./../store/cellsSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
type Props = {
  handleButton: (key: string) => void;
};

const Keyboard: React.FC<Props> = ({ handleButton }) => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  const drawRow = (row: number) => {
    const keys = useSelector((state: RootState) => state.cells.cells);
    return (
      <div
        className={`keys__row ${themeChoice ? "light" : "dark"}`}
        key={`keys__row-${row}`}
      >
        {keys
          .filter((item: TCell) => item.row === row)
          .map((item: TCell) => (
            <button
              key={item.key}
              value={item.key}
              className={`keys__key ${item.status.replace(" ", "-")}`}
              onClick={() => handleButton(item.key)}
            >
              {item.key === "BACKSPACE" ? (
                <img
                  src={`${themeChoice ? backspaceSVG : backspaceWhiteSVG}`}
                  alt="backspace Key"
                />
              ) : (
                item.key
              )}
            </button>
          ))}
      </div>
    );
  };
  return (
    <div className={`keys ${themeChoice ? "light" : "dark"}`}>
      {drawRow(1)}
      {drawRow(2)}
      {drawRow(3)}
    </div>
  );
};

export { Keyboard };
