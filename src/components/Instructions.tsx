import "./../sass/Instructions.scss";
import instructionsPng from "./../assets/instructions.png";
import instructionsDarkPng from "./../assets/instructions-dark.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toggleBoard } from "../store/windowsSlice";

const Instructions = () => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const isInstructionsEnabled = useSelector(
    (state: RootState) => state.window.instructions
  );
  return (
    <div
      className={`instructions ${!isInstructionsEnabled ? "hidden" : ""} ${
        themeChoice ? "light" : "dark"
      }`}
    >
      <div className="instructions__wrapper wrapper">
        <img
          className="instructions__img"
          src={`${themeChoice ? instructionsPng : instructionsDarkPng}`}
          alt="Instructions to Play"
        />
        <button
          className="instructions__button"
          onClick={() => {
            dispatch(toggleBoard());
          }}
        >
          !JUGAR!
        </button>
      </div>
    </div>
  );
};

export { Instructions };
