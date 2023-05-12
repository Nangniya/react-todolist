import Todo from "./Todo";
import styled from "styled-components";

const ClearAllBtn = styled.button`
  margin-left: auto;
`;

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} setTodos={setTodos} />;
        })}
      </ul>
      <ClearAllBtn onClick={() => setTodos([])}>모두 삭제</ClearAllBtn>
    </>
  );
};

export default TodoList;
