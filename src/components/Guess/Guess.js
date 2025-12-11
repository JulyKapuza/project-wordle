import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ value, answer }) => {
  const numCol = range(5);

  const status = checkGuess(value, answer);

  return (
    <p className="guess">
      {numCol.map((colIndex) => {
        const statusStyle = value?.length > 0 ? status[colIndex].status : "";
        return (
          <span className={`cell ${statusStyle}`} key={colIndex}>
            {value?.[colIndex] || ""}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
