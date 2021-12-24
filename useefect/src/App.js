import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourseType, setResourseTye] = useState("posts");
  useEffect(() => {
    async function makeacall() {
      const request = await fetch(`https://jsonplaceholder.typicode.com/${resourseType}`);
      const data = await request.json();
      console.log(data);
    }

    makeacall();
  }, [resourseType]);
  return (
    <div className="App">
      <button onClick={() => setResourseTye("posts")}>Post</button>
      <button onClick={() => setResourseTye("users")}>Users</button>
      <button onClick={() => setResourseTye("comments")}>Comments</button>
      <></>
      <h1>{resourseType}</h1>
    </div>
  );
}

export default App;
