import React, { useRef } from "react";
import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "@mui/material";

//li태그 점 없애기
const StyledLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 20px;
  border-bottom: 2px solid gray;
`;
//조건부 스타일 적용
const StyledSpan = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "gray" : "inherit")};
  text-align: left;
  margin-left: 10px;
  flex: 1;
`;
const StyledInput = styled.input`
  width: 70%;
  height: 100%;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
// 각 할일 컴포넌트
const Todo = ({ todo, setTodos }) => {
  //삭제 함수
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };
  //수정 함수
  const editRef = useRef();
  const modifyTodo = () => {
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
  //체크박스
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
  // HTML
  return (
    <StyledLi>
      <span onClick={checkTodo}>{!todo.checked ? "🥚 " : "🐣 "}</span>
      {!todo.edit ? (
        <StyledSpan onClick={checkTodo} checked={todo.checked}>
          {todo.text}
        </StyledSpan>
      ) : (
        <StyledInput
          ref={editRef}
          defaultValue={todo.text}
          onBlur={modifyTodo}
        />
      )}

      <Btns>
        <Button onClick={setEdit}>
          <FaPencilAlt />
        </Button>
        <Button
          sx={{
            fontSize: "24px",
            borderRadius: "50%",
            padding: "0",
            boxSizing: "border-box",
            width: "30px",
            height: "30px",
          }}
          color="error"
          onClick={deleteTodo}
        >
          <BiTrash />
        </Button>
      </Btns>
    </StyledLi>
  );
};

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Todo;
