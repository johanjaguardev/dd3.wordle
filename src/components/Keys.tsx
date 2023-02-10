import "./../sass/Keys.scss";
import { useId } from "react";
import backspaceSVG from "./../assets/backspace.svg";
import { Key } from "../types/Key.t";

const Keys: React.FC = () => {
  const keys = [
    [
      { key: "Q", state: "not set" },
      { key: "W", state: "not set" },
      { key: "E", state: "not set" },
      { key: "R", state: "not set" },
      { key: "T", state: "not set" },
      { key: "Y", state: "not set" },
      { key: "U", state: "not set" },
      { key: "I", state: "not set" },
      { key: "O", state: "not set" },
      { key: "P", state: "not set" },
    ],
    [
      { key: "A", state: "not set" },
      { key: "S", state: "not set" },
      { key: "D", state: "not set" },
      { key: "F", state: "not set" },
      { key: "G", state: "not set" },
      { key: "H", state: "not set" },
      { key: "J", state: "not set" },
      { key: "K", state: "not set" },
      { key: "L", state: "not set" },
      { key: "Ñ", state: "not set" },
    ],
    [
      { key: "Z", state: "not set" },
      { key: "X", state: "not set" },
      { key: "C", state: "not set" },
      { key: "V", state: "not set" },
      { key: "B", state: "not set" },
      { key: "N", state: "not set" },
      { key: "M", state: "not set" },
      { key: "backspace", state: "not set" },
    ],
  ];

  return (
    <div className="keys">
      {keys.map((keyRow) => (
        <div className="keys__row" key={useId()}>
          {keyRow.map((item) => (
            <button
              key={item.key}
              value={item.key}
              className={`keys__key ${item.state.replace(" ", "-")}`}
            >
              {item.key === "backspace" ? (
                <img src={backspaceSVG} alt="backspace Key" />
              ) : (
                item.key
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export { Keys };
