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
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
      />
    </form>
  );
};

export default GuessInput;
