import { useState } from "react";
import BillInput from "./components/BillInput";
import Reset from "./components/Reset";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";

const App = () => {
  const [billValue, setBillValue] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  return (
    <div>
      <BillInput billValue={billValue} setBillValue={setBillValue} />
      <SelectPercentage percent={percentage1} setPercent={setPercentage1}>
        How did you like service?
      </SelectPercentage>
      <SelectPercentage percent={percentage2} setPercent={setPercentage2}>
        How did your friends like service?
      </SelectPercentage>
      <Output
        billValue={billValue}
        percentage1={percentage1}
        percentage2={percentage2}
      />
      <Reset
        billValue={billValue}
        setBillValue={setBillValue}
        percentage1={percentage1}
        percentage2={percentage2}
        setPercentage1={setPercentage1}
        setPercentage2={setPercentage2}
      />
    </div>
  );
};
export default App;
