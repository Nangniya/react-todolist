import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
    return (
        <ul>
            {
                todos.map((a, i) => {
                    return(
                        <Todo todos={a} key={i} setTodos={setTodos}/>
                    )
                })
            }
        </ul>
    );
};

export default TodoList;