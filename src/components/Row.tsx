import "./../sass/Row.scss";
import { useId } from "react";
import { Cell } from "./Cell";
import { TCell } from "../types/Cell.t";
type Props = {
  word: TCell[];
};
const Row: React.FC<Props> = ({ word }) => {
  return (
    <div className="row">
      {word.map((cell, index) => {
        return (
          <Cell
            letter={cell.key}
            status={cell.status}
            column={index}
            key={useId()}
          />
        );
      })}
    </div>
  );
};

export { Row };
