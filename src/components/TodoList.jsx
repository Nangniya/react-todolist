import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} setTodos={setTodos} />;
      })}
    </ul>
  );
};

export default TodoList;
