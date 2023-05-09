import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import data from "./components/data";

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="App">
      <div className="Wrapper">
        <h4>Today's TodoList</h4>
        <TodoAdd todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
