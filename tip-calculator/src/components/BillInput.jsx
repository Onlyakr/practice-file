const BillInput = ({ billValue, setBillValue }) => {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        placeholder="Bill value"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
    </div>
  );
};
export default BillInput;
