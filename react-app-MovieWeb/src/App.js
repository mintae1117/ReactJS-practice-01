import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import styled from "./Button.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  const irunonetime = () =>{
    console.log("i run only once");
  }
  useEffect(irunonetime, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button className={styled.btn} onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
