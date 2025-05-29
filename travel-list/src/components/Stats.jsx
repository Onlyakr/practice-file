const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packing list😊
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.isPacked).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentPacked === 100
        ? "You got everythings! Ready to go✈️"
        : `You have ${numItems} items on your list, and you already packed ${numPacked}
      (${percentPacked}%)`}
    </footer>
  );
};
export default Stats;
