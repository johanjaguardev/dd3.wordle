import { useEffect } from "react";

type Props = {
  onKeyPress: (key: string) => void;
};

const KeyboardListener = (props: Props) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();

    if (/^[A-Z]$/.test(key) || key === "BACKSPACE" || key === "ENTER") {
      props.onKeyPress(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export { KeyboardListener };
