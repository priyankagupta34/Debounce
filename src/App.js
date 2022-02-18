import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setVal] = useState("");

  const debounce = (callback, timeout) => {
    let timer,
      k = 90;
    return (...args) => {
      console.log("timer", k);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, timeout);
    };
  };

  const handleChange = debounce((event) => {
    setVal(event.target.value);
  }, 1000);

  return (
    <div className="App">
      <input onChange={handleChange} />
      <div style={{ padding: 10 }}>{value}</div>
    </div>
  );
}
