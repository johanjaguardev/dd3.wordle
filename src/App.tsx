import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Board } from "./components/Board";
import { Instructions } from "./components/Instructions";
import { Results } from "./components/Result";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/results" element={<Results />} />
      <Route path="/instructions" element={<Instructions />} />
    </Routes>
  );
};

export default App;
