import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepPlus = () => {
    setStep((s) => s + 1);
  };
  const handleStepMinus = () => {
    setStep((s) => s - 1);
  };
  const handleCountPlus = () => {
    setCount((c) => c + step);
  };
  const handleCountMinus = () => {
    setCount((c) => c - step);
  };
  console.log("re-render");
  return (
    <>
      <div className="App">
        <button onClick={handleStepMinus}>-</button>
        <span>Step : {step}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div className="App">
        <button onClick={handleCountMinus}>-</button>
        <span>Count : {count}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p className="App">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};
export default App;
