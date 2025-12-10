import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const GuessResult = ({ words, answer }) => {
  const numRow = range(0, NUM_OF_GUESSES_ALLOWED, 1);
  const numCol = range(0, 5, 1);

  return (
    <div className="guess-results">
      {numRow.map((rowIndex) => {
        const word = words?.[rowIndex] || "";
        const status = checkGuess(answer, word);

        return (
          <p className="guess" key={rowIndex}>
            {numCol.map((colIndex) => {
              const statusStyle =
                word?.length > 0 ? status[colIndex].status : "";
              return (
                <span className={`cell ${statusStyle}`} key={colIndex}>
                  {word?.[colIndex] || ""}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};

export default GuessResult;
