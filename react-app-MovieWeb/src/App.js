import Button from "./Button.js";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>hello!!</h1>
      <Button text={"click me"}/>
    </div>
  );
}

export default App;
