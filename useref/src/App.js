import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const previus = useRef("");
  const inputRef = useRef();
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => {
          previus.current = name;
          setName(e.target.value);
        }}
      />
      <h1> my name is {name}</h1>
      <h5> and it was {previus.current} </h5>
      <h2> this hook has been render {renderCount.current} </h2>
      <button onClick={() => inputRef.current.focus()}>Send Focust </button>
    </div>
  );
}

export default App;
