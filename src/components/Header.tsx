import "./../sass/Header.scss";
import questionSVG from "./../assets/question.svg";
import questionDarkSVG from "./../assets/question-dark.svg";
import barsSVG from "./../assets/bars.svg";
import barsDarkSVG from "./../assets/bars-dark.svg";
import daySVG from "./../assets/day.svg";
import nightSVG from "./../assets/night.svg";
import { RootState, toggleTheme } from "../store/themeSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
const Header = () => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={`header ${themeChoice ? "light" : "dark"}`}>
      <img
        className="header__icon header__question"
        src={`${themeChoice ? questionSVG : questionDarkSVG}`}
        alt="Redirect to Instructions"
      />
      <h1>Wordle</h1>
      <img
        className="header__icon header__resulst"
        src={`${themeChoice ? barsSVG : barsDarkSVG}`}
        alt="Redirect to Results"
      />
      <img
        className="header__icon header__theme"
        src={`${themeChoice ? daySVG : nightSVG}`}
        alt="Its confifuged Light Theme, Change it to Dark Theme"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </div>
  );
};

export { Header };
