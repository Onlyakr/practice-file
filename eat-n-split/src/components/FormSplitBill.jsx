import Button from "./Button";
const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>Bill value</label>
      <input type="text" value={10} />
      <label>X's expense</label>
      <input type="text" value={5} disabled />
      <label>Who is paying the bill</label>
      <select value="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};
export default FormSplitBill;
