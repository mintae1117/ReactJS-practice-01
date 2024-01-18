import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import styled from "./Button.module.css";

function Hello(){
  function created(){
    console.log("I'm created ><");
    return destroyed;
  }
  function destroyed(){
    console.log("destroyed ㅠㅠ");
  }
  useEffect(created, []);
  return(
    <h1>Hello</h1>
  );
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickShow = () => setShowing((prev) => !prev);

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
      {showing ? <Hello/> : null}
      <input value={keyword} onChange={onChange} type="text" placeholder="search here..."></input>
      <h1>{counter}</h1>
      <button className={styled.btn} onClick={onClick}>click me</button><br></br>
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
