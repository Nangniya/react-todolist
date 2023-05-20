import { useRef } from 'react';
import { TodoType } from './data';
import { useRecoilState } from 'recoil';
import { todoAtom } from '../recoil/todoAtom';

// interface TodoAddProps {
//   todos: TodoType[];
//   setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
// }

const TodoAdd = () =>
  // { todos, setTodos }: TodoAddProps
  {
    const [todos, setTodos] = useRecoilState(todoAtom);
    const newTodoRef = useRef(null);
    const onSubmit = (e: any) => {
      e.preventDefault();
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
      const newTodoText = newTodoRef.current.value;
      const newTodo = {
        id: newId,
        text: newTodoText,
        checked: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      newTodoRef.current.value = '';
      console.log(todos);
    };

    return (
      <form className='TodoAdd' onSubmit={onSubmit}>
        <input ref={newTodoRef} placeholder='할 일을 입력하세요' />
        <button className='add-btn' type='submit'>
          +
        </button>
      </form>
    );
  };

export default TodoAdd;
