import "./App.css";
import { useState, useRef, useEffect } from "react";
function App() {
  const [name, setName] = useState("");
  const getReft = useRef();
  function focus() {
    getReft.current.focus();
  }
  return (
    <>
      <input ref={getReft} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>this is my name {name} </h1>
      <button onClick={focus}> start writing</button>
    </>
  );
}

export default App;
