import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/store";
import "./../sass/Cell.scss";

type Props = {
  letter: string;
  status: string;
  column: number;
};
const Cell: React.FC<Props> = ({ letter, status, column }) => {
  const themeChoice = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={`cell ${status.replace(" ", "-")} column-${column} ${
        themeChoice ? "light" : "dark"
      }`}
    >
      {letter === "-" ? "" : letter}
    </div>
  );
};

export { Cell };
