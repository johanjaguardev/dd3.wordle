import "./../sass/Header.scss";
import questionSVG from "./../assets/question.svg";
import barsSVG from "./../assets/bars.svg";
import daySVG from "./../assets/day.svg";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header__icon header__question"
        src={questionSVG}
        alt="Redirect to Instructions"
      />
      <h1>Wordle</h1>
      <img
        className="header__icon header__resulst"
        src={barsSVG}
        alt="Redirect to Results"
      />
      <img
        className="header__icon header__theme"
        src={daySVG}
        alt="Its confifuged Light Theme, Change it to Dark Theme"
      />
    </div>
  );
};

export { Header };
