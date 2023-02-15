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
      {word.map((cell, index) => (
        <Cell letter={cell.key} key={cell.index + index} />
      ))}
    </div>
  );
};

export { Row };
