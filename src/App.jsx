import './App.css';
import {useState} from 'react';
import TodoNav from './components/TodoNav'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'
import data from './components/data';

function App() {
  
  const [todos, setTodos] = useState(data); 

  return (
    <div className="App">
      <TodoAdd todos={todos} setTodos={setTodos}/>
      <TodoNav />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
