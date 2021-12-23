import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return { count: 0, theme: "red" };
  });
  return (
    <div className="App">
      <button onClick={() => setCount((prev) => ({ ...prev, count: prev.count - 1 }))}>-</button>
      {count.count} {count.theme}
      <button onClick={() => setCount((prev) => ({ ...prev, count: prev.count + 1 }))}>+</button>
    </div>
  );
}

export default App;
