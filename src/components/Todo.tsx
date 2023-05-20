import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiTrash } from 'react-icons/bi';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';
import { Button } from '@mui/material';
import { TodoType } from './data';

interface TodoProps {
  todo: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

// 각 할일 컴포넌트
const Todo = ({ todo, setTodos }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef(null);

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
      <span onClick={checkTodo}>{!todo.checked ? '🥚 ' : '🐣 '}</span>
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
        {!isEditing ? (
          <Button color='error' onClick={setEdit}>
            <FaPencilAlt />
          </Button>
        ) : (
          <Button color='error'>
            <FaCheck />
          </Button>
        )}
        <Button color='error' onClick={deleteTodo}>
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

interface StyledSpanProps {
  checked: boolean;
}
//조건부 스타일 적용
const StyledSpan = styled.span<StyledSpanProps>`
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  color: ${(props) => (props.checked ? 'gray' : 'inherit')};
  text-align: left;
  margin-left: 10px;
  flex: 1;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 100%;
  font-size: 20px;
  border: solid 2px grey;
  background-color: rgb(255, 215, 220);
  &:focus {
    outline: none;
  }
`;

export default Todo;
