import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";


import Guess from "../Guess";

const GuessResult = ({ words, answer }) => {
  const numRow = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {numRow.map((rowIndex) => (
        <Guess key={rowIndex} value={words[rowIndex]} answer={answer} />
      ))}
    </div>
  );
};

export default GuessResult;
