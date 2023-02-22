import { BackspaceIcon } from "@heroicons/react/outline";
import {  ENTER_TEXT } from "../../constants/strings";
import { getStatuses } from "../../lib/statuses";
import { localeAwareUpperCase } from "../../lib/words";
import { Key } from "./Key";
import classNames from "classnames";
import { useEffect } from "react";

type Props = {
  onChar: (value: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  solution: string;
  guesses: string[];
  isRevealing?: boolean;
  isDarkMode?: boolean;
};

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
  isDarkMode,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses);

  const onClick = (value: string) => {
    if (value === "ENTER") {
      onEnter();
    } else if (value === "DELETE") {
      onDelete();
    } else {
      onChar(value);
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onEnter();
      } else if (e.code === "Backspace") {
        onDelete();
      } else {
        const key = localeAwareUpperCase(e.key);
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= "A" && key <= "Z") {
          onChar(key);
        }
      }
    };
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [onEnter, onDelete, onChar]);

  const classes = classNames(" py-6 mx-auto px-9 rounded-2xl", {
    "bg-gray-100": !isDarkMode,
    "bg-gray-800": isDarkMode,
  });

  return (
    <div className={classes}>

      <div className="mb-1 flex justify-center">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="mb-1 flex justify-center">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          <BackspaceIcon className="h-6 w-6 "/>
        </Key>
      </div>
    </div>
  );
};
