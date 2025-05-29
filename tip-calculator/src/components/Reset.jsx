const Reset = ({
  billValue,
  setBillValue,
  percentage1,
  setPercentage1,
  percentage2,
  setPercentage2,
}) => {
  if (!(percentage1 || percentage2 || billValue)) return;
  const handleReset = () => {
    setPercentage1(0);
    setPercentage2(0);
    setBillValue("");
  };
  return <button onClick={handleReset}>Reset</button>;
};
export default Reset;
