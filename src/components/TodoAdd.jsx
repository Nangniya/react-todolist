import { useRef } from "react";

const TodoAdd = ({ todos, setTodos }) => {
  const newTodoRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    const newTodoText = newTodoRef.current.value;
    const newTodo = {
      id: newId,
      text: newTodoText,
      checked: false,
      edit: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    newTodoRef.current.value = "";
    console.log(todos);
  };

  return (
    <form className="TodoAdd" onSubmit={onSubmit}>
      <input ref={newTodoRef} placeholder="할 일을 입력하세요" />
      <button className="add-btn" type="submit">
        +
      </button>
    </form>
  );
};

export default TodoAdd;
