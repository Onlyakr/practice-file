const SelectPercentage = ({ children, percent, setPercent }) => {
  return (
    <div>
      {children}
      <select
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Abosolutely amazing (20%)</option>
      </select>
    </div>
  );
};
export default SelectPercentage;
