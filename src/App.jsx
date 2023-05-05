import './App.css';
import {useState} from 'react';
import TodoNav from './components/TodoNav'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'

function App() {
  
  const [todos, setTodos] = useState(['할일1', '할일2', '할일3']); 

  return (
    <div className="App">
      <TodoAdd todos={todos} setTodos={setTodos}/>
      <TodoNav />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
