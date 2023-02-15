import "./../sass/Keys.scss";
import backspaceSVG from "./../assets/backspace.svg";
import { TCell } from "../types/Cell.t";
import { RootState } from "./../store/cellsSlice";
import { useAppSelector, useAppDispatch } from "./../store/hooks";
import { updateCell } from "./../store/cellsSlice";

const drawRow = (row: number) => {
  const keys = useAppSelector((state: RootState) => state.cells.items);
  console.log(keys);
  return (
    <div className="keys__row" key={`keys__row-${row}`}>
      {keys
        .filter((item: TCell) => item.row === row)
        .map((item: TCell) => (
          <button
            key={item.key}
            value={item.key}
            className={`keys__key ${item.status.replace(" ", "-")}`}
          >
            {item.key === "backspace" ? (
              <img src={backspaceSVG} alt="backspace Key" />
            ) : (
              item.key
            )}
          </button>
        ))}
    </div>
  );
};

const Keyboard: React.FC = () => {
  return (
    <div className="keys">
      {drawRow(1)}
      {drawRow(2)}
      {drawRow(3)}
    </div>
  );
};

export { Keyboard };
