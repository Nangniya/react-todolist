import React, { useRef } from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
`;
const StyledSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`; //조건부 스타일 적용

const Todo = ({ todo, setTodos }) => {
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };
  const editRef = useRef();
  const handleBlur = () => {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        if (item.id === todo.id) {
          return { ...item, text: editRef.current.value };
        }
        return item;
      });
      return newTodos;
    });
    editRef.current.blur(); // blur 이벤트 호출
    setEdit();
  };
  const setEdit = () => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return { ...item, edit: !item.edit };
        }
        return item;
      })
    );
  };
  const checkTodo = () => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === todo.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };
  return (
    <StyledLi>
      <span onClick={checkTodo}>{!todo.checked ? "🥚" : "🐣"}</span>
      {!todo.edit ? (
        <StyledSpan checked={todo.checked}>{todo.text}</StyledSpan>
      ) : (
        <input
          ref={editRef}
          defaultValue={todo.text}
          onBlur={handleBlur}
        ></input>
      )}
      <button onClick={setEdit}>수정</button>
      <button onClick={deleteTodo}>삭제</button>
    </StyledLi>
  );
};

export default Todo;
