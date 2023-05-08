import React from 'react';
import styled from 'styled-components';


const StyledLi = styled.li`
  list-style: none;
`;
const StyledSpan = styled.span`
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`; //조건부 스타일 적용

const Todo = ({todo, setTodos}) => {
    const deleteTodo = () => {
        setTodos(prev => prev.filter(item => item.id !== todo.id));
      };
    const checkTodo = () => {
      setTodos(prev => prev.map(item => {
        if(item.id === todo.id) {
          return {...item, checked: !item.checked}
        }
        return item;
      }))
    }
    return (
        <StyledLi>
            <span onClick={checkTodo}>{!todo.checked ? '🥚' : '🐣'}
            <StyledSpan checked={todo.checked}>{todo.text}</StyledSpan></span>
            <button onClick={deleteTodo}>삭제</button>
        </StyledLi>
    );
};

export default Todo;