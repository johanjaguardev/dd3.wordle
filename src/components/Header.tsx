import "./../sass/Header.scss";
import questionSVG from "./../assets/question.svg";
import questionDarkSVG from "./../assets/question-dark.svg";
import barsSVG from "./../assets/bars.svg";
import barsDarkSVG from "./../assets/bars-dark.svg";
import daySVG from "./../assets/day.svg";
import nightSVG from "./../assets/night.svg";
import type { RootState } from "../store/store";
import { toggleTheme } from "../store/themeSlice";
import { toggleInstructions, toggleResults } from "../store/windowsSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleToggleInstructions = () => {
    dispatch(toggleInstructions());
  };

  return (
    <div className={`header ${themeChoice ? "light" : "dark"}`}>
      <img
        className="header__icon header__question"
        src={`${themeChoice ? questionSVG : questionDarkSVG}`}
        alt="Redirect to Instructions"
        onClick={handleToggleInstructions}
      />
      <h1>Wordle</h1>
      <img
        className="header__icon header__resulst"
        src={`${themeChoice ? barsSVG : barsDarkSVG}`}
        alt="Redirect to Results"
        onClick={() => {
          console.log("jonhny is here");
          dispatch(toggleResults());
        }}
      />
      <img
        className="header__icon header__theme"
        src={`${themeChoice ? daySVG : nightSVG}`}
        alt="Its confifuged Light Theme, Change it to Dark Theme"
        onClick={() => {
          console.log("jonhny is here");
          dispatch(toggleTheme());
        }}
      />
    </div>
  );
};

export { Header };
