import { useState } from "react";
import Game from "../Game";
import Header from "../Header";
import GuessInput from "../GuessInput";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";
const answer = sample(WORDS);

function App() {
  const [words, setWords] = useState([]);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("inGame");

  console.log(answer);

  const onSubmit = (word) => {
    setWords((prev) => [...prev, word]);
    setCount((prev) => prev + 1);

    if (answer === word && count < NUM_OF_GUESSES_ALLOWED) {
      setResult("win");
    }
    if (count >= NUM_OF_GUESSES_ALLOWED && answer !== word) {
      setResult("lose");
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game words={words} answer={answer} />
        {result === "inGame" && <GuessInput onSubmit={onSubmit} />}
        {result !== "inGame" && (
          <Banner count={count} answer={answer} result={result} />
        )}
      </div>
    </div>
  );
}

export default App;
