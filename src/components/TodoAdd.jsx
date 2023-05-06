import {useRef} from 'react';

const TodoAdd = ({setTodos}) => {

    const newTodoRef = useRef();
    const onSubmit= (e) => { 
        e.preventDefault();
        const newTodoText = newTodoRef.current.value;
        setTodos((prev) => [...prev, newTodoText]);
        newTodoRef.current.value = '';    
    };

    return (
        <form onSubmit={onSubmit}>
          <input
          ref = {newTodoRef}
          placeholder="할 일을 입력하세요"/>
          <button type='submit'>+</button>
        </form>
    )
}

export default TodoAdd;