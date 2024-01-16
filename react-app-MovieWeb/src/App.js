import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import styled from "./Button.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here..."></input>
      <h1>{counter}</h1>
      <button className={styled.btn} onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
