import React, { useRef, useState } from 'react'

const AddTodo = ({ setTodoList }) => {


    const [todoInput, setTodoInput] = useState('');
   
    const id = useRef(0);

    const handleAddTodo = (e) => {
            id.current += 1;
            setTodoList((prev) => [...prev, {
                id: id.current,
                name: todoInput,
                isCompleted: false
                
            }]);
            setTodoInput(''); 
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder='Add todo' value={todoInput} onChange={(e) =>  setTodoInput(e.target.value)} />
                <button onClick={handleAddTodo} disabled={!todoInput}>Add</button>
            </form>
           
        </div>
    )
}

export default AddTodo