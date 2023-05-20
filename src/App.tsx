import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import data, { TodoType } from './components/data';
import { useRecoilState } from 'recoil';
import { todoAtom } from './recoil/todoAtom';

function App() {
  const [todos, setTodos] = useState<TodoType[]>(data);
  const [todos2, setTodos2] = useRecoilState(todoAtom);

  return (
    <div className='App'>
      <div className='Wrapper'>
        <h4>Today's TodoList</h4>
        <TodoAdd
        // todos={todos} setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
