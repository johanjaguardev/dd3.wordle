import "./../sass/Keys.scss";
import { useId } from "react";
import backspaceSVG from "./../assets/backspace.svg";

const Keys: React.FC = () => {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["Z", "X", "C", "V", "B", "N", "M", "backspace"],
  ];

  return (
    <div className="keys">
      {keys.map((keyRow) => (
        <div className="keys__row" key={useId()}>
          {keyRow.map((key) => (
            <button key={key} value={key} className="keys__key">
              {key === "backspace" ? (
                <img src={backspaceSVG} alt="backspace Key" />
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Keys };
