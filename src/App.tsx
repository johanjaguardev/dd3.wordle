import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Board } from "./components/Board";
import { Instructions } from "./components/Instructions";
import { Results } from "./components/Result";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "./store/themeSlice";

const App: React.FC = () => {
  const themeChoice = useSelector((state: RootState) => state.theme);
  useEffect(() => {
    document.body.classList.add(`light`);
  }, []);

  useEffect(() => {
    document.body.classList.add(`${themeChoice ? "light" : "dark"}`);
    document.body.classList.remove(`${themeChoice ? "dark" : "light"}`);
  }, [themeChoice]);

  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/results" element={<Results />} />
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
  );
};

export default App;
