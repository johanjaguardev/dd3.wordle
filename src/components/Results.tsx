import "./../sass/Results.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store/store";
import { toggleBoard } from "../store/windowsSlice";
import { useDispatch } from "react-redux";
const Results = () => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const isResultsEnabled = useSelector(
    (state: RootState) => state.window.results
  );
  return (
    <div
      className={`results ${!isResultsEnabled ? "hidden" : ""} ${
        themeChoice ? "light" : "dark"
      }`}
    >
      <div className="results__wrapper wrapper">
        I'm the Results
        <button
          className="results__button"
          onClick={() => {
            dispatch(toggleBoard());
          }}
        >
          SSSS
        </button>
      </div>
    </div>
  );
};

export { Results };
