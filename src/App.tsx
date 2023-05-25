import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import Login from "./components/Login";
import data, { TodoType } from "./components/data";
import { useRecoilState } from "recoil";
import { todoAtom } from "./recoil/todoAtom";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<TodoApp />} />
    </Routes>
  );
}

const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>(data);
  const [todos2, setTodos2] = useRecoilState(todoAtom);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="App">
      <div className="Wrapper">
        <h4>Today's TodoList</h4>
        <TodoAdd
        // todos={todos} setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};
export default App;
