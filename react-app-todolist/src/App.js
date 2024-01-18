import {useState, useEffect} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const ontodo = (event) => setTodo(event.target.value);
  const onsubmit = (event) => {
    event.preventDefault()
    if(todo === ""){
      return;
    }
    else{setTodo("");}
    setTodos(currentArray => [todo, ...currentArray]);
  };
  console.log(todos);
  return (
    <div>
      <h1>My Todo List ({todos.length})</h1>
      <form onSubmit={onsubmit}>
        <input onChange={ontodo} value={todo} text="text" placeholder="Write your to do..."></input>
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
