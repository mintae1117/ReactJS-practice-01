import {useState, useEffect} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const deleteBtn = index => {
    setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
  };
  const ontodo = (event) => setTodo(event.target.value);
  const onsubmit = (event) => {
    event.preventDefault()
    if(todo === ""){
      return;
    }
    else{setTodo("");}
    setTodos(currentArray => [todo, ...currentArray]);
  };

  return (
    <div>
      <h1>My Todo List ({todos.length})</h1>
      <form onSubmit={onsubmit}>
        <input onChange={ontodo} value={todo} text="text" placeholder="Write your to do..."></input>
        <button>Add to do</button>
      </form>
      <hr/>
      <ul>
        {todos.map((text, index) => (<li key={index}>{text}
        <button onClick={() => deleteBtn(index)}>❌</button>
        </li>))}
      </ul>
    </div>
  );
}

export default App;
