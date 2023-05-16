import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "@mui/material";

// 각 할일 컴포넌트
const Todo = ({ todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();

  // 수정모드
  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus();
    }
  }, [isEditing]);

  const setEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  //삭제 함수
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };

  //수정 함수
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
      {!isEditing ? (
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
        <Button color="error" onClick={setEdit}>
          <FaPencilAlt />
        </Button>
        <Button color="error" onClick={deleteTodo}>
          <BiTrash />
        </Button>
      </Btns>
    </StyledLi>
  );
};

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  Button {
    min-width: 0;
    width: 40px;
    height: 40px;
    font-size: 24px;
    border-radius: 50%;
  }
`;

//li태그 점 없애기
const StyledLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 20px;
  border-bottom: 1px solid grey;
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

export default Todo;
