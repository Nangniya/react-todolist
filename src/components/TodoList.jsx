import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
        <ul>
            {
                todos.map((a, i) => {
                    return(
                        <Todo todos={a} key={i}/>
                    )
                })
            }
        </ul>
    );
};

export default TodoList;