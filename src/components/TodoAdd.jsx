import {useState} from 'react';

const TodoAdd = ({todos, setTodos}) => {

    const [value, setValue] = useState('');
    const onChange = (e) => { setValue(e.target.value); };
    const onClick = (e) => { 
        let copy = [...todos];
        copy.push(value);
        setTodos(copy);
        setValue(''); };
    const onKeyDown = (e) => {
        if (e.key === 'Enter') { onClick(); }
    }

    return (
        <div>
          <input
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="할 일을 입력하세요"
          value={value} />
          <button 
          type='submit'
          onClick={onClick}>+</button>
        </div>
    )
}

export default TodoAdd;