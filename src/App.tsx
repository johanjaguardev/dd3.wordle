import "./App.scss";
import { Board } from "./components/Board";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  useEffect(() => {
    document.body.classList.add(`light`);
  }, []);

  useEffect(() => {
    document.body.classList.add(`${themeChoice ? "light" : "dark"}`);
    document.body.classList.remove(`${themeChoice ? "dark" : "light"}`);
  }, [themeChoice]);

  return <Board />;
};

export { App };
