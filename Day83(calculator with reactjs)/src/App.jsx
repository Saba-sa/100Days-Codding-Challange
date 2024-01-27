import style from "./App.module.css";
import Display from "./components/Display/Display.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from "react";
const App = () => {
  const [calVal, setcalVal] = useState("");
  const handleClick = (val) => {
    try {
      if (val === "C") {
        setcalVal("");
      } else if (val === "=") {
        setcalVal(eval(calVal));
        console.log("val", calVal);
      } else {
        setcalVal((prev) => prev + val);
      }
    } catch (error) {
      setcalVal("invalid");
    }
  };
  return (
    <div className={style.container}>
      <Display calvalue={calVal} />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default App;
