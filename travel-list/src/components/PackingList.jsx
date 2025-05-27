import Item from "./Item";

const PackingList = ({ initialItems }) => {
  //   console.log(initialItems);
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
