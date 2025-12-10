import { useState } from "react";

const GuessInput = ({ onSubmit }) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(word);
    setWord("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
