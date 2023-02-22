import { solution, unicodeSplit } from "../../lib/words";
import { Cell } from "./Cell";

type Props = {
  guess: string;
  className: string;
  gridGray?: boolean;
};

export const CurrentRow = ({ guess, className, gridGray }: Props) => {
  const splitGuess = unicodeSplit(guess);
  const emptyCells = Array.from(Array(solution.length - splitGuess.length));
  const classes = `flex justify-center mb-1 opacity-60 ${className}`;

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} gridGray={gridGray} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} gridGray={gridGray} />
      ))}
    </div>
  );
};
