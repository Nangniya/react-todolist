import React from 'react';
import styled from 'styled-components';


const StyledLi = styled.li`
  list-style: none;
`;

const Todo = ({todos, setTodos}) => {
    const deleteTodo = () => {
        setTodos(prev => prev.filter(item => item !== todos));
      };
    return (
        <StyledLi>
            {todos}
            <button onClick={deleteTodo}>삭제</button>
        </StyledLi>
    );
};

export default Todo;