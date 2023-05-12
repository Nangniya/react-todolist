import Todo from "./Todo";
import styled from "styled-components";

const ClearAllBtn = styled.button`
  margin-left: auto;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: lightcoral;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  &:hover {
    background-color: #d86c6c;
  }
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
