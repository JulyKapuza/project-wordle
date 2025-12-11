import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResult from "../GuessResult";
import GuessInput from "../GuessInput";
import { useState } from "react";
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = useState([]);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("inGame");

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
    <>
      <GuessResult words={words} answer={answer} />;
      {result === "inGame" && <GuessInput onSubmit={onSubmit} />}
      {result !== "inGame" && (
        <Banner count={count} answer={answer} result={result} />
      )}
    </>
  );
}

export default Game;
