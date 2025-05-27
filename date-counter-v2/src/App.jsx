import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStep = (e) => {
    setStep(Number(e.target.value));
  };
  const handleCount = (e) => {
    setCount(Number(e.target.value));
  };
  const handleCountPlus = () => {
    setCount((c) => c + step);
  };
  const handleCountMinus = () => {
    setCount((c) => c - step);
  };
  console.log("re-render");
  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          name="step"
          value={step}
          onChange={(e) => handleStep(e)}
        />
        <label htmlFor="step"> Step : {step}</label>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => handleCount(e)}
          style={{ textAlign: "center" }}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step === 1 && count === 0 ? null : (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default App;
