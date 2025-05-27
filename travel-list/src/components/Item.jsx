import { useState } from "react";

const Item = ({ item }) => {
  const [isPacked, setIsPacked] = useState(false);
  //   console.log(isPacked);
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => {
          setIsPacked(!isPacked);
        }}
      />
      <span
        style={isPacked === true ? { textDecorationLine: " line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
export default Item;
