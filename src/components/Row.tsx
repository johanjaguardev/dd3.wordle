import "./../sass/Row.scss";
import { useId } from "react";
import { Cell } from "./Cell";
type Props = {
  word: string;
};
const Row: React.FC<Props> = ({ word }) => {
  return (
    <div className="row">
      {word.split("").map((letter) => (
        <Cell letter={letter} key={useId()} />
      ))}
    </div>
  );
};

export { Row };
