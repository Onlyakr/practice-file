const Output = ({ billValue, percentage1, percentage2 }) => {
  if (!billValue) return;
  let tipValue = (billValue * (percentage1 + percentage2)) / 100;
  let totalValue = billValue + tipValue;
  return (
    <h2>
      You pay ${totalValue} {`($${billValue} + $${tipValue} tips)`}
    </h2>
  );
};
export default Output;
