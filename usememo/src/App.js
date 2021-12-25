import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div className="App">
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change theme </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
function slowFunction(number) {
  console.log("calling slow fuction");
  for (let i = 0; i <= 1000000000; i++) {}
  return number * 2;
}
export default App;
