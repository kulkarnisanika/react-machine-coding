import React, { useState } from 'react'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'



const TodoList = () => {
    /*
        TodoList 
            AddTodo - (props - setTodo)
            DisplayTodo - (props - todoList, setTodo)
     */

    const [todoList, setTodoList] = useState([]);
    return (
        <div>
            <AddTodo setTodoList={setTodoList} />
            <DisplayTodo todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}

export default TodoList