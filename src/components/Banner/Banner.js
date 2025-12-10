const Banner = ({ count, result, answer }) => {
  return (
    <>
      {result === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {count} guesses</strong>.
          </p>
        </div>
      )}

      {result === "lose" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
};

export default Banner;
