import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/themeSlice";
import "./../sass/Cell.scss";

type Props = {
  letter: string;
  status: string;
  column: number;
};
const Cell: React.FC<Props> = ({ letter, status, column }) => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

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
